import React from 'react';
import {useEffect} from 'react';
import {fetchOrders} from './../../Redux/Effects/Orders';
import {useSelector} from 'react-redux';


function Orders() {

  const orders = useSelector((state) => state.orders.orders);
  console.log(`orderscontainer${orders}`);

  useEffect (() => {
    fetchOrders();
  },[]);

  // const fetchOrders = async () => {
  //   try{
  //     const res = await get(ORDERS);
  //     console.log(res);
  //     setOrders(res);
  //   }catch(e){
  //     console.log(e);
  //   }
  // };


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
