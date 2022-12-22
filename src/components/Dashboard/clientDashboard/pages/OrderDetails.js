/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Breadcrumbs, Progress } from "@material-tailwind/react";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
// import { BiEdit } from "react-icons/bi";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import Axios from "../../../../config/config";
import Spinner from "../../../layouts/Spinner";
import ItemList from "./Order/ItemList";
import { IoMdCheckmarkCircle } from "react-icons/io";


export default function OrderDetails() {
    const { search } = useLocation();
    const productId = new URLSearchParams(search).get("productId");
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);

    const getOrderDetail = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            setLoading(true);
            const url = `/orders/order-detail/${productId}`
            const response = await Axios.get(url, config);
            const { data } = response;
            setOrder(data)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        getOrderDetail();
    }, [])

    if (loading || !order) {
        return <center>
            <Spinner />
        </center>
    }

    const getSubTotal = (items) => {
        const total = items.reduce((sum, data) => {
            return sum + data.amount;
        }, 0);
        return total;
    }



    return (
        <div>
            {
                order &&
                <div className="min-h-screen fs-500 relative">
                    <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600 lg:flex items-center">Order ID: <span className="text-primary px-3">{order?.orderSlug}</span> <span className="text-xs text-blue-500 bg-light px-2">{order?.status}</span></p>
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
                            <Link to="/dashboard/ordersadmin" className="opacity-60">
                                <span>Orders</span>
                            </Link>
                            <Link  className="">
                                <span>Order Details</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    {/* order details */}
                    <div className="lg:p-5 px-2 py-4">
                        <div>
                            <div>
                                <p className="fw-600 underline">Order Progress</p>
                                <div className="my-6 mb-24 lg:my-10 relative w-11/12">
                                    <div className="">
                                        <Progress value={50} color="amber" />
                                    </div>
                                    <div className="absolute -top-2 o-process">
                                        <IoMdCheckmarkCircle className="text-2xl circle bg-white text-secondary"/>
                                        <p className="fw-500 w-8 lg:w-auto fs-400 text-gray-500">Order Sent</p>
                                    </div>
                                    <div className="absolute -top-2 p-process">
                                        <IoMdCheckmarkCircle className="text-2xl circle bg-white text-secondary"/>
                                        <p className="fw-500 fs-400 w-8 lg:w-auto  text-gray-500 relative -left-6">Processing Order</p>
                                    </div>
                                    <div className="absolute -top-2 s-process">
                                        <IoMdCheckmarkCircle className="text-2xl circle bg-white text-gray-400"/>
                                        <p className="fw-500 fs-400 w-8 lg:w-auto  text-gray-500 relative -left-6">Shipping Order</p>
                                    </div>
                                    <div className="absolute -top-2 d-process">
                                        <IoMdCheckmarkCircle className="text-2xl circle bg-white text-gray-400"/>
                                        <p className="fw-500 fs-400 text-gray-500 relative -left-6">Delivered</p>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className="lg:grid-83">
                            <div>
                                <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                    <div className="flex justify-between border-b border-gray-300 pb-4">
                                        <p className="fw-600">Items ({order.order_items.length})</p>
                                        {/* <p className="text-primary"><BiEdit /></p> */}
                                    </div>
                                    <div className="py-6 border-b border-gray-300 border-dashed">
                                        {
                                            order.order_items.map(item => (
                                                <ItemList key={item.id} item={item} />
                                            ))
                                        }
                                    </div>
                                    <div className="py-6 fw-500 border-b border-gray-300 border-dashed">
                                        <div className="text-gray-600 flex justify-between">
                                            <p>Subtotal</p>
                                            <p className="text-black">&#8358;{formatNumber(getSubTotal(order.order_items))}</p>
                                        </div>
                                        <div className="text-gray-600 mt-4 flex justify-between">
                                            <p>Delivery Fee</p>
                                            <p className="text-black">&#8358;{formatNumber(order.deliveryFee)}</p>
                                        </div>
                                        <div className="text-gray-600 mt-4 flex justify-between">
                                            <p>Discount</p>
                                            <p className="text-black">{order.discount} &#37;</p>
                                        </div>
                                    </div>
                                    <div className="py-6 fw-500">
                                        <div className="text-gray-600 mt-4 flex justify-between">
                                            <p>Order Total</p>
                                            <p className="text-black">&#8358;{formatNumber(getSubTotal(order.order_items) + order.deliveryFee)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                    <div className="flex justify-between border-b border-gray-300 pb-4">
                                        <p className="fw-600">Transaction</p>
                                    </div>
                                    <div className="lg:flex grid-2 fw-500 justify-between pt-6">
                                    <div>
                                            <p>Payment Ref: {order.order_items[0].paymentInfo.reference}</p>
                                            {/* <p className="text-gray-600">{order.order_items[0].paymentInfo.reference}</p> */}
                                        </div>
                                        <div>
                                            <p>{dayjs(order.createdAt).format("DD-MM-YYYY")}</p>
                                        </div>
                                        <div className="mt-2 lg:mt-0">
                                        <p className="text-black">&#8358;{formatNumber(getSubTotal(order.order_items) + order.deliveryFee)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                    <div className="flex justify-between border-b border-gray-300 pb-4">
                                        <p className="fw-600">Client Info</p>
                                        {/* <p className="text-primary"><BiEdit /></p> */}
                                    </div>
                                    <div className="flex mt-6">
                                        <div>
                                            
                                            <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order" />
                                        </div>
                                        <div className="grid fs-400 content-between pl-4 fw-500">
                                            <p>{order.client.name}</p>
                                            {/* <p className="text-gray-600">Private Client</p> */}
                                        </div>
                                    </div>
                                    <div className="fs-400 fw-500 mt-4">
                                        <div className="flex">
                                            <p className="text-gray-600">Phone:</p>
                                            <p className="pl-3">{order.client.phone ? order.client.phone : "No Phone number"}</p>
                                        </div>
                                        <div className="flex">
                                            <p className="text-gray-600">Email:</p>
                                            <p className="pl-3">{order.client.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                    <div className="flex justify-between pb-4">
                                        <p className="fw-600">Shipping Address</p>
                                        {/* <p className="text-primary"><BiEdit /></p> */}
                                    </div>
                                    <div className="fs-400 fw-500 mt-4">
                                        <p>{`${order.order_items[0].shippingAddress.city}, ${order.order_items[0].shippingAddress.state}`}</p>
                                    </div>
                                </div>
                                <div className="bg-white lg:p-6 p-3 mt-8 rounded-md">
                                    <div className="flex justify-between pb-4">
                                        <p className="fw-600">Client Review</p>
                                        {/* <p className="text-primary"><BiEdit /></p> */}
                                    </div>
                                    <div className="fs-400 mt-4">
                                        
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}