import React from 'react';
import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {fetchOrder} from './../../Redux/Effects/Orders';

function Order() {
  
  // console.log(props);
  const order = useSelector((state) => state.orders.order);
  console.log(order);

  useEffect (() => {
    fetchOrder();
  },[]);

  // const fetchOrder = async() => {
  //   const orderUrl = window.location.pathname;
  //   try {
  //     const res = await get(orderUrl);
  //     console.log(res);
  //     setOrder(res);
  //   }catch(e) {
  //     console.log(e);
  //   }
  // }


  return (
    <div>
      <div>
        <h2>Invoice No:{order?.invoice_no}</h2>
        <h3>Order Date:{order?.created_at}</h3>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Total Price</td>
          </tr>
          {order?.items?.map((item,index) =>
            <tr key={index}>
              <td>{item.product.name}</td>
              <td>{item.quantity}</td>
              <td>{item.product.price}</td>
              <td>{item.price}</td>
            </tr>
          )}
          <tr>
            <td></td>
            <td></td>
            <td><h4>Bill Amount</h4></td>
            <td><h4>{order?.totalPrice}</h4></td>
          </tr>

        </tbody>
      </table>
      
    </div>
  )
}

export default Order;
