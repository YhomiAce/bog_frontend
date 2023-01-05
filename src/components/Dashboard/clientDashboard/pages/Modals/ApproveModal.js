import React, { useState } from 'react';
import { Button } from "@material-tailwind/react";
import { BsExclamationCircleFill } from "react-icons/bs";
import Spinner from '../../../../layouts/Spinner';
import Axios from '../../../../../config/config';

const ApproveModal = ({ CloseDelete, meetingId }) => {
    const [loading, setLoading] = useState(false);

    const approveMeeting = async () => {
        try {
            setLoading(true);
            const url = "/meeting/action";
            const payload = {
                status: 'approved',
                meetingId: meetingId,
            }
            const res = await Axios.post(url, payload);
            const results = res.data;
            console.log(results);
            setLoading(false);
        } catch (error) {
            setLoading(false);
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
                        <p className="fs-700 fw-600 mb-4">Approve Meeting</p>
                        <p>Are you sure you want to approve this meeting? </p>
                    </div>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button color="black" variant="outlined" ripple={true} onClick={CloseDelete}>Cancel</Button>
                    {
                        loading ? <Spinner /> :
                            <Button color="green" onClick={approveMeeting} className="ml-4" ripple={true}>Approve</Button>
                    }

                </div>
            </div>
        </div>
    )
}

export default ApproveModal