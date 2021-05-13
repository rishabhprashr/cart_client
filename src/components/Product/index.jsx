import React from 'react';
// import { get } from '../../axios';


function Product(props) {
  const { product: { category_id, id, name, price } } = props;
  return (
    <div>
      <a href={`/categories/${category_id}/products/${id}`}>
        <div>{id}</div>
        <div>{name}</div>
        <div>{price}</div>
      </a>
      
    </div>
  )
}

export default Product;