import React from 'react';
import {useEffect,useState} from 'react';

function Products() {
  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    const data = await fetch(
      'http://localhost:3000/api/categories'
    );
    const products = await data.json();
    console.log(products);
  };





  return (
    <div>
      <h1>Products</h1>
    </div>
  )
}

export default Products;
