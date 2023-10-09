import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import { BrowserRouter } from 'react-router-dom';
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
