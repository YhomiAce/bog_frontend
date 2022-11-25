import * as ActionType from '../type';
// import axios from '../../config/config';

export const addToCart = (payload, cartNum) => {
    payload.qty = cartNum;
    return {
        type: ActionType.ADD_TO_CART,
        payload
    }
}

export const updateCart = () => {
    return {
        type: ActionType.UPDATE_CART
    }
}

export const incrementQuantity = (payload) => {
    return {
        type: ActionType.INCREMENT_QUANTITY,
        payload
    }
}

export const decrementQuantity = (payload) => {
    return {
        type: ActionType.DECREMENT_QUANTITY,
        payload
    }
}

export const clearCart = () => {
    return {
        type: ActionType.CLEAR_CART
    }
}

export const deleteItem = (payload) => {
    return {
        type: ActionType.DELETE_CART_ITEM,
        payload
    }
}

