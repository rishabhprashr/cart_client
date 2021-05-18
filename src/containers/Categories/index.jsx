import React from 'react';
import { get }  from './../../axios';
import {useEffect,useState} from 'react';
import {CATEGORIES} from './../../routes';
import Category from './../../components/Category';
import {useSelector} from 'react-redux';
import {FetchCategories} from './../../Redux/Effects/Categories';




function Categories() {

  // const [categories,setCategory] = useState();
  
  useEffect (() => {
    console.log('categories');
    FetchCategories();
  },[]);

  // const fetchCategories = async () =>{
  //   const data = await get(CATEGORIES);
  //   // const categories = await data.json();
  //   setCategory(data);
  //   console.log(data);


  // };

  const data = useSelector((state) => state.categories.categories); 
  return (
    
    <div>
      
      {console.log(`containercategory${JSON.stringify(data)}`)};

        {data?.map((category) =>
          <Category key={`category-${category.id}`} category={category}/>
        )}
      
    </div>
  )
}



export default Categories;
