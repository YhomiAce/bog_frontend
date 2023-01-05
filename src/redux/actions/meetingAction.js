import * as ActionType from '../type';
import axios from '../../config/config';
import Swal from "sweetalert2";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
// import setAuthToken from '../../config/setAuthHeader';
import { setAlert } from './alert';
import { io } from "socket.io-client";
import { fetchUserNotifications } from './notifications';


export const setMeetingHandler = (apiData, stopLoading) => {
    return async (dispatch) => {
        try {
            const url = `/meeting/create`;
            const response = await axios.post(url, apiData);
            console.log(response);
            const socket = io(`${process.env.REACT_APP_API_URL}`, {
                query: {
                    userId: response.user.id
                }
            });
            socket.on("getUserNotifications", (payload) => {
                console.log(payload);
                dispatch(fetchUserNotifications(payload))
            })
            stopLoading();
            Swal.fire({
                title: "Success",
                imageUrl: "https://t4.ftcdn.net/jpg/05/10/52/31/360_F_510523138_0c1lsboUsa9qvOSxdaOrQIYm2eAhjiGw.jpg",
                imageWidth: "75px",
                text: "Login completed successfully",
                buttonsStyling: "false",
                confirmButtonText: "Continue",
                confirmButtonColor: "#3F79AD",
            }).then(() => {
                
            })
        } catch (error) {
            console.log(error.message);
            const errors = error.response.data.message;
            stopLoading();
            
            dispatch(setAlert(errors, "danger"))
            toaster.notify(
                errors,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }
}
