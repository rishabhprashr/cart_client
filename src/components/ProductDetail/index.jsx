import React from 'react';
import {post } from '../../axios';
import {useEffect} from 'react';
import NotFound from './../Error';
import {CART} from './../../routes';
import {FetchProduct} from './../../Redux/Effects/Products';
import {useSelector} from 'react-redux';


function ProductDetail() {

  useEffect (() => {
    FetchProduct();
  },[]);


  const handleProduct = async () =>{
    console.log(product);
    const data = {"product_id":product.id,"quantity":1};
    const res = await post(CART,data);
    console.log(res);

  }


  const product = useSelector((state) => state.products.product);
  // console.log(`details${JSON.stringify(product)}`)

  return (
    <div>
      {product?<React.Fragment>
        <a href={`/categories/${product?.category?.id}/products`}>{product?.category?.name}</a>
        <div>{product?.name}</div>
        <div>{product?.id}</div>
        <div>{product?.price}</div>
        <button type="button" onClick={handleProduct}>Add to cart</button>
        </React.Fragment>:<NotFound/>}
      
    </div>
  )
}


export default ProductDetail;