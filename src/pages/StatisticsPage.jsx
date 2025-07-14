import React, { useContext } from 'react';
import { Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import { URLContext } from '../context/URLContext';

const StatisticsPage = () => {
  const { getStats } = useContext(URLContext);
  const data = getStats();

  if (data.length === 0) return <p>No URL data available.</p>;

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>URL Shortener Statistics</Typography>
      {data.map((entry) => (
        <Paper key={entry.shortCode} sx={{ p: 2, mb: 2 }}>
          <Typography>Short URL: {window.location.origin}/{entry.shortCode}</Typography>
          <Typography>Original URL: {entry.originalURL}</Typography>
          <Typography>Created At: {new Date(entry.createdAt).toLocaleString()}</Typography>
          <Typography>Expires At: {new Date(entry.expiryDate).toLocaleString()}</Typography>
          <Typography>Click Count: {entry.clicks.length}</Typography>
          {entry.clicks.length > 0 && (
            <>
              <Typography variant="h6" sx={{ mt: 1 }}>Click details:</Typography>
              {entry.clicks.map((click, index) => (
                <List key={index}>
                  <ListItem>
                    <ListItemText
                      primary={`Click at ${new Date(click.timestamp).toLocaleString()}`}
                      secondary={`Source: ${click.source}, Location: ${click.location}`}
                    />
                  </ListItem>
                </List>
              ))}
            </>
          )}
        </Paper>
      ))}
    </div>
  );
};

export default StatisticsPage;