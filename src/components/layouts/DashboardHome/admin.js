import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import ChartLine from "../assets/UsersChart";
import  { AdminChart } from "../assets/ProjectChart";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const user = useSelector((state) => state.auth.user);
  
  
  return (
    <div className="min-h-screen">
      <div className="w-full py-10 lg:px-8 bg-white px-4">
        <div className="text-2xl fw-600 flex items-center">
          <p className="">Welcome, {user?.name}</p>
          <FontAwesomeIcon icon={faThumbsUp} className="pl-3 text-secondary" />
        </div>
        <p className="mt-3 fs-500">
             Provide solution to projects and users worldwide
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
          <Link to="">
            <span>Dashboard</span>
          </Link>
        </Breadcrumbs>
      </div>
      <div className=" p-5">
        <div className="mt-3">
          <div className="lg:grid-4 justify-between fs-500 fw-600">
            <div className="bg-white px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl fw-600 pb-2 text-xl">147</p>
                <p className="text-gray-600">Total Users</p>
              </div>
              <div className="">
                <img
                  src={require("../images/users.png")}
                  alt="project"
                  className="-bottom-3 relative w-20"
                />
              </div>
            </div>
            <div className="bg-white mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="client" className="flex justify-between items-center w-full">
                <div>
                    <p className="text-xxl pb-2 fw-600">23</p>
                    <p className="text-gray-600">Clients</p>
                </div>
                <div className="">
                    <img
                    src={require("../images/client.png")}
                    alt="orders"
                    className="w-16 lg:mt-2"
                    />
                </div>
              </Link>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="servicepartner" className="flex justify-between items-center w-full">
                <div>
                    <p className="fw-600 text-xxl pb-2">35</p>
                    <p className="text-gray-600">Service Partners</p>
                </div>
                <div className="relative">
                    <img
                    src={require("../images/sp.png")}
                    alt="cart"
                    className="w-16 lg:mt-3"
                    />
                </div>
              </Link>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="productpartner" className="flex justify-between items-center w-full">
                <div>
                    <p className="text-xxl fw-600 pb-2">12</p>
                    <p className="text-gray-600">Product Partners</p>
                </div>
                <div className="">
                    <img
                    src={require("../images/pp.png")}
                    alt="ongoing"
                    className=" w-16"
                    />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* recent order and chart */}
        <div className="mt-7 lg:grid-83 justify-between">
            {/* <div className=" fw-600 fs-500 bg-white pt-6 rounded">
            <div className="lg:flex px-5 justify-between">
                <div>
                <p className="fw-600 text-lg mb-6 lg:mb-0">Recent Orders</p>
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
                            Order ID
                        </th>
                        <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                            Product Name
                        </th>
                        <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                            Date
                        </th>
                        <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                            Order Status
                        </th>
                        </tr>
                    </thead>
                    <tbody className="fw-400">
                        <tr>
                        <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            1
                        </th>
                        <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            Granite-VAC-2OE42
                        </td>
                        <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            Granite
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
                            Sand-DCL-20E42
                        </td>
                        <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            Sand
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
                            Cement-PDL-2OE42
                        </td>
                        <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            Cement
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
                            Steel-XBL-2OLBB
                        </td>
                        <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                            Steel
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
            </div> */}
            <div className=" fw-600 fs-500 bg-white py-6 rounded">
                <div className="flex justify-between px-6">
                    <p className="fw-600 text-lg">Activity Chart</p>
                    <select disabled className="bg-gray-100 text-sm px-2">
                        <option>weekly</option>
                    </select>
                </div>
                <div className="mt-6">
                    <AdminChart/>
                </div>
            </div>
          <div className="bg-white mt-6 lg:mt-0 rounded py-6 px-4">
            <div className="flex justify-between">
              <p className="fw-600 text-lg">Order Analysis</p>
              <select disabled className="bg-gray-100 text-sm px-2">
                <option>weekly</option>
              </select>
            </div>
            <div className="mt-8">
              <ChartLine />
            </div>
            <div>
                <div></div>
            </div>
          </div>
        </div>
        {/* project analysis and ongoing project*/}
        <div className="mt-7">
            <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                <div className="lg:flex px-5 justify-between">
                    <div>
                        <p className="fw-600 text-lg mb-6 lg:mb-0">Recent Orders</p>
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
                                Order ID
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Product Name
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Date
                            </th>
                            <th className="px-2 align-middle fw-500 py-3 text-sm whitespace-nowrap text-left">
                                Order Status
                            </th>
                            </tr>
                        </thead>
                        <tbody className="fw-400">
                            <tr>
                            <th className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                1
                            </th>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Granite-VAC-2OE42
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Granite
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
                                Sand-DCL-20E42
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Sand
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
                                Cement-PDL-2OE42
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Cement
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
                                Steel-XBL-2OLBB
                            </td>
                            <td className=" align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                Steel
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
    </div>
  );
}