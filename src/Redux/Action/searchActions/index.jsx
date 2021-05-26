import {SET_SEARCH,LOADING,SET_RESPONSE} from './../../Types';

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

export const setResponse = (data) => {
  return{
    type: SET_RESPONSE ,
    value: data
  }
}