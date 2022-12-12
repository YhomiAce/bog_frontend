import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import Axios from "../../../../../config/config";
import Spinner from "../../../../layouts/Spinner";
import React, { useState, useEffect } from "react";
import { FormTypes } from "./FormTypes";

export default function ProjectFile() {
    const { search } = useLocation();
    const projectId = new URLSearchParams(search).get("projectId");
    const [project, setProjects] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProjectDetail = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            setLoading(true);
            const url = `/projects/view-project/${projectId}`
            const response = await Axios.get(url, config);
            const { data } = response;
            setProjects(data)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    //  const formatNumber = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }

    useEffect(() => {
        getProjectDetail();
        // eslint-disable-next-line 
    }, [])

    if (loading || !project) {
        return <center>
            <Spinner />
        </center>
    }

    return (
        <div>
        {
            project &&
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600 lg:flex items-center">Project ID: <span className="text-primary px-3">{project?.projectSlug}</span> <span className="text-xs text-blue-500 bg-light px-2">Ongoing</span></p>
                    <p className="fs-400 text-gray-600 mt-2">View project details</p>
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
                        <Link to="" className="opacity-60">
                            <span>project</span>
                        </Link>
                        <Link to="" className="">
                            <span>Project File</span>
                        </Link>
                    </Breadcrumbs>
                </div>
                {/*projet form details */}
                <div className="lg:p-5 px-2 py-4">
                    <FormTypes data={project}/>
                    {/* <div className="lg:grid-83">
                        <div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Project Details</p>
                                </div>
                                <div className="py-6 border-gray-300 border-dashed">
                                    <div className="lg:flex justify-between items-center">
                                        <div className="flex">
                                            <div>
                                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="order" className="w-16 h-16 lg:h-20 lg:w-20 rounded-lg" />
                                            </div>
                                            <div className="grid content-between  pl-4 fw-500">
                                                <p><span className="text-gray-600 fs-400">Project Name:</span> My Land Survey</p>
                                                <p><span className="text-gray-600 fs-400">Service Required:</span> Land Survey</p>
                                                <p><span className="text-gray-600 fs-400">Start Date:</span> 18-11-22</p>
                                            </div>
                                        </div>
                                        <div className="fw-500 mt-2 lg:mt-0 lg:text-end">
                                            <p><span className="text-gray-600 fs-400">Project Cost:</span> NGN 320,000</p>
                                            <p><span className="text-gray-600 fs-400">Due Date:</span> 18-11-23</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Project Description</p>
                                </div>
                                <div className="flex fw-500 justify-between pt-6">
                                    <p>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Cost Summary</p>
                                </div>
                                <div className="flex fw-500 h-56 justify-between pt-6">
                                    
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Transaction</p>
                                </div>
                                <div className="lg:flex fw-500 justify-between pt-6">
                                    <div>
                                        <p>1st Installment Payment</p>
                                        <p className="text-gray-600">Via Paypal</p>
                                    </div>
                                    <div>
                                        <p>20-11-2022</p>
                                    </div>
                                    <div className="mt-2 lg:mt-0">
                                        <p>NGN 1,320, 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between pb-4">
                                    <p className="fw-600">Project Address</p>
                                </div>
                                <div className="fs-400 fw-500 mt-4">
                                    <p>No 3, Close road, Estate name, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Project Activities</p>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order" />
                                    </div>
                                    <div className="grid fs-400 content-between pl-4 fw-500">
                                        <p>BOG Surveyor</p>
                                        <p className="text-gray-600">updated the due date for land survey</p>
                                        <p className="text-gray-500 text-xs"> 6 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order" />
                                    </div>
                                    <div className="grid fs-400 content-between pl-4 fw-500">
                                        <p>BOG Surveyor</p>
                                        <p className="text-gray-600">updated the due date for land survey</p>
                                        <p className="text-gray-500 text-xs"> 9 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between pb-4">
                                    <p className="fw-600">Client Review</p>
                                </div>
                                <div className="fs-400 mt-4">
                                    <form>
                                        <textarea className="w-full px-2 py-2 border h-28 rounded border-gray-400"></textarea>
                                        <div className="text-end">
                                            <button className="btn-primary mt-4">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">My Info</p>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order" />
                                    </div>
                                    <div className="grid fs-400 content-between pl-4 fw-500">
                                        <p>Chukka Uzo</p>
                                        <p className="text-gray-600">Private Client</p>
                                    </div>
                                </div>
                                <div className="fs-400 fw-500 mt-4">
                                    <div className="flex">
                                        <p className="text-gray-600">Phone:</p>
                                        <p className="pl-3">0800 000 0000</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-gray-600">Email:</p>
                                        <p className="pl-3">email@test.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        }
        </div>
        )
}
