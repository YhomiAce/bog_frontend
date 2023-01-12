import { Breadcrumbs } from "@material-tailwind/react";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { SendMessage } from "./Modals/SendMessage";

export default function AdminInbox() {
    
    const [message, setMessage] = useState(false)

    const closeModal = () => {
        setMessage(false)
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
                        <button className="btn bg-secondary text-white fw-600" onClick={() => setMessage(true)}>New Message</button>
                    </div>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    <div className="p-6 bg-white rounded-lg">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead className="bg-light p-2 rounded-lg text-primary">
                                <tr>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">S/N</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Message Name</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Message Body</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Receipients</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Time Sent</th>
                                    <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 whitespace-nowrap text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <p className="text-center my-10">No content yet</p>
                            </tbody>
                        </table>
                    </div>                
                </div>
            </div>
            {
                message && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={closeModal }>
                        <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 p-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <SendMessage/>
                        </div>
                    </div>
                )
            }
        </div>
        )
}