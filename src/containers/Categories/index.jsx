import React from 'react';
import {useEffect,useState} from 'react';

function Categories() {

  const [categories,setCategory] = useState();

  useEffect (() => {
    fetchCategories();
  },[]);

  const fetchCategories = async () =>{
    const data = await fetch(
      'http://localhost:3000/api/categories'
    );
    const categories = await data.json();
    setCategory(categories);
    console.log(categories);


  };


  return (
    <div>
      
      {categories?.map((category) =>
          <div>{category.name}</div>
        )}
      
    </div>
  )
}



export default Categories;
