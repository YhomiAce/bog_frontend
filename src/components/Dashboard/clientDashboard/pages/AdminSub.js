import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState} from "react";
import { MdPlaylistAddCheck } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SubscriptionTable } from "../../assets/Tables/Subscription";
import { AddSub } from "./Admins/Modals/AddSub";

export default function AdminSub() {
    // const dispatch = useDispatch();
    const [subscription, setSubscription] = useState(false);

    const closeModal = () => {
        setSubscription(false)
    }
    

    // useEffect(() => {
    //     dispatch(getAllAnnouncements())
    // }, [dispatch]);


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Subscription Plans</p>
                        <p className="fs-400 text-gray-600 mt-2">Add, view, and delete subscription plans for service and product partners.</p>
                        <Breadcrumbs className="bg-white pl-0 mt-4">
                            <Link to="/" className="opacity-60">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </Link>
                            <Link to="/dashboard" className="opacity-60">
                                <span>Dashboard</span>
                            </Link>
                            <Link to="" className="">
                                <span>subscription</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div>
                        <button className="btn bg-secondary text-white fw-600 flex items-center" onClick={() => setSubscription(true)}><MdPlaylistAddCheck className="text-2xl"/> <span className="pl-1">Add New Plan</span></button>
                    </div>
                </div>
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    <div className="lg:p-2 bg-white rounded-lg">
                        <SubscriptionTable/>
                    </div>
                </div>
            </div>
            {
                subscription && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
                        <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 p-8 shadow fw-500 scale-ani max-h-70 overflow-scroll" onClick={e => e.stopPropagation()}>
                            <AddSub closeModal={closeModal}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
