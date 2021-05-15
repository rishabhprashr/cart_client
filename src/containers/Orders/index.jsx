import React from 'react';
import {useEffect,useState} from 'react';
import {get} from './../../axios';
// import Order from './../../components/Order';
import {ORDERS} from './../../routes';


function Orders() {

  const [orders,setOrders] = useState([]);

  useEffect (() => {
    fetchOrders();
  },[]);

  const fetchOrders = async () => {
    try{
      const res = await get(ORDERS);
      console.log(res);
      setOrders(res);
    }catch(e){
      console.log(e);
    }
  };


  return (
    <div>
      <h2>Orders</h2>
      {orders?.map((order,index) =>
      <div key={order.invoice_no}>
        <span>{index+1} </span>
        <a href={`/orders/${order.id}`}>{order.invoice_no}</a>
        <h4>Ordered at:  {order.created_at}</h4>
      </div>
      )}
    </div>
  )
}

export default Orders;
