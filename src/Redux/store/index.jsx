import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../Reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

// const middlewares = [thunk,logger];

// const store = createStore(rootReducer,applyMiddleware(...middlewares));

const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;