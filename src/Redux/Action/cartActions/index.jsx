import {SET_CART,SET_PRICE} from './../../Types';

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

