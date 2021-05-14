import React from 'react';
import {useEffect,useState} from 'react';
import {get,put} from './../../axios';
import Cart from './../../components/Cart';
import "./index.css";

function Carts() {

  const [cart,setCart] = useState([]);
  // const [quantity,setQuantity] = useState(0);

  useEffect (() => {
    fetchCart();
  },[]);

  const fetchCart = async () =>{
    const data = await get('/cart_items');
    // const categories = await data.json();
    console.log(data);
    try{
      setCart(data);
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
            {/* <td>{cart_items.quantity}</td> */}
            <td>
              <input type="number" defaultValue={cart_items.quantity} id={cart_items.id} onChange={(e)=>handleChange(e,cart_items) }/>
            </td>
            <td>{cart_items.price}</td>
          </tr>
        </React.Fragment>
      )}
      </table>
      </form>
    </div>

      

        

        // <div className="shopping">
        //   <div class="column-labels">
        //     <label class="product-details">Product</label>
        //     <label class="product-price">Price</label>
        //     <label class="product-quantity">Quantity</label>
        //     <label class="product-removal">Remove</label>
        //     <label class="product-line-price">Total</label>
        //   </div>

        //   {cart?.map((cart_items) =>
        //   // <Cart key={`cart_item-${cart_items.id}`} cart_items={cart_items}/>
        //   <React.Fragment>
        //     <div class="product">

        //       <div class="product-details">
        //         <div class="product-title">{cart_items.product.name}</div>
        //       </div>
        //       <div class="product-price">{cart_items.product.price}</div>
        //       <div class="product-quantity">
        //         <input type="number" value={cart_items.quantity} min="1"/>
        //       </div>
        //       <div class="product-removal">
        //         <button class="remove-product">
        //           Remove
        //         </button>
        //       </div>
        //       <div class="product-line-price">{cart_items.price}</div>
        //   </div>
        //   </React.Fragment>

          
        // )}

          
        // </div>


      
   
  )
}

export default Carts;
