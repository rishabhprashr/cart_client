import {SET_CART,SET_PRICE} from './../../Types';

const initialState = {
  cart : []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      console.log(`reducercart${JSON.stringify(action.value)}`);
      return { ...state ,cart: action.value};
    case SET_PRICE:
      console.log(`reducercartprice${JSON.stringify(action.value)}`);
      return { ...state ,price: action.value}
    default:
      return state;
  }
};



export default categoryReducer;