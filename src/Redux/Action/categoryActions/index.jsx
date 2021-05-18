import {GET_CATEGORY,SET_CATEGORY} from './../../Types';

export const getCategory = () => {
    return {
        type: GET_CATEGORY
    };
};

export const setCategory = (data) => {
    console.log(`action${JSON.stringify(data)}`);
    return{
        type:SET_CATEGORY,
        value:data
    };
};