import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../Reducer/rootReducer';
import logger from 'redux-logger';

const middlewares = [thunk,logger];

const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;