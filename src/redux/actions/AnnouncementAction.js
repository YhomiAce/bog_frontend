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
        type: ActionType.ANNOUNCEMENT_ERROR,
        payload
    }
}

export const fetchAnnouncement = (payload) => {
    return {
        type: ActionType.FETCH_ALL_ANNOUNCEMENTS,
        payload
    }
}

export const removeAnnouncement = (payload) => {
    return {
        type: ActionType.DELETE_ANNOUNCEMENT,
        payload
    }
}

export const addAnnouncement = (payload) => {
    return {
        type: ActionType.CREATE_ANNOUNCEMENT,
        payload
    }
}


export const  getAllAnnouncements = () => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.get('/announcements/all', config);
            dispatch(fetchAnnouncement(response.data))
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

export const deleteAnnouncement = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/announcements/delete-message/${id}`
            await axios.delete(url, config);
            dispatch(removeAnnouncement(id));
            Swal.fire({
                title: "Announcement Deleted",
                text: "Announcement deleted successfully",
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

export const createAnnouncement = (payload, saveLoading) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/announcements/new-announcement`
            const response = await axios.post(url, payload, config);
            dispatch(addAnnouncement(response.data));
            saveLoading();
            Swal.fire({
                title: "Announcement Created",
                text: "Announcement Created successfully",
                icon: "success"
            });
        } catch (error) {
            dispatch(setError(error.message));
            if (error.message === 'Request failed with status code 401') {
                window.location.href = '/';
            }
            else {
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
 