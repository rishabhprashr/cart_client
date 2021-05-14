import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ROOT_PATH,
  CATEGORIES,
  PRODUCTS,
  PRODUCT,
  CART
} from '../../routes';
import Categories from '../../containers/Categories';
import Products from '../../containers/Products';
import ProductDetail from './../../components/ProductDetail';
import NotFound from './../Error';
import Carts from './../../containers/Cart';
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
          <Route path="*" component={NotFound}/>
          
        </Switch>
      </Router>
    );
  }
}


export default RouterWrapper;