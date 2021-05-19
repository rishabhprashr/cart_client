import React from 'react';
import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import {get,post,put,destroy} from './../../axios';
// import Cart from './../../components/Cart';
import {CART,ORDERS} from './../../routes';
import {FetchCart} from './../../Redux/Effects/Cart';
import {useSelector,useDispatch} from 'react-redux';
import store from './../../Redux/store';

function Carts() {
  const history = useHistory();
  // const state = store.getState();
  const cart = useSelector((state) => state.cart.cart);
  // const cart = state.cart.cart;
  const dispatch = useDispatch();

  // store.subscribe(cart);

  useEffect (() => {
    FetchCart();
  },[]);


  const handleChange = async (e,cart_items) =>{
  
    const data = {"product_id":cart_items.product.id,"quantity":e.target.value};
    const res = await put(`/cart_items/${cart_items.id}`,data);
    // FetchCart();
    console.log(res);
    FetchCart();

  }

  const handleRemove = async (e) => {
    console.log(JSON.stringify(e));
    const res =await destroy(`/cart_items/${e}`);
    console.log(`delete response ${res}`);
    // FetchCart();
    console.log(res);
    FetchCart();
  }

  const handleOrder = async (e) => {
    try{
      const res = await post(ORDERS);
      if (res.success){
        history.push(`/orders/${res.order.id}`);
      }
    }catch(e){
      console.log(e);
    }
    
  }

  
  const price = useSelector((state) => state.cart.price);
  console.log(`containercart${cart}`);
  console.log(price);


return (

  <div>
    {price?
    <React.Fragment>
    <table>
      <tbody>
      <tr>
        <td>Name</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total price</td>
      </tr>
    {cart?.map((cart_items) => 
      
        <tr key={cart_items.id}>
          <td>{cart_items.product.name}</td>
          <td>${cart_items.product.price}</td>
          <td>
            <input type="number" defaultValue={cart_items.quantity} id={cart_items.id} onChange={(e)=>handleChange(e,cart_items) }/>
          </td>
          <td>${cart_items.price}</td>

          {/* <td><button type="button" id={cart_items.id} onClick={()=>sendDeleteRequest()}>Remove</button></td> */}

          <td><button type="button" id={cart_items.id} onClick={()=>handleRemove(cart_items.id)}>X</button></td>

          {/* {setPrice(price+cart_items.price)} */}
        </tr>
    )}
    <tr>
          <td></td>
          <td></td>
          <td>Total Amount:</td>
          <td>${price}</td>
          <td><button type="button" onClick={()=>handleOrder()}>Order</button></td>
        </tr>
        </tbody>
    </table>

    </React.Fragment>:<h1>Cart Empty</h1>}

  </div>

    



)
}

export default Carts;
