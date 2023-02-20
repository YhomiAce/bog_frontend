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
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}

export const fetchAddresses = async (setLoading, setAddresses, user) => {
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
        let url = '/address/view/all';
        
        const res = await Axios.get(url, config);
        const results = res.data;
        // console.log(results)
        setAddresses(results);
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
