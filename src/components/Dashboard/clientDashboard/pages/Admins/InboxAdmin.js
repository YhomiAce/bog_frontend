import { Breadcrumbs } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAnnouncements, deleteAnnouncement } from "../../../../../redux/actions/AnnouncementAction";
import { SendMessage } from "./Modals/SendMessage";
import { cutText, getUserType } from "../../../../../services/helper"
import dayjs from "dayjs";
import { BsEye } from "react-icons/bs";
import Swal from "sweetalert2";
import { BiMessageRoundedDetail, BiTrash } from "react-icons/bi";
import { MessageModal } from "../Users/MessageModal";

export default function AdminInbox() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState(false);
    const [view, setView] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState();
    const announcements = useSelector((state) => state.announcements.announcements);

    const closeModal = () => {
        setMessage(false)
    }
    
    const openViewModal = (val) => {
        setSelectedMessage(val);
        setView(true)
    }

    const closeViewModal = () => {
        setView(false)
    }

    useEffect(() => {
        dispatch(getAllAnnouncements())
    }, [dispatch]);

    const iconStyle = {
        cursor: "pointer",
        marginLeft: "5px"
    }

    const deleteMessage = (id) => {
        Swal.fire({
            title: "Delete Announcement",
            text: 'Do you want to delete this Announcement?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete Announcement',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                
                dispatch(deleteAnnouncement(id))
            }
        });
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
                    <div>
                        <button className="btn bg-secondary text-white fw-600 flex items-center" onClick={() => setMessage(true)}><BiMessageRoundedDetail className="text-xl"/> <span className="pl-1">New Message</span></button>
                    </div>
                </div>
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    <div className="p-6 bg-white rounded-lg">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className="bg-light p-2 rounded-lg text-primary">
                                <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">S/N</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Title</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Content</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Receipients</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Created At</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Expired At</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    announcements.length > 0 ? announcements.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">{index + 1}</td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">{cutText(item.title, 20, "...")}</td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left"> {cutText(item.content, 20, "...")} </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left"> {getUserType(item.user)} </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left"> {dayjs(item.createdAt).format("DD-MMM-YYYY")} </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left"> {dayjs(item.expiredAt).format("DD-MMM-YYYY")} </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <span style={iconStyle}>
                                                        <BsEye onClick={() => openViewModal(item)} />
                                                    </span>
                                                    <span style={iconStyle}>
                                                        <BiTrash onClick={() => deleteMessage(item.id)} />
                                                    </span>


                                                </div>
                                            </td>
                                        </tr>
                                    )) :
                                        <p className="text-center my-10">No content yet</p>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                message && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal}>
                        <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 p-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <SendMessage closeModal={closeModal} />
                        </div>
                    </div>
                )
            }
            {
                view && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal }>
                        <div className="bg-white lg:w-7/12 rounded-md  overscroll-none  w-11/12 p-8 shadow max-h-70 scale-ani overflow-y-scroll" onClick={e => e.stopPropagation()}>
                           <MessageModal closeModal={closeViewModal} message={selectedMessage}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}