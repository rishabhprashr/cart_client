import React from 'react';
import {useEffect,useState} from 'react';
import {get,post} from './../../axios';

function Cart() {

  const [categories,setCategory] = useState();

  useEffect (() => {
    fetchCategories();
  },[]);

  const fetchCategories = async () =>{
    const data = await get(CATEGORIES);
    // const categories = await data.json();
    setCategory(data);
    console.log(data);


  };


  return (
    <div>
      

        {categories?.map((category) =>
          <Category key={`category-${category.id}`} category={category}/>
        )}
      
    </div>
  )
}



export default Categories;

export default Cart;
