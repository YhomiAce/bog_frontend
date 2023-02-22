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

export const removeAdminNotifications = (payload) => {
    return {
        type: ActionType.DELETE_ADMIN_NOTIFICATIONS,
        payload
    }
}

export const removeUserNotifications = (payload) => {
    return {
        type: ActionType.DELETE_USER_NOTIFICATIONS,
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
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}

export const fetchAllAdminNotifications = () => {
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
            const response = await axios.get('/notifications/admin', config);
            console.log(response);
            dispatch(fetchAdminNotifications(response.data))
        } catch (error) {
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}

export const deleteAdminNotification = (id) => {
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
            const response = await axios.delete(`/notifications/delete/${id}`, config);
            console.log(response);
            dispatch(removeAdminNotifications(id))
        } catch (error) {
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}

export const deleteUserNotification = (id) => {
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
            const response = await axios.delete(`/notifications/delete/${id}`, config);
            console.log(response);
            dispatch(removeUserNotifications(id))
        } catch (error) {
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}
