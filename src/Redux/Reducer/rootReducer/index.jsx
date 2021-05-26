import {combineReducers} from 'redux';

import categoryReducer from './../categoryReducer';
import productReducer from './../productReducer';
import cartReducer from './../cartReducer';
import orderReducer from './../orderReducer';
import searchReducer from './../searchReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  categories : categoryReducer,
  products : productReducer,
  cart : cartReducer,
  orders : orderReducer,
  search : searchReducer
})

export default rootReducer;
