import {SET_CART,SET_PRICE,LOADING} from './../../Types';

export const setLoading = (data) =>{
    return {
        type:LOADING,
        value: data
    };
}


export const setCart = (data) => {
    console.log(`actioncart${JSON.stringify(data)}`);
    return{
        type:SET_CART,
        value:data
    };
};

export const setPrice = (data) => {
    console.log(`actioncartprice${JSON.stringify(data)}`);
    return{
        type:SET_PRICE,
        value:data
    };
};

