import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CreateEmail() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Send Email</p>
                        <p className="fs-400 text-gray-600 mt-2">Create and send emails to users</p>
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
                            <Link to="/dashboard/email" className="opacity-60">
                                <span>Email</span>
                            </Link>
                            <Link to="" className="">
                                <span>Send Email</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 lg:mt-8 py-5">
                    <div className="mb-8 pb-6 rounded-md lg:w-11/12 mx-auto bg-white">
                        <div>
                            {/* email post tittle */}
                            <div className="lg:p-6 p-3 pb-4 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg mb-3">Email Title</p>
                                <input type="text" placeholder="Enter the tittle of your email" className="w-full px-3 rounded-md py-2 border border-gray-400" />
                            </div>
                            {/* email post*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white">
                                <p className="fw-600 lg:text-lg mb-3">Email Body</p>
                                <textarea placeholder="Type the body of your email" className="lg:h-56 h-36 w-full border border-gray-400 rounded-md px-2 py-4"></textarea>
                            </div>
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Photo(s)</p>
                                <div className="lg:flex mt-4">
                                    <div className="w-4/12 lg:w-3/12 border py-8 rounded-lg">
                                        <input type="file" className="w-10/12 ml-2 text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white">
                                <p className="fw-600 lg:text-lg mb-3">Reciepient(s)</p>
                                <select className="w-full px-3 rounded-md py-2 border border-gray-400" >
                                    <option>All Users</option>
                                    <option>All Clients</option>
                                    <option>All Product Partners</option>
                                    <option>All Services Partners</option>
                                    <option>All Land Surveyours</option>
                                    <option>All Building Contractors</option>
                                </select>
                            </div>
                        </div>
                    </div>  
                    <div className="border-t py-6 border-gray-400 text-end">
                        <button className="lg:px-8 px-4 fw-500 py-2 border-pri text-primary mr-6 rounded-lg">Save To Draft</button>
                        <button className="lg:px-8 px-4 fw-500 py-2 bg-primary text-white rounded-lg">Send Email</button>
                    </div>                
                </div>
            </div>
        </div>
        )
}