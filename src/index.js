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
import { io } from "socket.io-client";
import { fetchAdminNotifications } from './redux/actions/notifications';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const socket = io(`${process.env.REACT_APP_API_URL}`,);

socket.on("getNotifications", (payload) => {
  console.log(payload);
  store.dispatch(fetchAdminNotifications(payload))
})


const app = (
  <Provider store={store}>
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
