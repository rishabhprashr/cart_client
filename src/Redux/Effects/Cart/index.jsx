import {get} from './../../../axios';
import {setCart,setPrice} from './../../Action/cartActions';
import store from './../../store';
import {CART} from './../../../routes';




export const FetchCart = async () =>{
  try{
    const data = await get(CART);
    store.dispatch(setCart(data.data));
    store.dispatch(setPrice(data.totalPrice));
  }catch(e){
    console.log(e);
  }
    
};