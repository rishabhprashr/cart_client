import React from 'react';
import { get }  from './../../axios';
import {useEffect,useState} from 'react';
// import {CATEGORIES} from './../../routes';
import Product from './../../components/Product';

function Products() {

  const [products,setProducts] = useState();

  useEffect (() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () =>{
    const categoryUrl = window.location.pathname;
    const data = await get(categoryUrl);
    // const categories = await data.json();
    console.log(data.data);
    setProducts(data.data);
    


  };


  return (
    <div>
      
      <div>
        {products?.map((product) =>
          <Product key={`product-${product.id}`} product={product}/>
        )}
      </div>
      
    </div>
  )
}



export default Products;