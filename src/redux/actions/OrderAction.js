import * as ActionType from '../type';
import axios from '../../config/config';
// import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";



const authToken = localStorage.getItem("auth_token");
const config = {
    headers:
    {
        "Content-Type": "application/json",
        'Authorization': authToken
    }

}

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
 
export const getAdminOrders = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const response = await axios.get('/orders/all', config);
            // console.log(`====BY === OLAS==${response}`);
            // console.log(response);
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

// Code by Olatech ends here 
 
 