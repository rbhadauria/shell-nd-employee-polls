import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

let middlewares = [thunk];
const enhancer = compose(applyMiddleware(...middlewares));
const store = createStore(reducers, {}, enhancer);

export default store;
