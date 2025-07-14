
import React from 'react';
import { Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
      <Typography variant="h3" color="error" gutterBottom>
        404 - Not Found
      </Typography>
      <Typography variant="h6">
        The URL you are trying to access does not exist or has expired.
      </Typography>
    </Box>
  );
};

export default NotFound;