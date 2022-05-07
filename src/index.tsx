import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';

import App from './components/app/app';
import HistoryRoute from './components/history-route/history-route';

import reportWebVitals from './reportWebVitals';
import { browserHistory } from './browser-history';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRoute history={browserHistory}>
        <CssBaseline />
        <App />
      </HistoryRoute>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
