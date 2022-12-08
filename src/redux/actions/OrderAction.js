import * as ActionType from '../type';
import axios from '../../config/config';
// import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const loading = () => {
    return {
        type: ActionType.LOADING
    }
}
 
 
// Code by Olatech 

export const setError = (payload) => {
    return {
        type: ActionType.PRODUCT_ERROR,
        payload
    }
}

export const fetchAdminOrder = (payload) => {
    return {
        type: ActionType.FETCH_ADMIN_ORDERS,
        payload
    }
}

export const fetchUserOrder = (payload) => {
    return {
        type: ActionType.FETCH_USER_ORDERS,
        payload
    }
}

export const fetchOrderRequest = (payload) => {
    return {
        type: ActionType.FETCH_ORDER_REQUEST,
        payload
    }
}
 
export const getAdminOrders = () => {
    return async (dispatch) => {
        try {
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/orders/all', config);
            dispatch(fetchAdminOrder(response.data))
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}
 
export const getUserOrders = () => {
    return async (dispatch) => {
        try {
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/orders/my-orders', config);
            dispatch(fetchUserOrder(response.data))
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}
 
export const getProductOwnerOrders = () => {
    return async (dispatch) => {
        try {
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            dispatch(loading());
            const response = await axios.get('/orders/order-request', config);
            dispatch(fetchOrderRequest(response.data))
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}

// Code by Olatech ends here 
 
 