import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
import CookieSheet from './components/layouts/CookieSheet';
import TimeAgo from 'javascript-time-ago'
import FetchMeIfAuthenticated from './hooks/useFetchMe';
import FetchAdminNotification from './hooks/useFetchAdminNotification';
import FetchUserNotification from './hooks/useFetchUserNotification';

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)



const app = (
  <Provider store={store}>
    <FetchMeIfAuthenticated />
    <FetchAdminNotification />
    <FetchUserNotification />
    <CookieSheet />
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
