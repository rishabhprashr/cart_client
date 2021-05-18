import './style.css';
import RouterWrapper from '../../components/RouterWrapper';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Nav from './../../components/Navigation';
import store from './../../Redux/store';
import { Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Nav/>
      
        <RouterWrapper />
      </React.Fragment>
    </Provider>
      
  );
}

export default App;
