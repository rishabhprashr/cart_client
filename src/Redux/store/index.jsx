import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './';
import logger from 'redux-logger';

const middlewares = [thunk,logger];

const store = createStore(rootreducer,applyMiddleware(...middlewares));

export default store;