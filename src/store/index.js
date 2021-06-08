import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import activeCat from './categories.js';

let reducers = combineReducers({ activeCat });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();