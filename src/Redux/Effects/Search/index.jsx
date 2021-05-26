import {get,search} from './../../../axios';
import {SEARCH} from './../../../routes';

export const fetchSearch = (query) => {
  console.log(query);
  return async function(dispatch){
    const data ={"name":query};
    const res = await search(SEARCH,data);
    console.log(res);

  }
};