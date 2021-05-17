import React from 'react';
import './index.css';
import Search from './../../components/Search';
import Login from './../../components/Login';

function Nav() {
  return (
    <div>
      <nav className="nav">
        <div>
        <ul className="navlinks">
          <Search/>
          {/* <Login/> */}
          
          <a href={'/cart_items'}>Cart</a>
          </ul>
        
        </div>
        

      </nav>
      
    </div>
  )
}

export default Nav;
