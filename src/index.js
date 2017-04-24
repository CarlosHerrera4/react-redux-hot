import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import counter from './modules/counter';

const enhancers = [];
// redux devTools
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const makeRootReducer = asyncReducers => combineReducers({
  counter,
  ...asyncReducers
});

const store = createStore(
  makeRootReducer(),
  {},
  compose(applyMiddleware(ReduxThunk), ...enhancers)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
