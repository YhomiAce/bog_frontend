import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
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
        type: ActionType.PROJECT_ERROR,
        payload
    }
}

export const  fetchProjects = (payload) => {
    return {
        type: ActionType.FETCH_ALL_PROJECTS,
        payload
    }
}

export const fetchMyProject = (payload) => {
    return {
        type: ActionType.FETCH_MY_PROJECTS,
        payload
    }
}

export const fetchServices = (payload) => {
    return {
        type: ActionType.FETCH_ALL_SERVICES,
        payload
    }
}

export const removeService = (payload) => {
    return {
        type: ActionType.DELETE_SERVICE,
        payload
    }
}

export const addService = (payload) => {
    return {
        type: ActionType.CREATE_SERVICE,
        payload
    }
}

export const editService = (payload) => {
    return {
        type: ActionType.UPDATE_SERVICE,
        payload
    }
}


export const  getMyProject = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const response = await axios.get('/projects/my-request', config);
            console.log(response);
            dispatch( fetchMyProject(response.data))
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
 
export const  fetchServiceCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const response = await axios.get('/service/type', config);
            console.log(response);
            dispatch( fetchServices(response.data))
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

export const  deleteServiceCategory = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/service/type/delete/${id}`
            const response = await axios.delete(url, config);
            console.log(response);
            dispatch(removeService(id));
            Swal.fire({
                title: "Service Deleted",
                text: "Service Type deleted successfully",
                icon: "success"
            })
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

export const  createServiceCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/service/type/create`
            const response = await axios.post(url, payload, config);
            console.log(response);
            dispatch(addService(response.data));
            saveLoading();
            Swal.fire({
                title: "Service Created",
                text: "Service Type Created successfully",
                icon: "success"
            })
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

export const  updateServiceCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/service/type/update`
            const response = await axios.patch(url, payload, config);
            console.log(response);
            dispatch(editService(payload));
            saveLoading();
            Swal.fire({
                title: "Service updated",
                text: "Service Type updated successfully",
                icon: "success"
            })
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

export const getProjects = () => {
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
            const response = await axios.get('/projects/all', config);

            console.log(`====BY === OLAS==`);
            console.log(response);
            dispatch( fetchProjects(response.data))
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
 
 