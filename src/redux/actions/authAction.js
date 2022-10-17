import * as ActionType from '../type';
import axios from 'axios';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

import { setAlert } from './alert';

const BASE_URL = process.env.REACT_APP_URL;
const config = {
    headers: {
        "Content-Type": "application/json",

    }
}

export const registerSuccess = (payload) => {
    return {
        type: ActionType.REGISTER_SUCCESS,
        payload
    }
}

export const setUser = (payload) => {
    return {
        type: ActionType.USER_LOADED,
        payload
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.SET_ERROR,
        payload
    }
}

export const login = (payload) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload
    }
}

export const getMe = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/user/me');
            console.log(response);
            dispatch(setUser(response))
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

export const loginUser = (apiData, navigate) => {
    return async (dispatch) => {
        try {
            const url = `${BASE_URL}/user/login`;
            const response = await axios.post(url, apiData);
            console.log(response);
            dispatch(login(response));
            Swal.fire({
                title: "Success",
                icon: "success",
                text: "Login completed successfully"
            }).then(() => {
                navigate("/dashboard");
            })
        } catch (error) {
            console.log(error.message);
            dispatch(setError(error.message));
            const errors = error.response.data.errors;
            console.log(errors);
            if (errors) {
                errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
            }
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

export const register = (apiData, navigate, stopLoading) => {
    return async (dispatch) => {
        try {
            const url = `${BASE_URL}/user/signup`;
            const response = await axios.post(url, apiData);
            console.log(response);
            dispatch(registerSuccess(response));
            stopLoading();
            Swal.fire({
                title: "Registration Completed Successfully",
                icon: "success",
                text: "Check Your E-mail to complete verification"
            }).then(() => {
                navigate("/login");
            })
        } catch (error) {
            console.log(error.message);
            const errors = error.response.data.message;
            dispatch(setError(errors));
            dispatch(setAlert(errors, "danger"))
            stopLoading();
            console.log(errors);
            
            toaster.notify(
                errors,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
}