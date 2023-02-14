import * as ActionType from '../type';
import axios from '../../config/config';
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Swal from 'sweetalert2';


export const fetchUsers = (payload) => {
    return {
        type: ActionType.FETCH_USERS,
        payload
    }
}

export const fetchAdmin = (payload) => {
    return {
        type: ActionType.FETCH_ADMIN,
        payload
    }
}

export const addAdmin = (payload) => {
    return {
        type: ActionType.ADD_ADMIN,
        payload
    }
}

export const removeAdmin = (payload) => {
    return {
        type: ActionType.DELETE_ADMIN,
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
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            const response = await axios.get('/all/users', config);
            dispatch(fetchUsers(response.users))
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "top",
                }
            );
        }

    }
}


export const getAdmins = () => {
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
            const response = await axios.get('/all/admin', config);
            dispatch(fetchAdmin(response.users))
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

export const createAdmin = (payload, saveLoading) => {
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
            const response = await axios.post('/admin/signup', payload, config);
            dispatch(addAdmin(response.admin));
            saveLoading();
            Swal.fire({
                title: "Admin Created",
                text: "New Admin User Created successfully",
                icon: "success"
            });
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            saveLoading();
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


export const revokeAdminAccess = (payload) => {
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
            await axios.post('/admin/revoke-access', payload, config);
            dispatch(removeAdmin(payload))
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


