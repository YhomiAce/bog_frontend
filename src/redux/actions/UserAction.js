import * as ActionType from '../type';
import axios from '../../config/config';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const fetchUsers = (payload) => {
    return {
        type: ActionType.FETCH_USERS,
        payload
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.USER_ERROR,
        payload
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/all/users');
            console.log(response);
            dispatch(fetchUsers(response.users))
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

