import {SET_PRODUCT,SET_PRODUCTS} from './../../Types';

export const setProducts= (data) => {
    console.log(`actionproduct${JSON.stringify(data)}`);
    return{
        type:SET_PRODUCTS,
        value:data
    };
};

export const setProduct= (data) => {
    console.log(`actionproduct${JSON.stringify(data)}`);
    return{
        type:SET_PRODUCT,
        value:data
    };
};