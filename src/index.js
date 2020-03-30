import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from 'containers/App';
import store from './store';
import 'assets/index.css';
import makeServer from './Database';

makeServer();
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root'),
);
