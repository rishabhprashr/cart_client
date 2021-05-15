import React from 'react';
import {useEffect,useState} from 'react';
import {get} from './../../axios';
import Order from './../../components/Order';


function Orders() {

  const [orders,setOrders] = useState([]);

  useEffect (() => {
    fetchOrders();
  },[]);

  const fetchOrders = async () => {
    try{
      const res = await get(`/orders`);
      console.log(res);
      setOrders(res);
    }catch(e){
      console.log(e);
    }
  };


  return (
    <div>
      {orders?.map((order) =>
          
          <React.Fragment>
            {/* {console.log(`new ${order}`)} */}
            <div>
              
              <a href={`/orders/${order.id}`}>{order.invoice_no}-{order.totalPrice}</a>
              {/* <div>
                {order.items.map((item) =>
                item.product.name
                )}</div>
                <Order key={`order-${order.id}`} order={order.items}/> */}
            </div>
          
          </React.Fragment>
      
        )}
      
    </div>
  )
}

export default Orders;
