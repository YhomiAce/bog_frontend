import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Axios from '../../config/config';


export const loading = () => {
    return {
        type: ActionType.LOADING
    }
}

export const setError = (payload) => {
    return {
        type: ActionType.MEETING_ERROR,
        payload
    }
}

export const fetchAllMeetings = (payload) => {
    return {
        type: ActionType.FETCH_ALL_MEETINGS,
        payload
    }
}

export const cancelMeetingAction = (payload) => {
    return {
        type: ActionType.CANCEL_MEETING,
        payload
    }
}

export const declineMeeting = (payload) => {
    return {
        type: ActionType.DECLINE_MEETING,
        payload
    }
}

export const approveMeeting = (payload) => {
    return {
        type: ActionType.APPROVE_MEETING,
        payload
    }
}

export const createMeeting = (payload) => {
    return {
        type: ActionType.CREATE_MEETING,
        payload
    }
}

export const fetchProjects = async (setprojects, setLoading, config) => {
    try {
        setLoading(true);
        const url = "/projects/all";
        const res = await Axios.get(url, config);
        const results = res.data;
        const data = results.map(result => {
            return {
                projectSlug: result.projectSlug,
            }
        });
        setprojects(data);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}

export const fetchMeetings = async (setLoading, setMeeting, user, isAdmin) => {
    try {
        setLoading(true);
        const authToken = localStorage.getItem("auth_token");
        const config = {
            headers:
            {
                "Content-Type": "application/json",
                'Authorization': authToken
            }
        }
        let url;
        url = "/meeting/my-meeting/" + user.id
        const res = await Axios.get(url, config);
        const results = res.data;
        console.log(results)
        setMeeting(results);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}


export const  meetingAction = (payload, addToMeeting) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const response = await axios.post('/meeting/action', payload, config);
            dispatch(declineMeeting(response.data))
            Swal.fire({
                title: "Post Deleted",
                text: "Post deleted successfully",
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

export const cancelMeeting = (id) => {
    return async (dispatch) => {
        try {
            dispatch(loading());
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'authorization': localStorage.getItem("auth_token")
                },
            }
            const url = `/meeting/delete/${id}`
            const response = await axios.delete(url, config);
            console.log(response);
            dispatch(cancelMeetingAction(id));
            Swal.fire({
                title: "Post Cancelled",
                text: "Post cancelled successfully",
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
