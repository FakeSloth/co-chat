import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import io from 'socket.io-client';
import routes from './routes';

global.socket = io();

const store = createStore(function() {});

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
