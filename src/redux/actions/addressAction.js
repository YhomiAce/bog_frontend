import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Axios from '../../config/config';

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
        let url = `/address/view/all`;
        
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

export const fetchStateAddresses = async (setAddresses, user, state) => {
    try {
        const authToken = localStorage.getItem("auth_token");
        const config = {
            headers:
            {
                "Content-Type": "application/json",
                'Authorization': authToken
            }
        }

        let _state = state === undefined ? '' : `?q=${state}`;
        let url = `/address/view/all${_state}`;
        
        const res = await Axios.get(url, config);
        const results = res.data;
        // console.log(results)
        setAddresses(results);
    } catch (error) {
       
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}
