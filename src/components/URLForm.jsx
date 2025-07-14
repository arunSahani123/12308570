import React, { useState, useContext } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { validateURL, validateShortcode } from '../utils/validation';
import { URLContext } from '../context/URLContext';


const URLForm = () => {
  const { addURL } = useContext(URLContext);
  const [originalURL, setOriginalURL] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [validity, setValidity] = useState(30);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = () => {
    if (!validateURL(originalURL)) {
      setError('Invalid URL');
      return;
    }
    if (shortcode && !validateShortcode(shortcode)) {
      setError('Invalid shortcode');
      return;
    }
    const expiryValidity = parseInt(validity);
    if (isNaN(expiryValidity) || expiryValidity <= 0) {
      setError('Validity must be a positive number');
      return;
    }

    const result = addURL({ originalURL, shortcode, validity: expiryValidity });
    if (result.error) {
      setError(result.error);
    } else {
      setError('');
      setSuccess(`URL shortened! Short link: ${window.location.origin}/${result.shortCode}`);
    }
  };

  return (
    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, maxWidth: 600, margin: 'auto' }}>
      <TextField
        label="Original URL"
        fullWidth
        sx={{ mb: 2 }}
        value={originalURL}
        onChange={(e) => setOriginalURL(e.target.value)}
      />
      <TextField
        label="Custom Shortcode (optional)"
        fullWidth
        sx={{ mb: 2 }}
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <TextField
        label="Validity in minutes (default 30)"
        fullWidth
        type="number"
        sx={{ mb: 2 }}
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="green">{success}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>Shorten URL</Button>
    </Box>
  );
};

export default URLForm;