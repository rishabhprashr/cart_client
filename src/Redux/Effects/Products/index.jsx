import {get,post} from './../../../axios';
import {setProducts,setProduct} from './../../Action/productActions';
import store from './../../store';
import {CART} from './../../../routes';


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

export const handleProduct = async (product) =>{
  console.log(product);
  try{
    const data = {"product_id":product.id,"quantity":1};
    const res = await post(CART,data);
    console.log(res);
  }catch(e){
    console.log(e);
  }
};

