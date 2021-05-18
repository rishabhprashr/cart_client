import {SET_CATEGORY} from './../../Types';

const initialState = {
  categories : []
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      console.log(`reducer${JSON.stringify(action.value)}`);
      return { ...state ,categories: action.value};
    default:
      return state;
  }
};



export default categoryReducer;