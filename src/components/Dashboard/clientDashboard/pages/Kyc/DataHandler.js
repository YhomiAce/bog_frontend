import { BsCheck } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import toaster from "toasted-notes";
import Axios from "../../../../../config/config";

export const saveData = async ({url, setLoading, formData, user, setFormData, setFeetback, setData, hasFile}) => {
    const authToken = localStorage.getItem("auth_token");
    const config = {
        headers:
        {
            'Content-Type': hasFile ? 'multipart/form-data' : 'application/json',
            'Authorization': authToken
        }
    }
    try {
        const streamUrl = url.split('/')[1]
        setLoading(true);
        if(hasFile) {
            await Axios.post(url, formData, config);
            await fetcherForFiles({url: streamUrl, user, setData: setFormData})
        }else{
            const payload = {
                ...formData,
                userType: user.userType
            }
            const newInfo = await Axios.post(url, payload, config);
            setFormData({
                ...formData,
                ...newInfo.data,
            });
        }
        setLoading(false);
        setFeetback({
            info: "Saved",
            status: "success",
            icon: <BsCheck />
        })
    } catch (error) {
        setLoading(false);
        setFeetback({
            info: "Error Occured",
            status: "error",
            icon: <FaTimes />
        })
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}

export const hasFileDelete = async ({url, id, user, setLoading, setData, setFeetback}) => {
    const authToken = localStorage.getItem("auth_token");
    const config = {
        headers:
        {
            'Content-Type' : 'application/json',
            'Authorization': authToken
        }
    }
    try {
        setLoading(true);
        const myUrl = `/${url}/delete/${id}`
        await Axios.delete(myUrl, config);
        await fetcherForFiles({url, user, setData})
        setLoading(false);
        setFeetback({
            info: "Deleted",
            status: "success",
            icon: <BsCheck />
        })
    } catch (error) {
        setLoading(false);
        setFeetback({
            info: "Error Occured",
            status: "error",
            icon: <FaTimes />
        })
        toaster.notify(
            error.message,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}


export const loadData = async (url, formData, setFormData) => {
    const authToken = localStorage.getItem("auth_token");
    const config = {
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    }
    console.log(url, formData, setFormData)
    const newInfo = await Axios.get(url, config);
    setFormData({
        ...formData,
        ...newInfo.data,
    });
}

export const fetcherForFiles = async({url, user, setData}) => {
    const authToken = localStorage.getItem("auth_token");
    const config = {
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    }
    const fullUrl = `/${url}/fetch/${user.userType}`;
    const newInfo = await Axios.get(fullUrl, config);
    setData(newInfo.data);
}