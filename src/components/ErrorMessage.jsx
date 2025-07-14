// src/components/ErrorMessage.js
import React from 'react';
import { Typography, Paper } from '@mui/material';

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <Paper sx={{ padding: 2, backgroundColor: '#fdecea', border: '1px solid #f5c2c0', borderRadius: 4, mb: 2 }}>
      <Typography variant="body1" color="error">
        {message}
      </Typography>
    </Paper>
  );
};

export default ErrorMessage;