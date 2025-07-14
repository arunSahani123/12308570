<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
=======
# 12308570
>>>>>>> 113a083dbf15d8f29df634856351a8c700d47662

# URL Shortener with Pre-Authorized Access

A simple web application for creating and managing shortened URLs. This project assumes all users are pre-authorized, with no registration or login required.

---

## Features

- Create new shortened URLs
- View list of all shortened URLs
- No need for user registration or login
- Basic logging for API requests

---

## Technologies Used

- React.js for frontend UI
- Built-in React Context for pre-authorization
- Custom logger middleware
- Standard JavaScript for utility functions

---

## Project Structure

```plaintext  
src/  
├── components/         # React components like URLForm, URLList, etc.  
├── pages/              # Page components (HomePage, StatisticsPage, NotFound)  
├── utils/              # Utility functions (logger, validation)  
├── context/            # Context for pre-authorized user state  
├── App.js              # Main application component  
└── index.js            # Entry point rendering the app
