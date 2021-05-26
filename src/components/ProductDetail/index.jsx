import React from 'react';
import {useEffect} from 'react';
import NotFound from './../Error';
import {FetchProduct,handleProduct} from './../../Redux/Effects/Products';
import {useSelector} from 'react-redux';


function ProductDetail() {

  useEffect (() => {
    FetchProduct();
  },[]);

  const product = useSelector((state) => state.products.product);
  // console.log(`details${JSON.stringify(product)}`)

  return (
    <div>
      {product?<React.Fragment>
        <a href={`/categories/${product?.category?.id}/products`}>{product?.category?.name}</a>
        <div>{product?.name}</div>
        <div>{product?.id}</div>
        <div>{product?.price}</div>
        <button type="button" onClick={() => {handleProduct(product)}}>Add to cart</button>
        </React.Fragment>:<NotFound/>}
      
    </div>
  )
}


export default ProductDetail;