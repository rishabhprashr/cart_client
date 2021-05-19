import React from 'react';
import {useEffect} from 'react';
import Product from './../../components/Product';
import {FetchProducts} from './../../Redux/Effects/Products';
import {useSelector} from 'react-redux';

function Products() {

  useEffect (() => {
    FetchProducts();
  },[]);


  const data = useSelector((state) => state.products.products);
  console.log(`productContainer${data}`)
  return (
    <div>
      
      <div>
        {data?.map((product) =>
          <Product key={`product-${product.id}`} product={product}/>
        )}
      </div>
      
    </div>
  )
}



export default Products;