/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import { daysInWeek } from "date-fns";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import { MdMarkEmailUnread, MdProductionQuantityLimits } from "react-icons/md";
import { RiAccountPinCircleFill, RiBaseStationLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Axios from "../../../../config/config";
import Spinner from "../../../layouts/Spinner";
import { VerifyModal } from "./Modals/VerifyModal";

// const baseURL = process.env.REACT_APP_IMAGE_URL;

export default function UserDetails() {
    const { search } = useLocation();
    const userId = new URLSearchParams(search).get("userId");
    const [client, setClient] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [moreDetails, setMoreDetails] = useState(false);
    const [verify, setVerify] = useState(false);

    const fetchUserDetails = async (userId) =>{
        try {
            setLoading(true);
            const url = `/users/get-user/${userId}`
            await Axios.get(url)
            const res = await Axios.get(url);
            const datas = res.data
            console.log(datas)
            setClient(res.data.user);
            setAccounts(res.data.accounts);
            setLoading(false);
            setMoreDetails(true)
            return datas;
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect (() => {
        fetchUserDetails(userId)
    }, []) ;


  if (loading){
    return <center><Spinner /></center>
  }   
    

    const formatType = (userType) => {
        switch (userType) {
            case "private_client":
                return <p className="fw-500 fs-300 mt-1 mx-2 px-2 py-1 rounded-md bg-gray-100">Private Client</p>
            case "corporate_client":
              return <p className="fw-500 fs-300 mt-1 mx-2 px-2 py-1 rounded-md bg-blue-100">Corporate Client</p>
            case "vendor":
              return <p className="fw-500 fs-300 mt-1 mx-2 px-2 py-1 rounded-md bg-yellow-100">Product Partner</p>
            case "professional":
              return <p className="fw-500 fs-300 mt-1 mx-2 px-2 py-1 rounded-md bg-orange-100">Service Partner</p>
    
            default: return userType
        }
    }
    const formatName = (userType) => {
        switch (userType) {
            case "private_client":
                return 'Client'
            case "corporate_client":
              return 'Client'
            case "vendor":
              return 'Product Partner'
            case "professional":
              return 'Service Partner'
    
            default: return ""
        }
    }


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="fs-700 lg:text-2xl fw-600 flex items-top">View {formatName(client?.userType)}: <span className="text-primary lg:fs px-3 lg:w-auto w-6/12">{client?.name}</span></p>
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
                        <Link to="/dashboard/client" className="opacity-60">
                            <span>Users</span>
                        </Link>
                        <Link to="" className="">
                            <span>Users Details</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* order details */}
                {
                    moreDetails && (
                        <div className="lg:p-5 px-2 py-4">
                            <div className="">
                                <div className="lg:w-full justify-evenly lg:grid-2 rounded-md">
                                    <div className="bg-white p-3 lg:p-8">
                                        <div className="flex items-top lg:items-center">
                                            <div className="">
                                                <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="profile" className="lg:w-36 lg:h-36 md:w-24 md:h-24 w-16 h-16" />
                                            </div>
                                            <div className="xl:pl-10 md:pl-6 pl-6">
                                                <p className="lg:text-xl fw-600">{client?.name? client?.name : ""}</p>
                                                <p className="lg:grid-2 w-full">{accounts.map( item => {
                                                    return <p className="lg:w-36">{formatType(item.userType)}</p>
                                                })}</p>
                                                <div className="flex mt-3">
                                                    <button className="bg-green-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-4 py-1 text-white"onClick={() => setVerify(true)}>Verify</button>
                                                    <button className="bg-orange-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-2 py-1 ml-5 text-white">Suspend</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <div className="flex items-center shadow-lg p-4">
                                                <div className="w-20 h-20 bg-light center-item">
                                                    <MdMarkEmailUnread className="text-3xl lg:text-5xl text-primary"/>
                                                </div>
                                                <div className="fw-500 lg:pl-6">
                                                    <p className="text-gray-500">Email:</p>
                                                    <p>{client?.email? client.email : ""}</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-5 items-center shadow-lg p-4">
                                                <div className="w-20 h-20 bg-light center-item">
                                                    <GiRotaryPhone className="text-3xl lg:text-5xl text-primary"/>
                                                </div>
                                                <div className="fw-500 lg:pl-6">
                                                    <p className="text-gray-500">Phone Number:</p>
                                                    <p>{client?.phone? client?.phone: ""}</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-5 items-center shadow-lg p-4">
                                                <div className="w-20 h-20 bg-light center-item">
                                                    <BsFillCalendarDateFill className="text-3xl lg:text-5xl text-primary"/>
                                                </div>
                                                <div className="fw-500 lg:pl-6">
                                                    <p className="text-gray-500">Registered On:</p>
                                                    <p>{client?.createdAt? dayjs(client?.createdAt).format('DD/MMMM/YYYY'): ""}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white mt-6 lg:mt-0 lg:border-l-2 lg:p-8 p-3 shades">
                                        <div>
                                            <div className="lg:grid-2">
                                                <div className="border-b mt-2 py-2">
                                                    <div className="w-16 h-16 circle bg-light center-item">
                                                        <RiAccountPinCircleFill className="text-xl lg:text-3xl text-primary"/>
                                                    </div>
                                                    <div className="fw-500 mt-2 flex">
                                                        <p className="text-gray-500">No of Accounts:</p>
                                                        <p className="pl-3">{accounts.length}</p>
                                                    </div>
                                                </div>
                                                <div className="border-b mt-2 py-2">
                                                    <div className="w-16 h-16 circle bg-light center-item">
                                                        <HiIdentification className="text-xl lg:text-3xl text-primary"/>
                                                    </div>
                                                    <div className="fw-500 mt-2 flex">
                                                        <p className="text-gray-500">User Id:</p>
                                                        <p className="pl-3">{client?.id? client.id : "null"}</p>
                                                    </div>
                                                </div>
                                                { client.userType === "private_client" || client.userType === "corporate_client"? 
                                                    <div className="lg:grid-2 col-span-full">
                                                        <div className="border-b mt-2 py-2">
                                                            <div className="w-16 h-16 circle bg-light center-item">
                                                                <MdProductionQuantityLimits className="text-xl lg:text-3xl text-primary"/>
                                                            </div>
                                                            <div className="fw-500 mt-2 flex">
                                                                <p className="text-gray-500">Total Product Orders</p>
                                                                <p className="pl-3">{accounts.length}</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-b mt-2 lg:pl-4 py-2">
                                                            <div className="w-16 h-16 circle bg-light center-item">
                                                                <FaToolbox className="text-xl lg:text-3xl text-primary"/>
                                                            </div>
                                                            <div className="fw-500 mt-2 flex">
                                                                <p className="text-gray-500">Total Service Orders:</p>
                                                                <p className="pl-3">{accounts.length}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : 
                                                    client?.userType === "vendor"? 
                                                        <div className="lg:grid-2 col-span-full">
                                                            <div className="border-b mt-2 py-2">
                                                                <div className="w-16 h-16 circle bg-light center-item">
                                                                    <MdProductionQuantityLimits className="text-xl lg:text-3xl text-primary"/>
                                                                </div>
                                                                <div className="fw-500 mt-2 flex">
                                                                    <p className="text-gray-500">Ongoing Projects</p>
                                                                    <p className="pl-3">{accounts.length}</p>
                                                                </div>
                                                            </div>
                                                            <div className="border-b mt-2 lg:pl-4 py-2">
                                                                <div className="w-16 h-16 circle bg-light center-item">
                                                                    <FaToolbox className="text-xl lg:text-3xl text-primary"/>
                                                                </div>
                                                                <div className="fw-500 mt-2 flex">
                                                                    <p className="text-gray-500">Completed Projects:</p>
                                                                    <p className="pl-3">{accounts.length}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        :
                                                        client?.userType === "professional"? 
                                                        <div className="lg:grid-2 col-span-full">
                                                        <div className="border-b mt-2 py-2">
                                                            <div className="w-16 h-16 circle bg-light center-item">
                                                                <MdProductionQuantityLimits className="text-xl lg:text-3xl text-primary"/>
                                                            </div>
                                                            <div className="fw-500 mt-2 flex">
                                                                <p className="text-gray-500">Total Product Orders</p>
                                                                <p className="pl-3">{accounts.length}</p>
                                                            </div>
                                                        </div>
                                                        <div className="border-b mt-2 lg:pl-4 py-2">
                                                            <div className="w-16 h-16 circle bg-light center-item">
                                                                <FaToolbox className="text-xl lg:text-3xl text-primary"/>
                                                            </div>
                                                            <div className="fw-500 mt-2 flex">
                                                                <p className="text-gray-500">Total Service Orders:</p>
                                                                <p className="pl-3">{accounts.length}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                        :
                                                        ""
                                                }
                                                <div className="border-b mt-2 py-2">
                                                    <div className="w-16 h-16 circle bg-light center-item">
                                                        <VscReferences className="text-xl lg:text-3xl text-primary"/>
                                                    </div>
                                                    <div className="fw-500 mt-2 flex">
                                                        <p className="text-gray-500">Refferd By:</p>
                                                        <p className="pl-3">{client.referralId? client.referralId : "null"}</p>
                                                    </div>
                                                </div>
                                                <div className="border-b mt-2 py-2">
                                                    <div className="w-16 h-16 circle bg-light center-item">
                                                        <AiOutlineWechat className="text-xl lg:text-3xl text-primary"/>
                                                    </div>
                                                    <div className="fw-500 mt-2 flex">
                                                        <p className="text-gray-500">About Us:</p>
                                                        <p className="pl-3">{client.aboutUs? client.aboutUs : "null"}</p>
                                                    </div>
                                                </div>
                                                <div className="border-b mt-2 py-2">
                                                    <div className="w-16 h-16 circle bg-light center-item">
                                                        <RiBaseStationLine className="text-xl lg:text-3xl text-primary"/>
                                                    </div>
                                                    <div className="fw-500 mt-2 flex">
                                                        <p className="text-gray-500">Last Updated:</p>
                                                        <p className="pl-3">{client.updatedAt? dayjs(client?.updatedAt ).format('DD/MMM/YYYY'): "null"}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                client.userType === "vendor" || client.userType === "professional"?
                                <div className="bg-white lg:p-8 px-3 py-4 rounded mt-8 shadow-lg">
                                    <Tabs>
                                        <TabList className='flex lg:overflow-hidden overflow-scroll w-full'>
                                            <Tab>General Information</Tab>
                                            <Tab>Organisation Information</Tab>
                                            <Tab>Tax Details and Permits</Tab>
                                            <Tab>Work/Job Execution Experience</Tab>
                                            <Tab>Categories of Supply</Tab>
                                            <Tab>Financial Data</Tab>
                                            <Tab>Uploaded Documents</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Name of Organisation:</p>
                                                    <p className="mt-1">Green Mouse</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Email Adress:</p>
                                                    <p className="mt-1">test@test.com</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Office Telephone / Contact No:</p>
                                                    <p className="mt-1">080 0000 000 000</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Registration:</p>
                                                    <p className="mt-1">Registered Business Name</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Incorporation / Registration No:</p>
                                                    <p className="mt-1">123456789</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Business Address:</p>
                                                    <p className="mt-1">2 metalbox ogba, ikaja, lagos.</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Address of other significant operational base (including Email/Telephone):</p>
                                                    <p className="mt-1">2 metalbox ogba, ikaja, lagos.</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Organisation:</p>
                                                    <p className="mt-1">Limited Liability</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Date of Incorporation / Registration:</p>
                                                    <p className="mt-1">20 October 2002</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Director's Details:</p>
                                                    <p className="mt-1 flex items-center"><span>Full Name:</span><span className="pl-2">Green Mouse</span></p>
                                                    <p className="mt-1 flex items-center"><span>Designation:</span><span className="pl-2">Branch Manager</span></p>
                                                    <p className="mt-1 flex items-center"><span>Phone Number:</span><span className="pl-2">090 000 0000 000</span></p>
                                                    <p className="mt-1 flex items-center"><span>Email:</span><span className="pl-2">test@gmail.com</span></p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Contact Person:</p>
                                                    <p className="mt-1 flex items-center"><span>Phone Number:</span><span className="pl-2">090 000 0000 000</span></p>
                                                    <p className="mt-1 flex items-center"><span>Email:</span><span className="pl-2">test@gmail.com</span></p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Other companies operated:</p>
                                                    <p className="mt-1">Metalbox Industries</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">VAT Registration Number:</p>
                                                    <p className="mt-1">RUU84O90PPPPPPEE9</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Tax Identification Number:</p>
                                                    <p className="mt-1">PEUIR095KG8EJE3</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">List of Relevant statutory/professional bodies registered with:</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <p>List the most relevant jobs by monetary value with other companies </p>
                                                <div className="mt-4">
                                                    <p>Job 1</p>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500 text-primary">Name:</p>
                                                        <p className="mt-1">Green Mouse</p>
                                                    </div>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500">Value (NGN):</p>
                                                        <p className="mt-1">NGN 5,000,000</p>
                                                    </div>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500">Date:</p>
                                                        <p className="mt-1">08 December 2018</p>
                                                    </div>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500">Provisional document:</p>
                                                        <p className="mt-1 text-primary">open document</p>
                                                    </div>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500">Experience(years):</p>
                                                        <p className="mt-1">3 Years</p>
                                                    </div>
                                                    <div className="py-4 border-b">
                                                        <p className="text-gray-500">Invovement of parent company:</p>
                                                        <p className="mt-1">nill</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <p>Categories of supply</p>
                                                <ul className="list-disc mt-6 ml-8">
                                                    <li className="my-2">Marine</li>
                                                    <li className="my-2">Electrical / Instrumentation</li>
                                                    <li className="my-2">Building Materials</li>
                                                    <li className="my-2">HSE</li>
                                                </ul>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Account Holder Name:</p>
                                                    <p className="mt-1">Green Mouse</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Name:</p>
                                                    <p className="mt-1">First United Bank of Ikeja</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Account Number:</p>
                                                    <p className="mt-1">00 0000 000 000</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Name and address of banker(s) from whom references can be obtained:</p>
                                                    <p className="mt-1">Metalbox Road</p>                                                    
                                                    <p className="mt-1">Metalbox Road Ikeja</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Account:</p>
                                                    <p className="mt-1">Current Account</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Level of current overdraft facility:</p>
                                                    <p className="mt-1">nill</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                :
                                ""
                            }
                        </div>
                    )
                }
            </div>
            {
                verify && <VerifyModal setVerify={setVerify}/>
            }
        </div>
        )
}
