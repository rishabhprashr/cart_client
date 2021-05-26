import {SET_SEARCH,LOADING} from './../../Types';

const initialState = {
  loading: false,
  search:''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return{
        ...state,
        search:action.value
      };
    case LOADING:
      return{
        ...state,
        loading:action.value
      };
    default:
      return state;
  }
};

export default searchReducer;