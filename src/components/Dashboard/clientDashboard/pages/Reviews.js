import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { Reviews } from "../../../pages/home-comp/AboutSlides";
import ReactStars from "react-rating-stars-component";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Review() {

    const [reviews, setReviews] = useState(false)
    
    function CloseDelete() {
        setReviews(false)
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex items-center justify-between">
                    <div className="">
                        <p className="text-2xl fw-600">Testimonials</p>
                        <p className="fs-400 text-gray-600 mt-2">Manage testimonials and reviews shown on the homepage.</p>
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
                                <span>Testimonials</span>
                            </Link>
                        </Breadcrumbs>
                    </div> 
                    <div className="mt-4 text-end">
                        <button className="border-pri text-primary fw-500 btn" onClick={() => setReviews(true)}>Add New Review</button>
                    </div>
                </div>
                {/* Reviews */}
                <div className="lg:p-5 px-2 py-4">
                    {Reviews.map( item => {
                        return (
                            <div className="lg:flex lg:w-11/12 mx-auto py-6 px-4 bg-white shadow rounded-lg mt-6 items-center justify-between">
                                <div className="flex items-center">
                                    <div>
                                        <Avatar variant="circular" src={item.img} alt="review" className="w-24 h-24" />
                                    </div>
                                    <div className="pl-4">
                                        <p className="fw-500">{item.name}</p>
                                        <p>{item.job}</p>
                                    </div>
                                </div>
                                <div className="lg:w-9/12">
                                    <div className="flex items-center justify-between">
                                        <ReactStars 
                                            edit={false}
                                            value={4}
                                            size={20}
                                        />
                                        <p className="lg:text-xl text-red-500"><MdDeleteOutline/></p>
                                    </div>
                                    <div className="pt-2 pb-4"><p>{item.review}</p></div>
                                    <div className="lg:flex justify-evenly">
                                        <button className="btn py-2 bg-light text-primary fw-600 ">Add to Homepage</button>
                                        <button className="btn py-2 bg-orange-100 text-secondary fw-600 block my-4 lg:my-0">Add to Homepage</button>
                                        <button className="btn py-2 bg-green-100 text-green-600 fw-600">Reply</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {reviews && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <form>
                                <div className="flex justify-between">
                                    <p className="lg:text-lg fw-600">Add Review</p>
                                    <FaTimes onClick={CloseDelete}/>
                                </div>
                                <div className="mt-5 lg:mt-8">
                                    <label className="block">Name</label>
                                    <input type="text" className="w-full lg:w-11/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5 lg:mt-8">
                                    <label className="block">Job Description</label>
                                    <input type="text" className="w-full lg:w-11/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5 lg:mt-8">
                                    <label className="block">Photo</label>
                                    <input type="file" className="w-full lg:w-11/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Review</label>
                                    <textarea className="w-full lg:w-11/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                </div>
                                <div className="mt-8 flex lg:w-11/12 justify-between">
                                    <button className="btn bg-red-500 lg:px-7 text-white" onClick={CloseDelete}>
                                        Cancel
                                    </button>
                                    <button className="btn-primary lg:px-7">
                                        Add Review
                                    </button>
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
        </div>
        )
}