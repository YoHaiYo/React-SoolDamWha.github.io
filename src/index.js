import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import King from './King.js';
import 'bootstrap/dist/css/bootstrap.css';
import './data/MainSwiper.json';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <King />
  </React.StrictMode>
);

