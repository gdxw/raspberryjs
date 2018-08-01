import React from 'react';
import ReactDOM from 'react-dom';
import Container from './router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('app') 
)