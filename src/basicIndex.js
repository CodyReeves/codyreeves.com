import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';

render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
	document.getElementById('root')
);
