import React from "react";
import { Link } from "react-router-dom";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { UsersTable } from "../../assets/Tables/UserTable";
import { Breadcrumbs } from "@material-tailwind/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Spartners() {


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Service Partner</p>
                    <p className="fs-400 text-gray-600 mt-2">Manage and review your all service partners</p>
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
                            <span>Service Partners</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5">
                    {/* transaction table */}
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                        <TabList className="">
                            <Tab>All Service Partners</Tab>
                            <Tab>Active</Tab>
                            <Tab>Inactive</Tab>
                        </TabList>
                        <TabPanel>
                            <UsersTable userType={"professional"}/>
                        </TabPanel>
                        <TabPanel>
                            <UsersTable userType={"professional"} status={true}/>
                        </TabPanel>
                        <TabPanel>
                            <UsersTable userType={"professional"} status={false}/>
                        </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
        )
}