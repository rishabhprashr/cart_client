import {get,destroy,put} from './../../../axios';
import {setCart,setPrice,setLoading} from './../../Action/cartActions';
import store from './../../store';
import {CART} from './../../../routes';

export const fetchCart = async () =>{
  store.dispatch(setLoading(true));
  try{
    const data = await get(CART);
    store.dispatch(setCart(data.data));
    store.dispatch(setPrice(data.totalPrice));
  }catch(e){
    console.log(e);
  }
  store.dispatch(setLoading(false));
    
};



// export const fetchCart = async () =>{
//   return async function(dispatch){
//     dispatch(setLoading(true));
//     console.log(`thunkdispatch`);
//     try{
//       const data = await get(CART);
//       dispatch(setCart(data.data));
//       console.log(`thunkdispatch${data.data}`);
//       dispatch(setPrice(data.totalPrice));
    
//     }catch(e){
//       console.log(e);
//     }
//     dispatch(setLoading(false));
//   }
// }

export const handleChange = async (e,cart_items) =>{

  store.dispatch(setLoading(true));
  const data = {"product_id":cart_items.product.id,"quantity":e.target.value};
  try{
    const res = await put(`/cart_items/${cart_items.id}`,data);
    store.dispatch(setCart(res.data));
    store.dispatch(setPrice(res.totalPrice));
  }catch(e){
    console.log(e);
  }
  store.dispatch(setLoading(false));
  // fetchCart();
  // console.log(res);

};

export const handleRemove = async (e) => {
  store.dispatch(setLoading(true));
  // console.log(JSON.stringify(e));
  try{
    const res =await destroy(`/cart_items/${e}`);
    store.dispatch(setCart(res.data));
    store.dispatch(setPrice(res.totalPrice));
  }catch(e){
    console.log(e);
  }
  store.dispatch(setLoading(false));
  // console.log(`delete response ${res}`);
  // fetchCart();
  // console.log(res);
};