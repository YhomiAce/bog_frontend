import * as ActionType from '../type';
import axios  from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const registerSuccess = (payload) => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payload
    }
}

export const registerFail = (payload) => {
    return {
        type: ActionType.REGISTER_FAIL,
        payload
    }
}

export const getUser = (payload) => {
    return {
        type: ActionType.GET_USER_FROM_FAKE_API,
        payload
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.SET_ERROR,
        payload
    }
}

// export const getUserFromFakeApi = () => {
//     return async (dispatch) => {

//     }
// }

export const getUserFromFakeApi = () => {
    return async (dispatch) => {
        try {
            const url = "https://jsonplaceholder.typicod.com/users/1";
            const response = await axios.get(url);
            const data = response.data;
            console.log(response.data);
            dispatch(getUser(data))
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
            dispatch(setError(error.message))
        }
    }
}