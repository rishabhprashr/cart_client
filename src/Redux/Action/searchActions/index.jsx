import {SET_SEARCH,LOADING} from './../../Types';

export const setLoading = (data) => {
  return {
    type: LOADING,
    value: data
  }
};

export const setSearch = (data) => {
  return{
    type: SET_SEARCH ,
    value: data
  }
};