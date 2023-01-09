import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Axios from '../../config/config';


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
        isAdmin ? url = "/meeting/all" : url = "/meeting/my-meeting/" + user.id
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