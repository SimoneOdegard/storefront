import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './categories.js';
import prodReducer from './products.js';

let reducers = combineReducers({ catReducer, prodReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();