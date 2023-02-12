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
        type: ActionType.PROJECT_ERROR,
        payload
    }
}

export const fetchProjects = (payload) => {
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

export const editProject = (payload) => {
    return {
        type: ActionType.UPDATE_PROJECT,
        payload
    }
}

export const approveProject = (payload) => {
    return {
        type: ActionType.APPROVE_PROJECT,
        payload
    }
}

export const fetchDispatchedProjects = (payload) => {
    return {
        type: ActionType.FETCH_DISPATCHED_PROJECTS,
        payload
    }
}

export const fetchAssignedProjects = (payload) => {
    return {
        type: ActionType.FETCH_ASSIGNED_PROJECTS,
        payload
    }
}

export const assignProject = (payload) => {
    return {
        type: ActionType.ASSIGN_PROJECT,
        payload
    }
}

export const getMyProject = (userType) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            const response = await axios.get('/projects/my-request?userType=' + userType, config);
            console.log(response);
            dispatch(fetchMyProject(response.data))
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

export const fetchServiceCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            const response = await axios.get('/service/type', config);
            dispatch(fetchServices(response.data))
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

export const deleteServiceCategory = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
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

export const createServiceCategory = (payload, saveLoading) => {
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

export const updateServiceCategory = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
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
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            dispatch(loading());
            const response = await axios.get('/projects/all', config);
            console.log(response);
            dispatch(fetchProjects(response.data))
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

export const commenceProject = (projectId) => {
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
            const body = {
                approvalStatus: 'in_review'
            }
            dispatch(loading());
            const response = await axios.patch('/projects/request-for-approval/'+projectId, body, config);
            console.log(response);
            const payload = {
                projectId
            }
            dispatch(editProject(payload));
            Swal.fire({
                title: "Review Sent",
                text: "Project sent for review",
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

export const approveProjectToStart = (payload) => {
    return async (dispatch) => {
        try {
            const { projectId, isApproved } = payload;
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            dispatch(loading());
            const body = {
                approvalStatus: 'approved',
                status: "approved",
                isApproved
            }
            const response = await axios.patch('/projects/approve-project/'+projectId, body, config);
            console.log(response);
            dispatch(approveProject(payload));
            Swal.fire({
                title: "Approved",
                text: `Project ${isApproved ? 'Approved' : 'Disapproved'} Successfully`,
                icon: "success"
            })
        } catch (error) {
            console.log(error);
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

export const getDispatchedProjects = (userId) => {
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
            const response = await axios.get(`/projects/dispatched-projects/${userId}`, config);
            console.log(response);
            dispatch(fetchDispatchedProjects(response.data))
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

export const getServicePartnerProjects = (userId) => {
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
            const response = await axios.get(`/projects/assigned-projects/${userId}`, config);
            console.log(response);
            dispatch(fetchAssignedProjects(response.data))
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

export const DispatchProject = (projectId) => {
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
            // dispatch(loading());
            const body = {
                projectId,
                status: "dispatched"
            }
            const response = await axios.patch('/projects/dispatch-project/'+projectId, body, config);
            console.log(response);
            Swal.fire({
                title: "Project Dispatched",
                text: `Project has been dispatched Successfully`,
                icon: "success"
            })
        } catch (error) {
            console.log(error);
            let errorMsg = error?.response?.data?.message || error.message
            dispatch(setError(errorMsg));
            toaster.notify(
                errorMsg,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}

export const bidForProject = (payload, saveLoading) => {
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
            // dispatch(loading());
            const response = await axios.post('projects/bid-project', payload, config);
            console.log(response);
            saveLoading()
            Swal.fire({
                title: "Done",
                text: `Admin will get back you`,
                icon: "success"
            })
        } catch (error) {
            console.log(error);
            let errorMsg = error?.response?.data?.message || error.message
            dispatch(setError(errorMsg));
            saveLoading()
            toaster.notify(
                errorMsg,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}

export const assignProjectToPartner = (payload, saveLoading) => {
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
            // dispatch(loading());
            const response = await axios.post('/projects/assign-project', payload, config);
            console.log(response);
            dispatch(assignProject(payload.projectId))
            saveLoading()
            Swal.fire({
                title: "Done",
                text: `Project assigned to partner`,
                icon: "success"
            })
        } catch (error) {
            console.log(error);
            let errorMsg = error?.response?.data?.message || error.message
            dispatch(setError(errorMsg));
            saveLoading()
            toaster.notify(
                errorMsg,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }

    }
}
