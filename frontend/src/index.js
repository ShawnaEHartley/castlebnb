import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import { createReview } from './store/listings';
import './index.css'; 

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.createReview = createReview;
}



function Root() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  );
}

const renderApplication = () => {
  const root = ReactDOMClient.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
}

if (sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
} else {
  renderApplication();
};

