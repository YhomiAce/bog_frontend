import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Progress, Avatar } from "@material-tailwind/react";
import ProjectChart from "../../assets/ProjectChart";

export default function Projects() {
    

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">My Projects</p>
                    <p className="fs-400 text-gray-600 mt-2">Monitor your project progress</p>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    {/* project analysis and calendar*/}
                    <div className="lg:grid-74">
                        <div className="lg:p-5 px-2 py-5 bg-white rounded-md">
                            <p className="lg:text-lg fw-600 fs-600">My Projects</p>
                            <div className="mt-4 lg:mt-10">
                                <Tabs>
                                    <TabList className="flex fs-300 lg:fs-600">
                                        <Tab>Ongoing</Tab>
                                        <Tab>Pending</Tab>
                                        <Tab>Declined</Tab>
                                        <Tab>Completed</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="bg-white mt-1 lg:mt-0 lg:px-6 px-1 py-6 rounded">
                                            
                                            <div className="text-sm fw-600">
                                            <div className="flex justify-between items-center">
                                                <Avatar src={require("../images/profile.png")} />
                                                <div className="lg:w-7/12 xl:w-9/12 w-6/12">
                                                    <p className="fs-500 pb-2">Land Survey</p>
                                                    <Progress color="yellow" value="20" />
                                                </div>
                                                <div>
                                                <p className="text-yellow-600 mt-4">20% Done</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 justify-between items-center">
                                                <Avatar src={require("../images/profile.png")} />
                                                <div className="lg:w-7/12 xl:w-9/12 w-6/12">
                                                <p className="fs-500 pb-2">Electric Drawing</p>
                                                <Progress color="blue" value="70" />
                                                </div>
                                                <div>
                                                <p className="text-blue-600 mt-4">70% Done</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 justify-between items-center">
                                                <Avatar src={require("../images/profile.png")} />
                                                <div className="lg:w-7/12 xl:w-9/12 w-6/12">
                                                <p className="fs-500 pb-2">Building Drawing</p>
                                                <Progress color="purple" value="40" />
                                                </div>
                                                <div>
                                                <p className="text-purple-600 mt-4">40% Done</p>
                                                </div>
                                            </div>
                                            <div className="flex mt-4 justify-between items-center">
                                                <Avatar src={require("../images/profile.png")} />
                                                <div className="lg:w-7/12 xl:w-9/12 w-6/12">
                                                <p className="fs-500 pb-2">Soil Test</p>
                                                <Progress color="green" value="90" />
                                                </div>
                                                <div>
                                                <p className="text-green-600 mt-4">90% Done</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                        <div className="bg-white rounded-md mt-6 lg:mt-0">
                            <div className="bg-primary text-white rounded-t-md">
                                <p className="py-6 fw-600 ml-7 lg:text-lg">Calender</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-10 bg-white lg:p-6 lg:w-8/12 rounded-md">
                        <div className="mb-5">
                            <p className="text-lg fw-600">Project Analysis</p>
                        </div>
                        <ProjectChart/>
                    </div>
                </div>
            </div>
        </div>
        )
}