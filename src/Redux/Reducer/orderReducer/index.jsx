import {SET_ORDERS,SET_ORDER} from './../../Types';

const initialState = {
  orders : [],
  order : []
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      console.log(`reducerorders${JSON.stringify(action.value)}`);
      return { ...state ,orders : action.value};
    case SET_ORDER:
      console.log(`reducerorder${JSON.stringify(action.value)}`);
      return { ...state ,order : action.value}
    default:
      return state;
  }
};



export default orderReducer;