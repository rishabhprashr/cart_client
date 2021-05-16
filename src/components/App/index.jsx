import './style.css';
import RouterWrapper from '../../components/RouterWrapper';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Nav from './../../components/Navigation';


function App() {
  return (
    <React.Fragment>
      <Nav/>
    
      <RouterWrapper />
    </React.Fragment>
      
  );
}

export default App;
