import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ROOT_PATH,
  CATEGORIES,
  PRODUCTS
} from '../../routes';
import Categories from '../../containers/Categories';
import Products from '../../containers/Categories/Products';

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
          
        </Switch>
      </Router>
    );
  }
}


export default RouterWrapper;