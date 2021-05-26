import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchSearch} from './../../Redux/Effects/Search';
import {setSearch} from './../../Redux/Action/searchActions';

function Search() {

  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.search);
  const results = useSelector((state) => state.search.searchResults);
  console.log(`searchcontainer${results}`);


  useEffect (() => {
    fetchSearch(query);
  },[query]);


  return (
    <div>
      <input type="text"
      placeholder="Search for products" 
      value={query}
      onChange={(e) =>{dispatch(setSearch(e.target.value))}}/>
    </div>
  )
}

export default Search;
