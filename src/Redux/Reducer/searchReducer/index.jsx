import {SET_SEARCH,LOADING,SET_RESPONSE} from './../../Types';

const initialState = {
  loading: false,
  search:'',
  searchResults: []
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
    case SET_RESPONSE:
      return{
        ...state,
        searchResults: action.value
      }
    default:
      return state;
  }
};

export default searchReducer;