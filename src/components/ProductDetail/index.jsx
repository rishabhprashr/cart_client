import React from 'react';
import { get,post } from '../../axios';
import {useEffect,useState} from 'react';
import NotFound from './../Error';


function ProductDetail() {

  const [product,setProduct] = useState();

  useEffect (() => {
    fetchProduct();
  },[]);

  const fetchProduct = async () =>{
    const productUrl = window.location.pathname;
    const data = await get(productUrl);
    // const categories = await data.json();
    console.log(data);
    // if (data.success)
    try{
      setProduct(data.data);
    }catch(e){
      console.log(data);
    }
  };

  const handleProduct = async () =>{
    console.log(product);
    const data = {"product_id":product.id,"quantity":1};
    const res = await post('/cart_items',data);
    console.log(res);

  }



  // const { product: { id, name, price, category }} = this.state;

  return (
    <div>
      {product?<React.Fragment>
        <a href={`/categories/${product?.category.id}/products`}>{product?.category.name}</a>
        <div>{product?.name}</div>
        <div>{product?.id}</div>
        <div>{product?.price}</div>
        <button type="button" onClick={handleProduct}>Add to cart</button>
        </React.Fragment>:<NotFound/>}
      
    </div>
  )
}


export default ProductDetail;