import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProductTable from "../../assets/Tables/ProductTable";

export default function Notify() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Notifications</p>
                    <p className="fs-400 text-gray-600 mt-2">See latest system updates and notifications</p>
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
                            <span>Notifications</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* notifications */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="lg:w-8/12 xl:w-7/12 mx-auto lg:py-8 py-4 lg:px-6 bg-white rounded-md">
                        <Tabs>
                            <TabList>
                                <Tab>Recent</Tab>
                                <Tab>All Notifications</Tab>
                                <Tab>Unread</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="mt-10 px-3 pb-5">
                                    <div className="flex items-center">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> just completed blueprint drawing for project...</p>
                                            <p className="fs-400 text-gray-500">1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Surveyor</span> updated the due date for land survey</p>
                                            <p className="fs-400 text-gray-500">6 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Land Surveyor</span> added a file into upcoming <span className="text-primary">Soil Test</span> project.</p>
                                            <p className="fs-400 text-gray-500">15 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Supplier</span> accepted your order request for granite delivery</p>
                                            <p className="fs-400 text-gray-500">16 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-2/12 lg:w-auto">
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> requested for a meeting...</p>
                                            <p className="fs-400 text-gray-500">20 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10 px-3 lg:px--0 lg:pb-0 pb-5">
                                    <div className="flex items-center">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> just completed blueprint drawing for project...</p>
                                            <p className="fs-400 text-gray-500">1 hour ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Surveyor</span> updated the due date for land survey</p>
                                            <p className="fs-400 text-gray-500">6 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Land Surveyor</span> added a file into upcoming <span className="text-primary">Soil Test</span> project.</p>
                                            <p className="fs-400 text-gray-500">15 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Supplier</span> accepted your order request for granite delivery</p>
                                            <p className="fs-400 text-gray-500">16 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-2/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> requested for a meeting...</p>
                                            <p className="fs-400 text-gray-500">20 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Supplier</span> accepted your order request for granite delivery</p>
                                            <p className="fs-400 text-gray-500">21 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> just completed blueprint drawing for project...</p>
                                            <p className="fs-400 text-gray-500">23 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-">Welcome to BOG, sell your products to clients with ease.</p>
                                            <p className="fs-400 text-gray-500">3 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10 pb-8 px-3">
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Land Surveyor</span> added a file into upcoming <span className="text-primary">Soil Test</span> project.</p>
                                            <p className="fs-400 text-gray-500">15 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-2/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6 pl-0">
                                            <p className="text-gray-600"><span className="text-black">BOG Architect</span> requested for a meeting...</p>
                                            <p className="fs-400 text-gray-500">20 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                            <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="text-gray-600"><span className="text-black">BOG Supplier</span> accepted your order request for granite delivery</p>
                                            <p className="fs-400 text-gray-500">21 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-7 lg:mt-12">
                                        <div className="w-3/12 lg:w-auto">
                                        <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="avatar" className="w-12 h-12 circle " />
                                        </div>
                                        <div className="lg:pl-6">
                                            <p className="">Welcome to BOG, sell your products to clients with ease.</p>
                                            <p className="fs-400 text-gray-500">3 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
        )
}