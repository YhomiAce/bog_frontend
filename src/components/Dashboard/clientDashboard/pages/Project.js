import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Progress, Avatar, Breadcrumbs } from "@material-tailwind/react";
import ProjectChart from "../../assets/ProjectChart";
import { useSelector } from 'react-redux';
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
    
    const auth = useSelector((state) => state.auth);

  let projects = <ClientProject/>;

    if (auth?.user?.userType === "private_client") {
      projects = <ClientProject/>
    }else if(auth?.user?.userType === "vendor"){
      projects = <ServiceProject/>
    }else if(auth?.user?.userType === "professional"){
        projects = <ServiceProject />
      }else if(auth?.user?.userType === "admin"){
      projects = <ServiceProject/>
    }
  return projects;

    
}

export function ClientProject() {

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">My Projects</p>
                    <p className="fs-400 text-gray-600 mt-2">Monitor your project progress</p>
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
                            <span>Projects</span>
                        </Link>
                    </Breadcrumbs>
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
                    <div className="mt-6 lg:mt-10 bg-white lg:p-6 p-3 lg:w-8/12 rounded-md">
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

export function ServiceProject() {

    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                {/* header */}
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">My Projects</p>
                    <p className="fs-400 text-gray-600 mt-2">Monitor your project progress</p>
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
                            <span>Projects</span>
                        </Link>
                    </Breadcrumbs>
                </div> 
                {/* content */}
                <div className="lg:p-5 px-3 py-5 mt-6">
                    {/* project analysis for my projects*/}
                    <div className="mt-2">
                        <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                            <div className="flex px-5 justify-between">
                                <div>
                                    <p className="fw-600 fs-600 lg:text-lg mb-6 lg:mb-0">My Projects</p>
                                </div>
                            </div>
                            <div className="px-5 mt-6">
                                <div className="overflow-x-auto">
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
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    5
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
                                                    6
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
                                                    7
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