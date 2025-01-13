import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' instead of 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
