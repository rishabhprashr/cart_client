import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ROOT_PATH,
  CATEGORIES,
  PRODUCTS,
  PRODUCT,
  CART,
  ORDERS,
  ORDER
} from '../../routes';
import Categories from '../../containers/Categories';
import Products from '../../containers/Products';
import ProductDetail from './../../components/ProductDetail';
import NotFound from './../Error';
import Carts from './../../containers/Cart';
import Orders from './../../containers/Orders';
import Order from './../../components/Order';
// import Product from '../ProductDetail';

class RouterWrapper extends React.Component {


  render() {
    return(
      <Router>
        <Switch>
          
          <Route exact path={ROOT_PATH} render={() =>(
            <div>Welcome</div>
          )}/>
          <Route exact path={CATEGORIES} component={Categories}/>
          <Route exact path={PRODUCTS} component={Products}/>
          <Route exact path={PRODUCT} component={ProductDetail}/>
          <Route exact path={CART} component={Carts}/>
          <Route exact path={ORDERS} component={Orders}/>
          <Route exact path={ORDER} component={Order}/>
          <Route path="*" component={NotFound}/>
          
        </Switch>
      </Router>
    );
  }
}


export default RouterWrapper;