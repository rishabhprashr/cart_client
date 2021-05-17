
import React from 'react';
// import { get } from '../../axios';


function Category(props) {
  const {category} = props;
  return (
    <div>
      <a href={`/categories/${category.id}/products`}>
        <div>{category.id}</div>
        <div>{category?.description}</div>
      </a>
    </div>
  )
}

export default Category;