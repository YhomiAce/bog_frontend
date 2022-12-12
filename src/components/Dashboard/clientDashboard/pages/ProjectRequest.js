import React, { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {BsThreeDotsVertical} from "react-icons/bs";
import { Breadcrumbs} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import ProjectsTable from "../../assets/Tables/ProjectAdminTable";

export default function ProjectRequest() {
    
    const products = useRef(null);
    const navigate = useNavigate()


    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Project Requests</p>
                        <p className="fs-400 text-gray-600 mt-2">View and manage all project requests.</p>
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
                                <span>Project Request</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                </div>  
                {/* service contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>All Projects Requests</Tab>
                            </TabList>
                            <TabPanel>
                                {/* <div className="mt-10">
                                    <div className="flex items-center">
                                        <div class="flex text-gray-600">
                                            <input
                                            className="border-2 border-gray-300 bg-white h-10 px-5 lg:pr-5 rounded-l-lg text-sm focus:outline-none"
                                            type="search"
                                            name="search order by name"
                                            placeholder="Search"
                                            />
                                            <button
                                            type="submit"
                                            className=" bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                                            >
                                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                                            </button>
                                        </div>
                                        <DownloadTableExcel
                                            filename="All product partners"
                                            sheet="users"
                                            currentTableRef={products.current}
                                        >
                                            <button className="bg-light mx-4 p-2 text-2xl text-primary"><HiOutlineDocumentDownload className="text-primary"/> </button>
                                        </DownloadTableExcel>
                                    </div>
                                </div>
                                <div className="overflow-x-auto mt-6">
                                    <table className="items-center w-full bg-transparent border-collapse" ref={products}>
                                        <tbody>
                                            <tr className="thead-light bg-light">
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    S/N
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Project Name
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Service Type
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Client Name
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date of Request
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                1
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                My Land Project
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Land Survey
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Chukka Uzo
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                20-11-22
                                            </td>
                                            <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Awaiting service provider
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p className="bg-orange-100" onClick={() => navigate("/dashboard/projectadmindetail")}><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                2
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Stadium Process 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Soil Test
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Fuad Adeleke
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                20-11-22
                                            </td>
                                            <td className="border-b border-gray-200 text-blue-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Awaiting service provider
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                3
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                My Construction
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Construction Drawing 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Promise Godwin
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                21-11-22
                                            </td>
                                            <td className="border-b border-gray-200 text-blue-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Awaiting service provider
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                4
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Building Project
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Building Approval
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Kachi Stephen
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                22-11-22
                                            </td>
                                            <td className="border-b text-blue-600 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Awaiting service provider
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> */}
                                <ProjectsTable status={"pending"} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
        )
}