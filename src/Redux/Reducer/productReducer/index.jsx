import {SET_PRODUCT,SET_PRODUCTS} from './../../Types';

const initialState = {
  products : [],
  product : []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      console.log(`reducerproducts${JSON.stringify(action.value)}`);
      return { ...state ,products : action.value};
    case SET_PRODUCT:
      console.log(`reducerproduct${JSON.stringify(action.value)}`);
      return { ...state ,product : action.value}
    default:
      return state;
  }
};



export default productReducer;