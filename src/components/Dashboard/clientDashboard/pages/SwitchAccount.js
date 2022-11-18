import { Avatar, Breadcrumbs, Button } from "@material-tailwind/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getMe } from "../../../../redux/actions/authAction";

export const Switch = () => {
    const dispatch = useDispatch();
    const BASE_URL = process.env.REACT_APP_IMAGE_URL;
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate()

    const getUserType = (type) => {
        switch (type) {
            case "admin":
                return "Super Admin"
            case "professional":
                return "Service Partner"
            case "vendor":
                return "Product Partner"
            case "private_client":
                return "Private Client"
            case "corporate_client":
                return "Corporate Client"
            default: return ""
        }
    }

    const switchAccount = (type) => {
        localStorage.setItem("userType", type)
        dispatch(getMe());
        navigate("/dashboard");
    }

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                <p className="text-2xl fw-600">Switch Account</p>
                    <p className="fs-400 text-gray-600 mt-2">Switch bewtween our various user type.</p>
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
                            <span>Switch Account</span>
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className="px-3 py-5 lg:p-5">
                    <div className="lg:w-6/12 bg-white mx-auto p-3 lg:p-6">
                        <div className="border-b py-4">
                            <p className="text-gray-800">You are currently signed in as a </p>
                            
                            <div className="flex mt-4">
                                <Avatar
                                    src={user?.photo ? `${BASE_URL}/${user?.photo}` : "https://i.stack.imgur.com/l60Hf.png"}
                                    alt="profifepic"
                                    className="lg:w-20 w-16"
                                />
                                <div className="pl-3">
                                    <p className="fw-600">{ auth?.user ? getUserType(auth?.user?.userType) : ""}</p>
                                    <p >{user?.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="fw-600">Other Accounts</p>
                            <div className="md:flex items-center justify-between lg:mt-10 mt-6">
                                <div className="flex">
                                    <Avatar
                                        src={user?.photo ? `${BASE_URL}/${user?.photo}` : "https://i.stack.imgur.com/l60Hf.png"}
                                        alt="profifepic"
                                        className="lg:w-20 w-16"
                                    />
                                    <div className="pl-3">
                                        <p className="fw-600">Sevice Partner</p>
                                        <p >{user?.name}</p>
                                    </div>
                                </div>
                                <div className="mt-4 lg:mt-0">
                                    <Button onClick={() => switchAccount("professional")} className="bg-primary py-2 lg:py-auto">Switch</Button>
                                </div>
                            </div>
                            <div className="md:flex items-center justify-between lg:mt-10 mt-6">
                                <div className="flex">
                                    <Avatar
                                        src={user?.photo ? `${BASE_URL}/${user?.photo}` : "https://i.stack.imgur.com/l60Hf.png"}
                                        alt="profifepic"
                                        className="lg:w-20 w-16"
                                    />
                                    <div className="pl-3">
                                        <p className="fw-600">Corporate Client</p>
                                        <p >{user?.name}</p>
                                    </div>
                                </div>
                                <div className="mt-4 lg:mt-0">
                                    <Button onClick={() => switchAccount("corporate_client")} className="bg-primary py-2 lg:py-auto">Switch</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}