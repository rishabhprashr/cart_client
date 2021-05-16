import React from 'react';
import './index.css';
import Search from './../../components/Search';

function Nav() {
  return (
    <div>
      <nav>
        <div>
          <Search/>
        </div>
        <div className="cart">
          <a href={'/cart_items'}>Cart</a>
        </div>
        

      </nav>
      
    </div>
  )
}

export default Nav;
