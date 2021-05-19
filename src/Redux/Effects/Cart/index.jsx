import {get,destroy,put} from './../../../axios';
import {setCart,setPrice} from './../../Action/cartActions';
import store from './../../store';
import {CART} from './../../../routes';




export const fetchCart = async () =>{
  try{
    const data = await get(CART);
    store.dispatch(setCart(data.data));
    store.dispatch(setPrice(data.totalPrice));
  }catch(e){
    console.log(e);
  }
    
};

export const handleChange = async (e,cart_items) =>{
  
    const data = {"product_id":cart_items.product.id,"quantity":e.target.value};
    const res = await put(`/cart_items/${cart_items.id}`,data);
    fetchCart();
    console.log(res);
    // store.subscribe(() => store.getState())
    // FetchCart();

};

export const handleRemove = async (e) => {
    console.log(JSON.stringify(e));
    const res =await destroy(`/cart_items/${e}`);
    console.log(`delete response ${res}`);
    fetchCart();
    console.log(res);
    // FetchCart();
};