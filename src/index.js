import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
