import {get} from './../../../axios';
import {setProducts,setProduct} from './../../Action/productActions';
// import {useDispatch} from 'react-redux';
import store from './../../store';




export const FetchProducts = async () =>{
    const productUrl = window.location.pathname;
    const data = await get(productUrl);
    console.log(`productseffects${data}`);
    try{
      store.dispatch(setProducts(data.data));
    }catch(e){
      console.log(data);
    }
    
};

export const FetchProduct = async () =>{
    const productUrl = window.location.pathname;
    const data = await get(productUrl);
    console.log(`producteffects${data}`);
    try{
      store.dispatch(setProduct(data.data));
    }catch(e){
      console.log(data);
    }
    
};

