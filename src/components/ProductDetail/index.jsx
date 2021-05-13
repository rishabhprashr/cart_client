import React from 'react';
import { get } from '../../axios';
import {useEffect,useState} from 'react';


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
    setProduct(data);
    


  };



  // const { product: { id, name, price, category }} = this.state;

  return (
    <div>
      <a href={`/categories/${product?.category.id}/products`}>{product?.category.name}</a>
        <div>{product?.name}</div>
        <div>{product?.id}</div>
        <div>{product?.price}</div>
      
    </div>
  )
}


export default ProductDetail;