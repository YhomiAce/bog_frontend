import Axios from "../config/config";
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";

export const updateAccount = async (payload, headers) => {
    try {
        const url = "/user/update-account";
        const res = await Axios.patch(url, payload, headers);
        return res;
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

export const updatePassword = async (payload) => {
    try {
        const url = "/user/change-password";
        const res = await Axios.patch(url, payload);
        return res;
    } catch (error) {
        const errors = error.response.data.message;
        toaster.notify(
            errors,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}

export const SuccessAlert = (message) => {
    Swal.fire({
        title: "Success",
        imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
        imageWidth: "75px",
        text: message,
        buttonsStyling: "false",
        confirmButtonText: "Continue",
        confirmButtonColor: "#3F79AD",
    })
}

export const getBanks = async () => {
    try {
        const url = "/bank/allbanks";
        const res = await Axios.get(url);
        return res;
    } catch (error) {
        const errors = error.response.data.message;
        toaster.notify(
            errors,
            {
                duration: "4000",
                position: "bottom",
            }
        );
    }
}