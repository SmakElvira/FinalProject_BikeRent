import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';
import { fetchMe } from './store/userSlice';
import { getToken } from './api/token';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (getToken()) {
  store.dispatch(fetchMe())
}

root.render(
  <Provider store={ store }>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>
);