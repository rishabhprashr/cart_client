import {combineReducers} from 'redux';

import categoryReducer from './../categoryReducer';
import productReducer from './../productReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  categories : categoryReducer,
  products : productReducer
})

export default rootReducer;
