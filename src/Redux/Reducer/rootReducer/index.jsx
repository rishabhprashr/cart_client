import {combineReducers} from 'redux';

import categoryReducer from './../categoryReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  categories : categoryReducer
})

export default rootReducer;
