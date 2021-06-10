import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import catReducer from './categories.js';
import prodReducer from './products.js';
import cartReducer from './simple-cart.js';
import apiReducer from './api-reducer.js';

let reducers = combineReducers({ catReducer, prodReducer, cartReducer, apiReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();