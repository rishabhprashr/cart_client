import {SET_CART,SET_PRICE,LOADING} from './../../Types';
import store from './../../store';

const initialState = {
  loading: false,
  cart : []
};

const categoryReducer = (state = initialState, action) => {
  console.log(`initialstate${JSON.stringify(state)}`);
  switch (action.type) {
    case LOADING:
      return {...state,loading: action.value};
    case SET_CART:
      console.log(`reducercart${JSON.stringify(action.value)}`);
      return { ...state ,cart: action.value};
    case SET_PRICE:
      console.log(`reducercartprice${JSON.stringify(action.value)}`);
      return { ...state ,price: action.value};
    default:
      return state;
  }
};



export default categoryReducer;