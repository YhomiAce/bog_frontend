import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import {FaCheck, FaRegEye, FaTimes} from "react-icons/fa";
import {  Breadcrumbs, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProjectChart from "../../Dashboard/assets/ProjectChart";
// import ProjectChart from "../assets/ProjectChart";

export default function ServiceDashboard() {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div className="min-h-screen">
      <div className="w-full py-10 lg:px-8 bg-white px-4">
        <div className="text-2xl fw-600 flex items-center">
          <p className="">Welcome, {user?.name}</p>
          <FontAwesomeIcon icon={faThumbsUp} className="pl-3 text-secondary" />
        </div>
        <p className="mt-3 fs-500">
            Render professional service solutions to users.
        </p>
        <Breadcrumbs className="bg-white pl-0 mt-5">
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
          <Link to="" >
            <span>Dashboard</span>
          </Link>
        </Breadcrumbs>
      </div>
      <div className=" p-5">
        <div className="mt-3">
          <div className="lg:grid-4 justify-between fs-500 fw-600">
            <div className="bg-white px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl fw-600 pb-2 text-xl">180 </p>
                  <p className="text-gray-600">Total Customers</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/TC.png")}
                    alt="project"
                    className=" relative w-16"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-white mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl pb-2 fw-600">23</p>
                  <p className="text-gray-600">Pending Requests</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/PR.png")}
                    alt=""
                    className=" relative w-16 mt-2"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="fw-600 text-xxl pb-2">25</p>
                  <p className="text-gray-600">Total Projects</p>
                </div>
                <div className="relative">
                  <img
                    src={require("../images/TP.png")}
                    alt="cart"
                    className=" relative w-16"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl fw-600 pb-2">12</p>
                  <p className="text-gray-600">Ongoing Projects</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/pp.png")}
                    alt="ongoing"
                    className=" left-2 relative w-20"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* project analysis and ongoing project*/}
        <div className="lg:grid-83 justify-between">
          {/* overview */}
          <div className="bg-white mt-6 rounded-lg px-4 py-6">
            <p className="fw-600 fs-700">Overview</p>
            <div>
                <ProjectChart/>
            </div>
          </div>
          {/* request analysis */}
          <div className="bg-white mt-6 rounded-lg px-4 py-6">
            <div className="flex justify-between"><p className="fw-600 fs-700">Recent Requests</p> <Link to="projects"><p className="border border-orange-600 text-orange-600 fs-400 rounded fw-500 px-2 py-1">View All</p></Link></div>
            <div className="flex justify-between mt-8">
                <div className="lg:w-2/12">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="" className="w-12 circle"/>
                </div>
                <div className="lg:w-8/12 fs-500">
                    <p className="fw-500">Construction Drawing</p>
                    <p className="text-secondary fs-400 fw-500">28-03-2022</p>
                </div>
                <div className="flex items-center lg:w-2/12">
                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                     <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div className="lg:w-2/12">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="" className="w-12 circle"/>
                </div>
                <div className="lg:w-8/12 fs-500">
                    <p className="fw-500">Architectural Drawing</p>
                    <p className="text-secondary fs-400 fw-500">28-03-2022</p>
                </div>
                <div className="flex items-center lg:w-2/12">
                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                     <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div className="lg:w-2/12">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="" className="w-12 circle"/>
                </div>
                <div className="lg:w-8/12 fs-500">
                    <p className="fw-500">Structural Drawing</p>
                    <p className="text-secondary fs-400 fw-500">28-03-2022</p>
                </div>
                <div className="flex items-center lg:w-2/12">
                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                     <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <div className="lg:w-2/12">
                    <img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1667909634/BOG/logobog_rmsxxc.png" alt="" className="w-12 circle"/>
                </div>
                <div className="lg:w-8/12 fs-500">
                    <p className="fw-500">Architectural Drawing</p>
                    <p className="text-secondary fs-400 fw-500">28-03-2022</p>
                </div>
                <div className="flex items-center lg:w-2/12">
                    <p className="border border-gray-500 text-red-600 "><FaTimes/></p>
                     <p className="border border-gray-500 text-green-600 mx-5"><FaCheck/></p>
                </div>
            </div>
          </div>
        </div>
        {/* product requests*/}
        <div>
            <div className="mt-7">
                <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                    <div className="flex px-5 justify-between">
                        <div>
                            <p className="fw-600 fs-600 lg:text-lg mb-6 lg:mb-0">My Projects</p>
                        </div>
                        <div>
                            <Link to="projects"><p className="lg:px-6 px-2 fs-400 lg:fs-600py-1 border border-orange-800 text-secondary rounded-lg fs-400">View All</p></Link>
                        </div>
                    </div>
                    <div>
                    <CardBody>
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
                    </CardBody>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}