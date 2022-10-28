import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
        </ThemeProvider>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
)

const root = createRoot(document.getElementById('root'));
root.render(app);
