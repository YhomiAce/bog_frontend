import Axios from "../config/config";
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
// import { useNavigate } from 'react-router-dom';
import  { Navigate } from 'react-router-dom'

export const Login = () => {
    // console.log("Login")
    // const navigate = useNavigate();
    // navigate("/login")
}

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
export const WarningAlert = (message) => {
     try {
        Swal.fire({
            title: "Warning",
            imageUrl: "https://media.istockphoto.com/id/894875516/vector/exclamation-point-sign-in-red-triangle-vector-icon.jpg?s=612x612&w=0&k=20&c=AYMHwOnNCaWz8j3ubjC24cBrlk_ei_oCB3kS-UwvZtU=",
            imageWidth: "75px",
            text: message,
            buttonsStyling: "false",
            confirmButtonText: "Ok",
            confirmButtonColor: "#3F79AD",
            // allowOutsideClick: true
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                    return <Navigate to='/login' replace={true}  />

                // Login()
                // n("/login");
                // Swal.fire('Saved!', '', 'success')

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        });
    }catch (error) {

    }
  }

export const SuccessAlertWithRedirection = (message, goto) => {
    Swal.fire({
        title: "Success",
        imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
        imageWidth: "75px",
        text: message,
        buttonsStyling: "false",
        confirmButtonText: "Continue",
        confirmButtonColor: "#3F79AD",
    }).then(() =>{
        goto()
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