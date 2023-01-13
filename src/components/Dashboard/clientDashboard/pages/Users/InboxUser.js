import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageModal } from "./MessageModal";
// import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import useFetchHook from "../../../../../hooks/useFetchHook";
import Spinner from "../../../../layouts/Spinner";
import { cutText, getUserTypeRevserse } from "../../../../../services/helper";
import dayjs from "dayjs";

export default function UserInbox() {

    const [readMessage, setReadMessage] = useState(false);
    const [message, setMessage] = useState();
    const user = useSelector((state) => state.auth.user);
    const { data: announcements, loading } = useFetchHook(`announcements?userType=${getUserTypeRevserse(user?.userType)}`)

    const openMessage = (val) => {
        setMessage(val);
        setReadMessage(true)
    }
    const closeModal = () => {
        setReadMessage(false)
    }

    if (loading) {
        return (
            <center>
                <Spinner />
            </center>
        )
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Messaging</p>
                        <p className="fs-400 text-gray-600 mt-2">Send messages to all/selected users.</p>
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
                                <span>Inbox</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    <div className="p-6 bg-white rounded-lg">
                       
                        {
                            announcements && announcements.map(item => (
                                <div key={item.id} className="border-b p-2 group relative hover:shadow-md duration-300 cursor-pointer mt-2 border-gray-300 w-full lg:flex items-center" onClick={() => openMessage(item)}>
                                   
                                    <div className="lg:w-3/12">
                                        <p className="fw-500"> {item.title} </p>
                                    </div>
                                    <div className="lg:w-7/12">
                                        <p> { cutText(item.content, 80, "...") } </p>
                                    </div>
                                    <div className="lg:w-1/12">
                                        <p> {dayjs(item.createdAt).format("DD-MMM-YYYY HH:mm")} </p>
                                    </div>
                                    {/* <div className="w-6 h-6 absolute right-3 circle bg-gray-300 grid place-content-center text-red-600 hidden group-hover:grid" onClick={e => e.stopPropagation()}>
                                        <RiDeleteBin5Line />
                                    </div> */}
                                </div>
                            ))
                        }

                        
                    </div>
                </div>
            </div>
            {
                readMessage && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
                        <div className="bg-white lg:w-7/12 rounded-md  overscroll-none  w-11/12 p-8 shadow max-h-70 scale-ani overflow-y-scroll" onClick={e => e.stopPropagation()}>
                            <MessageModal closeModal={closeModal} message={message} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}