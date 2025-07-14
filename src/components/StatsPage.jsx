// src/pages/HomePage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const StartPage = () => {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to URL Shortener
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create and manage shortened URLs with analytics.
      </Typography>
      {/* You can add more introduction or navigation buttons here */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" gutterBottom>
          Use the form below to generate a short URL.
        </Typography>
      </Box>
    </Container>
  );
};

export default StartPage;