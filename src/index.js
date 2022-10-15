import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const app = (
  <BrowserRouter>
    <React.StrictMode>
     <App />
    </React.StrictMode>
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
