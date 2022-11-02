import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import {  CardBody } from "@material-tailwind/react";
import ChartLine from "../assets/UsersChart";
import ProjectChart from "../assets/ProjectChart";

export default function ProductDashboard() {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div className="min-h-screen">
      <div className="w-full py-10 lg:px-8 bg-white px-4">
        <div className="text-2xl fw-600 flex items-center">
          <p className="">Welcome, {user?.name}</p>
          <FontAwesomeIcon icon={faThumbsUp} className="pl-3 text-secondary" />
        </div>
        <p className="mt-3 fs-500">
          Enjoy full control of your construction projects
        </p>
      </div>
      <div className=" p-5">
        <div className="mt-3">
          <div className="lg:grid-4 justify-between fs-500 fw-600">
            <div className="bg-white px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl fw-600 pb-2 text-xl">180 </p>
                <p className="text-gray-600">Total Request</p>
              </div>
              <div className="">
                <img
                  src={require("../images/request.png")}
                  alt="project"
                  className=" relative w-16"
                />
              </div>
            </div>
            <div className="bg-white mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl pb-2 fw-600">23</p>
                <p className="text-gray-600">Pending Orders</p>
              </div>
              <div className="">
                <img
                  src={require("../images/pending.png")}
                  alt=""
                  className=" relative w-16 mt-2"
                />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="fw-600 text-xxl pb-2">25</p>
                <p className="text-gray-600">Active Deliveries</p>
              </div>
              <div className="relative">
                <img
                  src={require("../images/deliver.png")}
                  alt="cart"
                  className=" relative w-16"
                />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl fw-600 pb-2">12</p>
                <p className="text-gray-600">Completed Deliveries</p>
              </div>
              <div className="">
                <img
                  src={require("../images/complete.png")}
                  alt="ongoing"
                  className=" left-2 relative w-20"
                />
              </div>
            </div>
          </div>
        </div>
        {/* product requests*/}
        <div>
        <div className="mt-7">
            <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                <div className="lg:flex px-5 justify-between">
                    <div>
                        <p className="fw-600 text-lg mb-6 lg:mb-0">Product Request</p>
                    </div>
                    <div>
                        <div class="mr-6 relative mx-auto text-gray-600">
                            <input
                            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search"
                            name="search order by name"
                            placeholder="Search"
                            />
                            <button
                            type="submit"
                            class="absolute bg-primary right-0 top-0 py-2 px-4 rounded-r-lg"
                            >
                            <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light rounded-lg bg-gray-100">
                            <tr className="rounded-lg">
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                S/N
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Name
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Request ID
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Date
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Delivery Status
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Profile
                            </th>
                            </tr>
                        </thead>
                        <tbody className="fw-400">
                            <tr>
                            <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                1
                            </th>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Alex Patex
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Granite
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Granite-VAC-20E42 
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                10/10/2022
                            </td>
                            <td className=" text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Delivered
                            </td>
                            </tr>
                            <tr>
                            <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                2
                            </th>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Ester Simoms
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Sand
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Sand-DCL-20E42
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                19/10/2022
                            </td>
                            <td className=" text-blue-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Awaiting Delivery
                            </td>
                            </tr>
                            <tr>
                            <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                3
                            </th>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Jerome Stones
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Cement
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Cement-PDL-2OE42
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                23/11/2022
                            </td>
                            <td className=" text-red-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Canceled
                            </td>
                            </tr>
                            <tr>
                            <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                4
                            </th>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Alico Dangote
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Steel
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Steel-XBL-2OLBB
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                24/11/2022
                            </td>
                            <td className=" text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Delivered
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
        {/* project analysis and ongoing project*/}
        
      </div>
    </div>
  );
}