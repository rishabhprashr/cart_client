import React from 'react';
import {useEffect,useState} from 'react';
import {get,put,destroy} from './../../axios';
import Cart from './../../components/Cart';
import "./index.css";

function Carts() {

  const [cart,setCart] = useState([]);
  const [price,setPrice] = useState([]);

  useEffect (() => {
    fetchCart();
  },[]);

  const fetchCart = async () =>{
    const data = await get('/cart_items');
    // const categories = await data.json();
    console.log(data);
    try{
      setCart(data.data);
      setPrice(data.totalPrice);
    }catch(e){
      console.log(e);
    }
    


  }

  const handleChange = async (e,cart_items) =>{
    // console.;
    // debugger;
    console.log(e.target.value);
    console.log(cart_items.id);
    // console.log(JSON.stringify(e));
  
    const data = {"product_id":cart_items.product.id,"quantity":e.target.value};
    const res = await put(`/cart_items/${cart_items.id}`,data);
    fetchCart();
    console.log(res);

  }

  const handleRemove = async (e) => {
    console.log(JSON.stringify(e));
    const res =await destroy(`/cart_items/${e}`);
    console.log(`delete response ${res}`);
    fetchCart();
    console.log(res);
  }


  return (

    <div>
      <form>
      <table>
        <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total price</td>
          </tr>
      {cart?.map((cart_items) => 
        <React.Fragment>
          <tr>
            <td>{cart_items.product.name}</td>
            <td>{cart_items.product.price}</td>
            <td>
              <input type="number" defaultValue={cart_items.quantity} id={cart_items.id} onChange={(e)=>handleChange(e,cart_items) }/>
            </td>
            <td>{cart_items.price}</td>

            {/* <td><button type="button" id={cart_items.id} onClick={()=>sendDeleteRequest()}>Remove</button></td> */}

            <td><button type="button" id={cart_items.id} onClick={()=>handleRemove(cart_items.id)}>Remove</button></td>

            {/* {setPrice(price+cart_items.price)} */}
          </tr>
          
        </React.Fragment>


      )}
      <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{price}</td>
          </tr>
      </table>
      </form>
    </div>

      



  )
}

export default Carts;
