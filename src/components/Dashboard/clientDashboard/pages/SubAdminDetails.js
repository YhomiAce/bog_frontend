/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "../../../../config/config";
import Spinner from "../../../layouts/Spinner";
import toaster from "toasted-notes";


export default function SubAdminDetails() {
    const { search } = useLocation();
    const navigate = useNavigate()
    const adminId = new URLSearchParams(search).get("adminId");
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAdminDetails = async (adminId) => {
        try {
            setLoading(true);
            const url = `/admin/${adminId}`
            const res = await Axios.get(url);
            const admin = res.admin
            console.log(admin)
            setAdmin(res.admin);
            setLoading(false);
            return admin;
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdminDetails(adminId)
    }, []);

    const suspendUser = async (userId) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            console.log(authToken);
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            const url = `/admin/suspend-user`;
            const body = {
                userId
            }
            const response = await Axios.post(url, body, config);
            console.log(response);
            if (response.success === true) {

                await fetchAdminDetails(userId)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    const unsuspendUser = async (userId) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            console.log(authToken);
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            const url = `/admin/unsuspend-user`;
            const body = {
                userId
            }
            const response = await Axios.post(url, body, config);
            console.log(response);
            if (response.success === true) {
                await fetchAdminDetails(userId)
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    const deleteUser = async (userId) => {
        try {
            setLoading(true);
            const authToken = localStorage.getItem("auth_token");
            console.log(authToken);
            const config = {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': authToken
                }
            }
            const url = `/admin/delete-user/${userId}`;
            const response = await Axios.delete(url, config);
            console.log(response);
            
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toaster.notify(
                error.message,
                {
                    duration: "4000",
                    position: "bottom",
                }
            );
        }
    }

    const suspendUserAction = (userId) => {
        Swal.fire({
            title: "Suspend User",
            text: 'Do you want to Suspend this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes ',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                suspendUser(userId);
                Swal.fire({
                    title: 'Success',
                    text: 'User suspendend'
                });
            }
        });
    }

    const unsuspendUserAction = (userId) => {
        Swal.fire({
            title: "UnSuspend User",
            text: 'Do you want to unuspend this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes ',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                unsuspendUser(userId);
                Swal.fire({
                    title: 'Success',
                    text: 'User unsuspendend'
                });
            }
        });
    }

    const deleteUserAction = (userId) => {
        Swal.fire({
            title: "Delete User",
            text: 'Do you want to delete this user?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes Delete',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                deleteUser(userId);
                Swal.fire({
                    title: 'Success',
                    text: 'User Deleted'
                }).then(() => {
                    navigate("/dashboard/sub-admin")
                });
            }
        });
    }


    if (loading) {
        return <center><Spinner /></center>
    }



    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="fs-700 lg:text-2xl fw-600 flex items-top">View Sub-Admin: <span className="text-primary lg:fs px-3 lg:w-auto w-6/12">{admin?.name}</span></p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and review sub-admin(s)</p>
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
                        <Link to="/dashboard/sub-admin" className="opacity-60">
                            <span>Sub-Admins</span>
                        </Link>
                        <Link to="" className="">
                            <span>Sub-Admin Details</span>
                        </Link>
                    </Breadcrumbs>
                </div>
                {/* order details */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="">
                        <div className="lg:w-full p-5 bg-white rounded-md">
                            <div className="lg:w-7/12 flex items-top lg:items-center">
                                <div className="">
                                    <Avatar src={admin?.photo ? admin.photo : "https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png"} alt="profile" className="lg:w-36 lg:h-36 w-16 h-16" />
                                </div>
                                <div className="lg:pl-10 pl-6">
                                    <p className="lg:text-xl fw-600">{admin?.name}</p>
                                    <div className="flex mt-3">
                                        {
                                            admin?.isSuspended ?
                                                <button
                                                    className="bg-orange-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-2 py-1 text-white"
                                                    onClick={() => unsuspendUserAction(admin?.id)}
                                                >UnSuspend</button>
                                                :
                                                <button
                                                    className="bg-orange-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-2 py-1 text-white"
                                                    onClick={() => suspendUserAction(admin?.id)}
                                                >Suspend</button>
                                        }
                                        <button 
                                        className="bg-red-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-2 py-1 ml-3 text-white"
                                        onClick={()=> deleteUserAction(admin?.id)}
                                        >Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-5/12 mt-6 lg:mt-10">
                                <div className="fs-400 fw-500">
                                    <div className="flex">
                                        <p className="text-gray-600">Email:</p>
                                        <p className="pl-3">{admin?.email ? admin.email : "null"}</p>
                                    </div>
                                    {/* <div className="flex mt-2">
                                        <p className="text-gray-600">Phone:</p>
                                        <p className="pl-3">{admin?.phone}</p>
                                    </div> */}
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Level:</p>
                                        <p className="pl-3">{admin?.level ? admin.level : "null"}</p>
                                    </div>
                                    {/* <div className="flex mt-2">
                                        <p className="text-gray-600">Password:</p>
                                        <p className="pl-3 overflow-x-scroll">{admin?.password}</p>
                                    </div> */}
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Registered On:</p>
                                        <p className="pl-3">{dayjs(admin?.createdAt).format(" HH:mmA  DD MMMM, YYYY")}</p>
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