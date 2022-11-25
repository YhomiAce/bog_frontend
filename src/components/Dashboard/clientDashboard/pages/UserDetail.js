/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import React, {useEffect, useState} from "react";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Axios from "../../../../config/config";
import Spinner from "../../../layouts/Spinner";

// const baseURL = process.env.REACT_APP_IMAGE_URL;

export default function UserDetails() {
    const { search } = useLocation();
    const userId = new URLSearchParams(search).get("userId");
    const [client, setClient] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUserDetails = async (userId) =>{
        try {
            setLoading(true);
            const url = `/users/get-user/${userId}`
            const res = await Axios.get(url);
            setClient(res.data.user);
            setAccounts(res.data.accounts);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
   
  useEffect (() => {
      fetchUserDetails(userId)
  }, []) 

  if(loading){
    return <center><Spinner /></center>
  }   
    

    const formatType = (userType) => {
        switch (userType) {
            case "private_client":
                return "Private Client"
            case "corporate_client":
              return "Corporate Client"
            case "vendor":
              return "Product Partner"
            case "product_partner":
              return "Product Partner"
            case "service_partner":
              return "Service Partner"
            case "professional":
              return "Service Partner"
    
            default: return userType
        }
    }


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600 flex items-center">View Client: <span className="text-primary px-3">{client?.name}</span></p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and review all clients</p>
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
                            <span>Clients</span>
                        </Link>
                        <Link to="" className="">
                            <span>Client Details</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* order details */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="lg:flex">
                        <div className="lg:w-3/12 mt-8">
                            <div className="p-5 bg-white rounded-md">
                                <div className="flex">
                                    <div>
                                        <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" variant="circular" alt="order"  />
                                    </div>
                                    <div className="grid fs-400 content-between pl-4 py-2 fw-500">
                                        <p>{client?.name}</p>
                                        <p className="text-gray-600">{accounts.map( item => (
                                            <p>{formatType(item?.userType)} </p>
                                        ))}</p>
                                    </div>
                                </div>
                                <div className="fs-400 fw-500 mt-5">
                                    <div className="flex">
                                        <p className="text-gray-600">Email:</p>
                                        <p className="pl-3">{client?.email}</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Phone:</p>
                                        <p className="pl-3">{client?.phone}</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Total Product Orders:</p>
                                        <p className="pl-3">NGN 2,000,000</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Total Service Orders:</p>
                                        <p className="pl-3">NGN 15,000,000</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <p className="text-gray-600">Registered On:</p>
                                        <p className="pl-3">20-10-2022</p>
                                    </div>
                                    <div className="flex justify-between mt-6">
                                        <button className="bg-green-500 px-4 py-1 text-white rounded-md">Verify</button>
                                        <button className="bg-orange-500 px-4 py-1 text-white rounded-md">Suspend</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-9/12 lg:px-6 mt-8">
                            <div className="bg-white px-5 py-6 rounded-md">
                                <p className="fw-600 text-primary px-5">Total Product Orders (4)</p>
                                <div className="overflow-x-auto bg-white py-5 rounded-md px-5">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                    <thead className="thead-light bg-light">
                                        <tr>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            S/N
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Order ID
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Product Category
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Quantity
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Delivery Date
                                        </th>
                                        <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                            Order Status
                                        </th>
                                        <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                            Actions
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            1
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Granite-VAC-20E42 
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Granite
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            2
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            12/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Request
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            2
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Sand- DCL-20E42
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Sand
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            3
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            10/10/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Active
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            3
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Cement- PDL-18L40
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Cement
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            182 Bags of Cement
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            19/11/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Completed
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            4
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Sand- DCL-20E42
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            Sand
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            2
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            17/10/2022
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            pending
                                        </td>
                                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                            <div className="flex text-xl">
                                            <p><FaRegEye/></p>
                                            </div>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="mt-8 bg-white px-5 py-6 rounded-md">
                                <p className="fw-600 text-primary px-5">Total Projects (4)</p>
                                <div className="overflow-x-auto bg-white py-5 rounded-md px-5">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead className="thead-light bg-light">
                                            <tr>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Location
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    1
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRAW-VAC-20E42 
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Construction Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ogba, Lagos
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    20-04-2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ongoing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                        <p><FaRegEye/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    2
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRAW-ERC-20E42 
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Architectural Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ojo, Lagos
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    10/10/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ongoing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                        <p><FaRegEye/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    3
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRAW-PDL-18L40
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Construction Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Island, Lagos
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    19/11/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Completed
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                    <p><FaRegEye/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    4
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRAW-DCL-20E42
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Electrical Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ikeja, Lagos
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    17/10/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Ongoing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                        <p><FaRegEye/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}