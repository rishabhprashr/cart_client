import {get,post} from './../../../axios';
import {ORDERS} from './../../../routes';
import store from './../../store';
import {setOrders,setOrder} from './../../Action/orderActions';


export const fetchOrders = async () => {
  try{
    const res = await get(ORDERS);
    console.log(res);
    store.dispatch(setOrders(res));
  }catch(e){
    console.log(e);
  }
};

export const fetchOrder = async() => {
  const orderUrl = window.location.pathname;
  try {
    const res = await get(orderUrl);
    console.log(res);
    store.dispatch(setOrder(res));
  }catch(e) {
    console.log(e);
  }
}

// export const handleOrder = async (e) => {
//   let history = useHistory();
//     try{
//       const res = await post(ORDERS);
//       if (res.success){
//         // history.push(`/orders/${res.order.id}`);
//         store.dispatch(push(`/orders/${res.order.id}`));
//       }
//     }catch(e){
//       console.log(e);
//     }
    
//   }