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
        type: ActionType.SUBSCRIPTION_PLAN_ERROR,
        payload
    }
}

export const fetchAllPlans = (payload) => {
    return {
        type: ActionType.FETCH_SUBSCRIPTION_PLANS,
        payload
    }
}

export const removePlan = (payload) => {
    return {
        type: ActionType.DELETE_SUBSCRIPTION_PLAN,
        payload
    }
}

export const addPlan = (payload) => {
    return {
        type: ActionType.CREATE_SUBSCRIPTION_PLAN,
        payload
    }
}

export const editPlan = (payload) => {
    return {
        type: ActionType.UPDATE_SUBSCRIPTION_PLAN,
        payload
    }
}


export const getAllSubscriptionPlans = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.get('/subscription/plans', config);
            console.log(response);
            dispatch(fetchAllPlans(response.data))
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

export const deleteSubscriptionPlan = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/subscription/delete/${id}`
            const response = await axios.delete(url, config);
            console.log(response);
            dispatch(removePlan(id));
            Swal.fire({
                title: "Plan Deleted",
                text: "Subscription Plan deleted successfully",
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

export const createSubscriptionPlan = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/subscription/create`
            const response = await axios.post(url, payload, config);
            console.log(response);
            dispatch(addPlan(response.data));
            saveLoading();
            Swal.fire({
                title: "Plan Created",
                text: "Subscription Plan Created successfully",
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

export const updateSubscriptionPlan = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/subscription/update`
             await axios.patch(url, payload, config);
            const response = await axios.get(`/subscription/plans/${payload.planId}`)
            dispatch(editPlan(response.data));
            saveLoading();
            Swal.fire({
                title: "Plan updated",
                text: "Subscription Plan updated successfully",
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

 