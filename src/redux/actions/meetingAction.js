import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Axios from '../../config/config';


export const fetchProjects = async (setprojects, setLoading) => {
    try {
        setLoading(true);
        const url = "/projects/all";
        const authToken = localStorage.getItem("auth_token");
        const config = {
            headers:
            {
                "Content-Type": "application/json",
                'Authorization': authToken
            }
        }
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
        if (error.message === 'Request failed with status code 401') {
            window.location.href = '/';
        }
        else {
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
        if(isAdmin){
            url = "/meeting/all"
        }else if(user.userType === "professional"){
            url = `/meeting/service-meeting?userType=${user.userType}`
        }else {
            url = `/meeting/my-meeting?userType=${user.userType}`
        }
        
        const res = await Axios.get(url, config);
        const results = res.data;
        console.log(results)
        setMeeting(results);
        setLoading(false);
    } catch (error) {
        setLoading(false);
        if (error.message === 'Request failed with status code 401') {
            window.location.href = '/';
        }
        else {
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