import {get} from './../../../axios';
import {setCategory} from './../../Action/categoryActions';
// import {useDispatch} from 'react-redux';
import store from './../../store';




export const FetchCategories = async () =>{
    const data = await get('/categories');
    // const categories = await data.json();
    // setCategory(data);
    store.dispatch(setCategory(data));
    console.log(data);
};
