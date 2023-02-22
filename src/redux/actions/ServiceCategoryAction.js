import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";


export const loading = () => {
    return {
        type: ActionType.LOADING
    }
}
 
export const setError = (payload) => {
    return {
        type: ActionType.SERVICE_CATEGORY_ERROR,
        payload
    }
}

export const fetchCategory = (payload) => {
    return {
        type: ActionType.FETCH_SERVICE_CATEGORY,
        payload
    }
}

export const fetchServiceForm = (payload) => {
    return {
        type: ActionType.FETCH_SERVICE_FORMS,
        payload
    }
}

export const removeCategory = (payload) => {
    return {
        type: ActionType.DELETE_SERVICE_CATEGORY,
        payload
    }
}

export const addCategory = (payload) => {
    return {
        type: ActionType.CREATE_SERVICE_CATEGORY,
        payload
    }
}

export const editCategory = (payload) => {
    return {
        type: ActionType.UPDATE_SERVICE_CATEGORY,
        payload
    }
}


export const getAllServiceCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.get('/services/all', config);
            dispatch(fetchCategory(response.data))
        } catch (error) {
            console.log(error.message);
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

export const deleteServiceCategories = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/services/delete/${id}`
            const response = await axios.delete(url, config);
            console.log(response);
            dispatch(removeCategory(id));
            Swal.fire({
                title: "Service Deleted",
                text: "Service Category deleted successfully",
                icon: "success"
            })
        } catch (error) {
            console.log(error.message);
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

export const createServiceCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/services/create`
            const response = await axios.post(url, payload, config);
            console.log(response);
            dispatch(addCategory(response.data));
            saveLoading();
            Swal.fire({
                title: "Service Category Created",
                text: "Service Category Created successfully",
                icon: "success"
            })
        } catch (error) {
            console.log(error.message);
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}

export const updateServiceCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/services/update/${payload.id}`
            const response = await axios.patch(url, payload, config);
            console.log(response);
            dispatch(editCategory(payload));
            saveLoading();
            Swal.fire({
                title: "Service Category updated",
                text: "Service Category updated successfully",
                icon: "success"
            })
        } catch (error) {
            console.log(error.message);
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}


export const createServiceForm = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/service/form-builder/create`
            const response = await axios.post(url, payload, config);
            console.log(response);
            dispatch(addCategory(response.data));
            saveLoading();
            Swal.fire({
                title: "Service Form Created",
                text: "Service Form Built successfully",
                icon: "success"
            })
        } catch (error) {
            console.log(error.message);
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
}

 
export const getServiceFormBuilder = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.get(`/service/form-builder/${id}`, config);
            dispatch(fetchServiceForm(response.data))
        } catch (error) {
            console.log(error.message);
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
