import React, { useContext } from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import { URLContext } from '../context/URLContext';

const URLList = () => {
  const { urlData } = useContext(URLContext);

  if (urlData.length === 0) {
    return <p>No URLs shortened yet.</p>;
  }

  return (
    <Paper sx={{ mt: 4, p: 2 }}>
      <Typography variant="h6">URLs Created</Typography>
      <List>
        {urlData.map((entry) => (
          <ListItem key={entry.shortCode} sx={{ flexDirection: 'column', alignItems: 'flex-start', mb: 1, border: '1px solid #ddd', p: 1, borderRadius: 2 }}>
            <ListItemText primary={`Short URL: ${window.location.origin}/${entry.shortCode}`} />
            <Typography variant="body2">Original URL: {entry.originalURL}</Typography>
            <Typography variant="body2">Created At: {new Date(entry.createdAt).toLocaleString()}</Typography>
            <Typography variant="body2">Expires At: {new Date(entry.expiryDate).toLocaleString()}</Typography>
            <Typography variant="body2">Clicks: {entry.clicks.length}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default URLList;