import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetailsAdmin() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Product Details</p>
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
                            <span>Product Details</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* notifications */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="lg:grid-83">
                        <div className="bg-white lg:px-6 lg:py-6 py-4 px-3 rounded-md">
                            <form>
                                <div className="mt-5">
                                    <label className="block fw-500">Product Partner Name</label>
                                    <input type="text" value="Chukka Uzo" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block fw-500">Product Name</label>
                                    <input type="text" value="30 Tons of Sharp Sand" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block fw-500">Product Description</label>
                                    <textarea value="Brand Generic Color yellow Packaging Type Lorry Usage/Application Industrial Order River Sand(Non-Refined) at Lowest Price from Trusted Sand" className="w-full  h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="bg-white lg:px-6 lg:py-6 px-3 py-4 mt-4 lg:mt-0 rounded-md">
                            <form>
                                <div className="mt-5">
                                    <label className="block fw-500">Product Price</label>
                                    <input type="text" value="NGN 650,000" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block fw-500">Product Category</label>
                                    <input type="text" value="Sand" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block fw-500">Date Posted</label>
                                    <input type="text" value="10-11-22" className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-6 px-6 py-5 bg-white rounded-md lg:w-9/12">
                        <p className="text-xl fw-600">Uploaded Photos</p>
                        <div className="mt-6 pb-4 flex justify-between overflow-x-auto">
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="product" className="lg:w-36 rounded-lg"/>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="product" className="lg:w-36 mx-4 lg:mx-0 rounded-lg"/>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="product" className="lg:w-36 rounded-lg"/>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="product" className="lg:w-36 mx-4 lg:mx-0 rounded-lg"/>
                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="product" className="lg:w-36 rounded-lg"/>
                        </div>
                    </div>
                    <div className="border-t border-gray-400 mt-6 lg:mt-8">
                        <div className="flex justify-between my-6">
                            <button className="w-5/12 py-2 border border-red-500 text-red-500 bg-white rounded-lg">Disapprove</button>
                            <button className="w-5/12 py-2 text-white bg-primary rounded-lg">Approve Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}