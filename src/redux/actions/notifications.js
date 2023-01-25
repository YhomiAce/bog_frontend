import * as ActionType from '../type';
import axios from '../../config/config';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export const loading = () => {
    return {
        type: ActionType.LOADING
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.PROJECT_ERROR,
        payload
    }
}

export const fetchUserNotifications = (payload) => {
    return {
        type: ActionType.FETCH_USER_NOTIFICATIONS,
        payload
    }
}

export const fetchAdminNotifications = (payload) => {
    return {
        type: ActionType.FETCH_ADMIN_NOTIFICATIONS,
        payload
    }
}


export const fetchAllUserNotifications = (userId) => {
    return async (dispatch) => {
        try {
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            dispatch(loading());
            const response = await axios.get(`/notifications/user/${userId}`, config);
            console.log(response);
            dispatch(fetchUserNotifications(response.data))
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