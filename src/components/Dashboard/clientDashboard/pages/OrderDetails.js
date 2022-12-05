import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";


export default function OrderDetails() {
        const { search } = useLocation();
     const productId = new URLSearchParams(search).get("productId");

    
    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600 lg:flex items-center">Order ID: <span className="text-primary px-3">{productId}</span> <span className="text-xs text-blue-500 bg-light px-2">Ongoing</span></p>
                    <p className="fs-400 text-gray-600 mt-2">View order details</p>
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
                            <span>Orders</span>
                        </Link>
                        <Link to="" className="">
                            <span>Order Details</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* order details */}
                <div className="lg:p-5 px-2 py-4">
                    <div>
                        <p className="fw-600 underline">Order Progress</p>
                        <div></div>
                    </div>
                    <div className="lg:grid-83">
                        <div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Items (3)</p>
                                    <p className="text-primary"><BiEdit/></p>
                                </div>
                                <div className="py-6 border-b border-gray-300 border-dashed">
                                    <div className="flex justify-between items-center">
                                        <div className="flex">
                                            <div>
                                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="order" className="w-16 h-16 lg:h-20 lg:w-20 rounded-lg" />
                                            </div>
                                            <div className="grid content-between py-3 pl-4 fw-500">
                                                <p><span className="text-gray-600">Name:</span> 30 Tons of Sharp Sand</p>
                                                <p><span className="text-gray-600">QTY:</span> 1</p>
                                            </div>
                                        </div>
                                        <div className="fw-500 text-end">
                                            <p><span className="text-gray-600">PRICE:</span> NGN 320,000</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <div className="flex">
                                            <div>
                                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899753/BOG/sands_cy9q3x.png" alt="order" className="w-16 h-16 lg:h-20 lg:w-20 rounded-lg" />
                                            </div>
                                            <div className="grid content-between py-3 pl-4 fw-500">
                                                <p><span className="text-gray-600">Name:</span> 10 Tons of Sharp Sand</p>
                                                <p><span className="text-gray-600">QTY:</span> 1</p>
                                            </div>
                                        </div>
                                        <div className="fw-500 text-end">
                                            <p><span className="text-gray-600">PRICE:</span> NGN 104,000</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <div className="flex">
                                            <div>
                                                <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667899776/BOG/cements_delkfx.png" alt="order" className="w-16 h-16 lg:h-20 lg:w-20 rounded-lg" />
                                            </div>
                                            <div className="grid content-between py-3 pl-4 fw-500">
                                                <p><span className="text-gray-600">Name:</span> 30 Trucks of Cement</p>
                                                <p><span className="text-gray-600">QTY:</span> 1</p>
                                            </div>
                                        </div>
                                        <div className="fw-500 text-end">
                                            <p><span className="text-gray-600">PRICE:</span> NGN 320,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-6 fw-500 border-b border-gray-300 border-dashed">
                                    <div className="text-gray-600 flex justify-between">
                                        <p>Subtotal</p>
                                        <p className="text-black">NGN 1,240,000</p>
                                    </div>     
                                    <div className="text-gray-600 mt-4 flex justify-between">
                                        <p>Delivery Fee</p>
                                        <p className="text-black">NGN 240,000</p>
                                    </div>   
                                    <div className="text-gray-600 mt-4 flex justify-between">
                                        <p>Discount</p>
                                        <p className="text-black">NGN 0</p>
                                    </div>  
                                </div>
                                <div className="py-6 fw-500">
                                    <div className="text-gray-600 mt-4 flex justify-between">
                                        <p>Order Total</p>
                                        <p className="text-black">NGN 1,589, 000</p>
                                    </div>  
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Transaction</p>
                                </div>
                                <div className="lg:flex grid-2 fw-500 justify-between pt-6">
                                    <div>
                                        <p>Payment</p>
                                        <p className="text-gray-600">Via Paypal</p>
                                    </div>
                                    <div>
                                        <p>20-11-2022</p>
                                    </div>
                                    <div className="mt-2 lg:mt-0">
                                        <p>NGN 320, 000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Client Info</p>
                                    <p className="text-primary"><BiEdit/></p>
                                </div>
                                <div className="flex mt-6">
                                            <div>
                                                <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order"  />
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
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between pb-4">
                                    <p className="fw-600">Shipping Address</p>
                                    <p className="text-primary"><BiEdit/></p>
                                </div>
                                <div className="fs-400 fw-500 mt-4">
                                    <p>No 3, Close road, Estate name, Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between pb-4">
                                    <p className="fw-600">Client Review</p>
                                    <p className="text-primary"><BiEdit/></p>
                                </div>
                                <div className="fs-400 mt-4">
                                    <p>Proident esse ipsum culpa anim adipisicing quis ea. Quis dolore aliquip eiusmod do nulla ex adipisicing ea pariatur. Labore voluptate anim fugiat aute adipisicing Lorem reprehenderit laborum laborum magna amet non ullamco adipisicing.</p>
                                </div>
                            </div>
                            <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                <div className="flex justify-between border-b border-gray-300 pb-4">
                                    <p className="fw-600">Product Partner Info</p>
                                    <p className="text-primary"><BiEdit/></p>
                                </div>
                                <div className="flex mt-6">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order"  />
                                    </div>
                                    <div className="grid fs-400 content-between pl-4 fw-500">
                                        <p>Frank Diamond</p>
                                        <p className="text-gray-600">Product Partner</p>
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
                    </div>
                </div>
            </div>
        </div>
        )
}