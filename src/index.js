import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './js/store/index';
import './index.css';
import App from './App';
import collection from 'easter-egg-collection'
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();