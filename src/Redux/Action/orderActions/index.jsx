import {SET_ORDER,SET_ORDERS} from './../../Types';

export const setOrders = (data) => {
    console.log(`actionorders${JSON.stringify(data)}`);
    return{
        type:SET_ORDERS,
        value:data
    };
};

export const setOrder = (data) => {
    console.log(`actionorder${JSON.stringify(data)}`);
    return{
        type:SET_ORDER,
        value:data
    };
};