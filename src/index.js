import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Global.css'; // This ensures your global styles load first

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);