import React from 'react';
import { Button } from "@material-tailwind/react";
import { BsExclamationCircleFill } from "react-icons/bs";
import Spinner from '../../../../layouts/Spinner';

const ConfirmationModal = ({ closeModal, info, action, loading}) => {

    return (
        <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
            <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <div className="flex lg:px-6 px-5">
                    <div className="text-2xl pr-3 text-yellow-600">
                        <BsExclamationCircleFill />
                    </div>
                    <div>
                        <p className="fs-700 fw-600 mb-4">Are You sure?</p>
                        <p>{info} </p>
                    </div>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button color="black" variant="outlined" ripple={true} onClick={closeModal}>Cancel</Button>
                    {
                        loading ? <Spinner /> :
                            <Button color="green" onClick={action} className="ml-4" ripple={true}>Yes</Button>
                    }

                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal