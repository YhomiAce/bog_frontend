/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Breadcrumbs } from "@material-tailwind/react";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";
import { AiOutlineWechat } from "react-icons/ai";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { HiIdentification } from "react-icons/hi";
import { MdMarkEmailUnread, MdProductionQuantityLimits, MdVerified } from "react-icons/md";
import { RiAccountPinCircleFill, RiBaseStationLine } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Axios from "../../../../config/config";
import { formatNumber } from "../../../../services/helper";
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
    const [kyc, setKyc] = useState(null);

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
    const fetchKycDetails = async (userId, userType) => {
        try {
            const url = `/kyc/user-kyc/${userId}?userType=${userType}`
            await Axios.get(url)
            const res = await Axios.get(url);
            const kycs = res.data
            setKyc(kycs)
            console.log(kycs)
        } catch(error){
            console(error)
        }
    }
    const Reload = () => {
        setTimeout(() => {
            fetchUserDetails(userId)
        }, 3000);
    }

    useEffect (() => {
        fetchUserDetails(userId)
    }, []) ;
    useEffect(()=> {
        if(client){
            fetchKycDetails(userId, client.userType)
        }
    }, [client])


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
                        {
                            client?.userType === "vendor"? 
                            <Link to="/dashboard/productpartner" className="opacity-60">
                                <span>Users</span>
                            </Link>
                            :
                            client?.userType === "professional"? 
                            <Link to="/dashboard/servicepartner" className="opacity-60">
                                <span>Users</span>
                            </Link>
                            :
                            <Link to="/dashboard/clients" className="opacity-60">
                                <span>Users</span>
                            </Link>
                        }
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
                                        <div className="flex relative items-top lg:items-center">
                                            <div className="">
                                                <Avatar src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="profile" className="lg:w-36 lg:h-36 md:w-24 md:h-24 w-16 h-16" />
                                            </div>
                                            <div className="xl:pl-10 md:pl-6 pl-6">
                                                <p className="lg:text-xl fw-600">{client?.name? client?.name : ""}</p>
                                                <p className="lg:grid-2 w-full">{accounts.map( item => {
                                                    return <p className="lg:w-36" key={item.id}>{formatType(item.userType)}</p>
                                                })}</p>
                                                <div className="flex mt-3">
                                                    {
                                                        client?.profile.isVerified?
                                                        <button className="bg-green-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-4 py-1 text-white">Verified</button>
                                                        :
                                                        <button className="bg-green-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-4 py-1 text-white"onClick={() => setVerify(true)}>Verify</button>
                                                    }
                                                    <button className="bg-orange-500 lg:fs-600 fw-600 px-4 lg:px-8 lg:py-2 py-1 ml-5 text-white">Suspend</button>
                                                </div>
                                            </div>
                                            {
                                                client?.profile.isVerified?
                                                <div className="absolute top-5 right-5 flex items-center">
                                                    <MdVerified className="text-3xl text-secondary"/>
                                                    <p className="fw-600 text-primary">{client?.profile.kycPoint}</p>
                                                </div>
                                                :
                                                ''
                                            }
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
                                                    client?.userType === "professional"? 
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
                                                        client?.userType === "vendor"? 
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
                                                                <p className="text-gray-500">Total Product:</p>
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
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.organisation_name? kyc?.kycGeneralInfo?.organisation_name : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Email Adress:</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.email_address? kyc?.kycGeneralInfo?.email_address : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Office Telephone / Contact No:</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.contact_number? kyc?.kycGeneralInfo?.contact_number : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Registration:</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.reg_type? kyc?.kycGeneralInfo?.reg_type : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Incorporation / Registration No:</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.registration_number? kyc?.kycGeneralInfo?.registration_number : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Business Address:</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.business_address? kyc?.kycGeneralInfo?.business_address : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Address of other significant operational base (including Email/Telephone):</p>
                                                    <p className="mt-1">{kyc?.kycGeneralInfo?.operational_address? kyc?.kycGeneralInfo?.operational_address : "No data"}</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Organisation:</p>
                                                    <p className="mt-1">{kyc?.kycOrganisationInfo?.organisation_type? kyc?.kycOrganisationInfo?.organisation_type : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Date of Incorporation / Registration:</p>
                                                    <p className="mt-1">{kyc?.kycOrganisationInfo?.Incorporation_date? dayjs(kyc?.kycOrganisationInfo?.Incorporation_date).format('DD-MMM-YYYY') : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Director's Details:</p>
                                                    <p className="mt-1 flex items-center"><span>Full Name:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.director_fullname? kyc?.kycOrganisationInfo?.director_fullname : "No data"}</span></p>
                                                    <p className="mt-1 flex items-center"><span>Designation:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.director_designation? kyc?.kycOrganisationInfo?.director_designation : "No data"}</span></p>
                                                    <p className="mt-1 flex items-center"><span>Phone Number:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.director_phone? kyc?.kycOrganisationInfo?.director_phone : "No data"}</span></p>
                                                    <p className="mt-1 flex items-center"><span>Email:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.director_email? kyc?.kycOrganisationInfo?.director_email : "No data"}</span></p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Contact Person:</p>
                                                    <p className="mt-1 flex items-center"><span>Phone Number:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.contact_phone? kyc?.kycOrganisationInfo?.contact_phone : "No data"}</span></p>
                                                    <p className="mt-1 flex items-center"><span>Email:</span><span className="pl-2">{kyc?.kycOrganisationInfo?.contact_email? kyc?.kycOrganisationInfo?.contact_email : "No data"}</span></p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Other companies operated:</p>
                                                    <p className="mt-1">{kyc?.kycOrganisationInfo?.others_operations? kyc?.kycOrganisationInfo?.others_operations : "No data"}</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">VAT Registration Number:</p>
                                                    <p className="mt-1">{kyc?.kycTaxPermits?.VAT? kyc?.kycTaxPermits?.VAT : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Tax Identification Number:</p>
                                                    <p className="mt-1">{kyc?.kycTaxPermits?.TIN? kyc?.kycTaxPermits?.TIN : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">List of Relevant statutory/professional bodies registered with:</p>
                                                    <p className="mt-1">{kyc?.kycTaxPermits?.relevant_statutory? kyc?.kycTaxPermits?.relevant_statutory : "No data"}</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <p>List the most relevant jobs by monetary value with other companies </p>
                                                {
                                                    kyc?.kycWorkExperience.length > 0? kyc?.kycWorkExperience.map((item, index) =>
                                                         (
                                                            <div className="mt-4 bg-light lg:p-6 rounded-md">
                                                                <p>Job {index + 1}</p>
                                                                <div className="lg:flex w-full">
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500 text-primary">Name:</p>
                                                                        <p className="mt-1">{item?.name}</p>
                                                                    </div>
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500">Value (NGN):</p>
                                                                        <p className="mt-1">{formatNumber(item?.value)}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="lg:flex w-full">
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500">Date:</p>
                                                                        <p className="mt-1">{dayjs(item?.date).format('DD-MMM-YYYY')}</p>
                                                                    </div>
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500">Provisional document:</p>
                                                                        <p className="mt-1 text-primary">
                                                                            <a href={item?.fileUrl} target='_blank' rel="noreferrer" >Open Document</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="lg:flex w-full">
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500">Experience(years):</p>
                                                                        <p className="mt-1">{item?.years_of_experience? item?.years_of_experience : "No data"}</p>
                                                                    </div>
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500">Invovement of parent company:</p>
                                                                        <p className="mt-1">{item?.company_involvement? item?.company_involvement : "No data"}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :
                                                        ""
                                                }
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <p>Categories of supply</p>
                                                <ul className="list-disc mt-6 ml-8">
                                                    <li className="my-2">{kyc?.suppyCategory?.categories? kyc?.suppyCategory?.categories : "No data"}</li>
                                                </ul>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Account Holder Name:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.account_name? kyc?.kycFinancialData?.account_name : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Name:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.bank_name? kyc?.kycFinancialData?.bank_name : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Bank Account Number:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.account_number? kyc?.kycFinancialData?.account_number : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Name and address of banker(s) from whom references can be obtained:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.account_name? kyc?.kycFinancialData?.account_name : "No data"}</p>                                                    
                                                    <p className="mt-1">{kyc?.kycFinancialData?.banker_address? kyc?.kycFinancialData?.banker_address : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Type of Account:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.account_type? kyc?.kycFinancialData?.account_type : "No data"}</p>
                                                </div>
                                                <div className="py-4 border-b">
                                                    <p className="text-gray-500">Level of current overdraft facility:</p>
                                                    <p className="mt-1">{kyc?.kycFinancialData?.overdraft_facility? kyc?.kycFinancialData?.overdraft_facility : "No data"}</p>
                                                </div>
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="mt-6 fw-500">
                                                <p>List the most relevant jobs by monetary value with other companies </p>
                                                {
                                                    kyc?.kycDocuments.length > 0? kyc?.kycDocuments.map((item, index) =>
                                                         (
                                                            <div className="mt-4">
                                                                <div className="lg:flex w-full">
                                                                    <div className="py-4 border-b lg:w-6/12">
                                                                        <p className="text-gray-500 text-primary">{item?.name}:</p>
                                                                        <p className="mt-1 text-primary">
                                                                            <a href={item?.file} target="_blank" rel="noreferrer">View Document</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                        :
                                                        ""
                                                }
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
                verify && <VerifyModal setVerify={setVerify} client={client} reload={Reload}/>
            }
        </div>
        )
}
