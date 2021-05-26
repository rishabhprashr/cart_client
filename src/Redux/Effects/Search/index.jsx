import {get} from './../../../axios';
import {SEARCH} from './../../../routes';
import store from './../../store';
import {setResponse,setLoading} from './../../Action/searchActions';

export const fetchSearch = async (query) => {
  store.dispatch(setLoading(true));
  try{
    const searchUrl = SEARCH  + query;
    const res = await get(searchUrl);
    // store.dispatch(setResponse(res.product));
    if(res.success){
      store.dispatch(setResponse(res.products.data));
    }
    console.log(`searchresponse${JSON.stringify(res.products)}`);
  }catch(err){
    console.log(err);
  }
  store.dispatch(setLoading(false));
  

  // return async function(dispatch){
  //   const data ={"name":query};
  //   const res = await search(SEARCH,data);
  //   console.log(res);

  // }
};