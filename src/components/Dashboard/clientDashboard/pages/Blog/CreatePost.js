import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function BlogPost() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Create Post</p>
                        <p className="fs-400 text-gray-600 mt-2">Create and share post with viewers</p>
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
                                <span>Blog</span>
                            </Link>
                            <Link to="" className="">
                                <span>Create Post</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    <div className="lg:grid-83 mb-8">
                        <div>
                            {/* blog post tittle */}
                            <div className="lg:p-6 p-3 pb-4 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg mb-3">Blog Post Title</p>
                                <input type="text" placeholder="Enter the blog tittle" className="w-full px-3 rounded-md py-2 border border-gray-400" />
                            </div>
                            {/* blog post*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md bg-white mt-6">
                                <p className="fw-600 lg:text-lg mb-3">Blog Post</p>
                                <textarea placeholder="Type your post here" className="lg:h-56 h-28 w-full border border-gray-400 rounded-md px-2 py-4"></textarea>
                            </div>
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Photo(s)</p>
                                <div className="lg:flex mt-4">
                                    <div className="w-4/12 lg:w-3/12 border py-8 rounded-lg">
                                        <input type="file" className="w-10/12 ml-2 text-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* blog post category*/}
                            <div className="lg:p-6 p-3 pb-4 mt-6 lg:mt-0 rounded-md bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Add Photo(s)</p>
                                <div className="mt-4">
                                    <div className="flex">
                                        <input type="checkbox" />
                                        <p className="pl-2">Geotechnical Investigation</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="checkbox" />
                                        <p className="pl-2">Construction</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="checkbox" />
                                        <p className="pl-2">Building</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="checkbox" />
                                        <p className="pl-2">Survey</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="checkbox" />
                                        <p className="pl-2">Engineering</p>
                                    </div>
                                </div>
                            </div>
                            {/* blog post category*/}
                            <div className="lg:p-6 p-3 pb-4  rounded-md mt-6 bg-white">
                                <p className="fw-600 lg:text-lg pb-3 border-b border-gray-300">Comments</p>
                                <div className="mt-4">
                                    <div className="flex">
                                        <input type="radio" name="comments"/>
                                        <p className="pl-2">Enable Comments</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input type="radio" name="comments" />
                                        <p className="pl-2">Disable Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className="border-t py-6 border-gray-400 text-end">
                        <button className="lg:px-8 px-4 fw-500 py-2 border-pri text-primary mr-6 rounded-lg">Save To Draft</button>
                        <button className="lg:px-8 px-4 fw-500 py-2 bg-primary text-white rounded-lg">Approve Post</button>
                    </div>                
                </div>
            </div>
        </div>
        )
}