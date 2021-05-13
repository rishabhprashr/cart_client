import React from 'react';
import { get }  from './../../axios';
import {useEffect,useState} from 'react';
import {CATEGORIES} from './../../routes';
import Category from './../../components/Category';

function Categories() {

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
      
      {/* {categories?.map((category) =>
          <div>{category.name}</div>
        )} */}
        {categories?.map((category) =>
          <Category key={`category-${category.id}`} category={category}/>
        )}
      
    </div>
  )
}



export default Categories;
