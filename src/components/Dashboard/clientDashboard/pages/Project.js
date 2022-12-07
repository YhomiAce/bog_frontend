import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Progress, Avatar, Breadcrumbs } from "@material-tailwind/react";
import ProjectChart from "../../assets/ProjectChart";
import { useSelector } from 'react-redux';
import { FaFileDownload, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";

export default function Projects() {
    
    const auth = useSelector((state) => state.auth);

  let projects = null;

    if (auth?.user?.userType === "private_client") {
      projects = <ClientProject/>
    }else if(auth?.user?.userType === "corporate_client"){
      projects = <ClientProject/>
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
                    <div className="">
                        <div className="lg:p-5 px-2 py-5 bg-white rounded-md">
                            <p className="lg:text-lg fw-600 fs-600">My Projects</p>
                            <div className="mt-4 lg:mt-10">
                                <Tabs>
                                    <TabList className="flex fs-300 lg:fs-600">
                                        <Tab>All Projects</Tab>
                                        <Tab>Pending</Tab>
                                        <Tab>Ongoing</Tab>
                                        <Tab>Completed</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="mt-10 flex justify-between">
                                            <div class="flex text-gray-600">
                                                <input
                                                class="border-2 border-gray-300 bg-white  px-5 pr-4 rounded-l-lg text-sm focus:outline-none"
                                                type="search"
                                                name="search order by name"
                                                placeholder="Search"
                                                />
                                                <button
                                                type="submit"
                                                class=" bg-primary  right-0 top-0 py-2 px-4 rounded-r-lg"
                                                >
                                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                                                </button>
                                            </div>
                                            <div>
                                                <Menu>
                                                    <MenuHandler>
                                                        <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaFileDownload className="text-2xl"/></Button>
                                                    </MenuHandler>
                                                    <MenuList>
                                                        <MenuItem>
                                                            Export as CSV
                                                        </MenuItem>
                                                        <MenuItem >
                                                            Export as Excel
                                                        </MenuItem>
                                                        <MenuItem>
                                                            Export as PDF 
                                                        </MenuItem>
                                                    </MenuList>
                                                </Menu>
                                            </div>
                                        </div>
                                        <div className="overflow-x-auto mt-6">
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
                                                    Project Type
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project Status
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Due Date
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
                                                    LND-213-4DGRT
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Land Survey
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Pending
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">

                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Menu placement="left">
                                                        <MenuHandler>
                                                            <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaRegEye className="text-2xl"/></Button>
                                                        </MenuHandler>
                                                        <MenuList>
                                                            <MenuItem>
                                                                View Details
                                                            </MenuItem>
                                                            <MenuItem>
                                                                ....
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    2
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    LND-213-4DGRT
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Land Survey
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Completed
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    10/12/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Menu placement="left">
                                                        <MenuHandler>
                                                            <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaRegEye className="text-2xl"/></Button>
                                                        </MenuHandler>
                                                        <MenuList>
                                                            <MenuItem>
                                                                View Details
                                                            </MenuItem>
                                                            <MenuItem>
                                                                ....
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    3
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    LND-213-4DGRT
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Land Survey
                                                </td>
                                                <td className="border-b text-red-600 border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Declined
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">

                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Menu placement="left">
                                                        <MenuHandler>
                                                            <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaRegEye className="text-2xl"/></Button>
                                                        </MenuHandler>
                                                        <MenuList>
                                                            <MenuItem>
                                                                View Details
                                                            </MenuItem>
                                                            <MenuItem>
                                                                ....
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    4
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    DRW-263-4DGRT
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Architectural Drawing
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Progress value={30} variant="gradient"  />
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    15/12/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Menu placement="left">
                                                        <MenuHandler>
                                                            <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaRegEye className="text-2xl"/></Button>
                                                        </MenuHandler>
                                                        <MenuList>
                                                            <MenuItem>
                                                                View Details
                                                            </MenuItem>
                                                            <MenuItem>
                                                                ....
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    5
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    LND-213-4DGRT
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Land Survey
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Progress value={50} variant="gradient"  />
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    23/12/2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <Menu placement="left">
                                                        <MenuHandler>
                                                            <Button className="p-0 m-0 bg-transparent shadow-none text-blue-800 hover:shadow-none"><FaRegEye className="text-2xl"/></Button>
                                                        </MenuHandler>
                                                        <MenuList>
                                                            <MenuItem>
                                                                View Details
                                                            </MenuItem>
                                                            <MenuItem>
                                                                ....
                                                            </MenuItem>
                                                        </MenuList>
                                                    </Menu>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid-74 mt-6 lg:mt-10">
                        <div className="bg-white lg:p-6 p-3 rounded-md">
                            <div className="mb-5">
                                <p className="text-lg fw-600">Project Analysis</p>
                            </div>
                            <ProjectChart/>
                        </div>
                        
                        <div className="bg-white rounded-md mt-6 lg:mt-0">
                            <div className="bg-primary text-white rounded-t-md">
                                <p className="py-6 fw-600 ml-7 lg:text-lg">Calender</p>
                            </div>
                        </div>
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