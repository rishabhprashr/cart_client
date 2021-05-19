import {combineReducers} from 'redux';

import categoryReducer from './../categoryReducer';
import productReducer from './../productReducer';
import cartReducer from './../cartReducer';
import orderReducer from './../orderReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  categories : categoryReducer,
  products : productReducer,
  cart : cartReducer,
  orders : orderReducer
})

export default rootReducer;
