/* eslint-disable react-hooks/exhaustive-deps */
import {Breadcrumbs } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getMe } from "../../../../redux/actions/authAction";
import Axios from "../../../../config/config";
import { AccountType } from "./AccountType";
import Spinner from "../../../layouts/Spinner";
import { UserAvatar } from "../../assets/Avatar";


export const SwitchAccount = () => {

    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    // const BASE_URL = process.env.REACT_APP_IMAGE_URL;
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

    const fetchUserAccounts = async () => {
        try {
            const config = {
                headers: {
                  "Content-Type": "Application/json",
                  authorization: localStorage.getItem("auth_token"),
                },
              };
            setLoading(true);
            const response = await Axios.get("/user/get-accounts",config)
            const data = response.accounts;
            setAccounts(data)
            setLoading(false);
            console.log(data)
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchUserAccounts();
    }, []);

    if (loading) {
        return <center>
            <Spinner />
        </center>
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
                                <UserAvatar/>
                                <div className="pl-3">
                                    <p className="fw-600">{user ? getUserType(user?.userType) : ""}</p>
                                    <p >{user?.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="fw-600">Other Accounts</p>

                            {accounts.length > 0 ? accounts.filter(where => where.userType !== user?.userType).map(acct => {
                                return <AccountType key={acct.id} account={acct} switchAccount={switchAccount} />
                            }) : <h5>No Other Accounts</h5>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}