import React from 'react';
import './index.css';
import Search from './../../components/Search';


function Nav() {
  return (
    <div>
      <nav className="nav">
        <div>
        <ul className="navlinks">
          <Search/>
          <a href={`/login`}>Login</a>
          
          <a href={'/cart_items'}>Cart</a>
          </ul>
        
        </div>
        

      </nav>
      
    </div>
  )
}

export default Nav;
