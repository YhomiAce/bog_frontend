import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { BsCheck, BsExclamationCircleFill } from "react-icons/bs";
import Spinner from '../../../../layouts/Spinner';
import Axios from '../../../../../config/config';
import { FaTimes } from 'react-icons/fa';

const DeleteModal = ({ CloseDelete, meetingId, setFeetback }) => {
    const [loading, setLoading] = useState(false);

    const declineMeeting = async () => {
        try {
            setLoading(true);
            const url = "/meeting/action";
            const payload = {
                status: 'declined',
                meetingId: meetingId,
            }
            const authToken = localStorage.getItem("auth_token");
            const config = {
                headers:
                {
                    "Content-Type": "application/json",
                    'Authorization': authToken
                }

            }
            const res = await Axios.post(url, payload, config);
            const results = res.data;
            console.log(results);
            setLoading(false);
            CloseDelete()
            setFeetback({
                info: "Declined Successfully",
                status: "success",
                icon: <BsCheck />
            })
        } catch (error) {
            setLoading(false);
            CloseDelete()
            setFeetback({
                info: "Error Occured",
                status: "error",
                icon: <FaTimes />
            })
        }
    }

    return (
        <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
            <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <div className="flex lg:px-6 px-5">
                    <div className="text-2xl pr-3 text-yellow-600">
                        <BsExclamationCircleFill />
                    </div>
                    <div>
                        <p className="fs-700 fw-600 mb-4">Decline Meeting</p>
                        <p>Are you sure you want to decline this meeting? This action cannot be undo</p>
                    </div>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button color="black" variant="outlined" ripple={true} onClick={CloseDelete}>Cancel</Button>
                    {
                        loading ? <Spinner /> :
                            <Button color="red" onClick={declineMeeting} className="ml-4" ripple={true}>Decline</Button>
                    }

                </div>
            </div>
        </div>
    )
}

export default DeleteModal