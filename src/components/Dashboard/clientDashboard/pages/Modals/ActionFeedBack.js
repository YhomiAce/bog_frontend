import React from 'react';
import { Button } from "@material-tailwind/react";

const ActionFeedBack = ({ closeFeedBack, info, icon, status }) => {
    let color;
    status === 'error' ? color = 'red-400' : color = 'green-500';
    return (
        <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeFeedBack }>
            <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                <div className="flex justify-center items-center mb-6 w-full rounded-full lg:px-6 px-5">
                    <div className={`text-4xl text-${color} w-20 h-20 rounded-full border-2 flex items-center justify-center border-${color}`}>
                        {icon}
                    </div>
                </div>
                <div className="text-center">
                    <p>{info}</p>
                </div>
                <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                    <Button color="black" variant="outlined" ripple={true} onClick={closeFeedBack }>OK</Button>
                </div>
            </div>
        </div>
    )
}

export default ActionFeedBack