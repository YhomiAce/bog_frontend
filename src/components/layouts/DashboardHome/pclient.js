import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Avatar, CardBody, Progress } from "@material-tailwind/react";
import ChartLine from "../assets/UsersChart";
import ProjectChart from "../assets/ProjectChart";

export default function PclientDashboard() {
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
                <p className="text-gray-600">Total Order</p>
              </div>
              <div className="">
                <img
                  src={require("../images/order.png")}
                  alt="project"
                  className=" relative w-16"
                />
              </div>
            </div>
            <div className="bg-white mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl pb-2 fw-600">10</p>
                <p className="text-gray-600">Pending Orders</p>
              </div>
              <div className="">
                <img
                  src={require("../images/pend.png")}
                  alt=""
                  className=" relative w-16 mt-2"
                />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="fw-600 text-xxl pb-2">25</p>
                <p className="text-gray-600">Total Projects</p>
              </div>
              <div className="relative">
                <img
                  src={require("../images/project.png")}
                  alt="cart"
                  className=" relative w-16"
                />
              </div>
            </div>
            <div className="bg-white  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <div>
                <p className="text-xxl fw-600 pb-2">12</p>
                <p className="text-gray-600">Ongoing Projects</p>
              </div>
              <div className="">
                <img
                  src={require("../images/ongoing.png")}
                  alt="ongoing"
                  className=" left-2 relative w-20"
                />
              </div>
            </div>
          </div>
        </div>
        {/* recent order and chart */}
        <div className="mt-7 lg:grid-83 justify-between">
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
          <div className="bg-white mt-6 lg:mt-0 rounded pt-6 px-4">
            <div className="flex justify-between">
              <p className="fw-600 text-lg">Order Analysis</p>
              <select disabled className="bg-gray-100">
                <option>weekly</option>
              </select>
            </div>
            <div className="mt-8">
              <ChartLine />
            </div>
          </div>
        </div>
        {/* project analysis and ongoing project*/}
        <div className="mt-7 lg:grid-74 justify-between">
          <div className="py-6 px-4 bg-white rounded">
            <div className="flex justify-between">
              <p className="text-lg fw-600">Project Analysis</p>
              <select disabled className="bg-gray-100">
                <option>yearly</option>
              </select>
            </div>
            <div className="mt-4">
              <ProjectChart />
            </div>
          </div>
          {/* ongoing projects */}
          <div className="bg-white mt-6 lg:mt-0 px-6 py-6 rounded">
            <div>
              <p className="text-lg fw-600">Ongoing Projects</p>
            </div>
            <div className="pt-8 text-sm fw-600">
              <div className="flex justify-between items-center">
                <Avatar src={require("../images/profile.png")} />
                <div className="lg:w-7/12 xl:w-8/12 w-6/12">
                  <p className="fs-500 pb-2">Land Survey</p>
                  <Progress color="yellow" value="20" />
                </div>
                <div>
                  <p className="text-yellow-600 mt-4">20% Done</p>
                </div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <Avatar src={require("../images/profile.png")} />
                <div className="lg:w-7/12 xl:w-8/12 w-6/12">
                  <p className="fs-500 pb-2">Electric Drawing</p>
                  <Progress color="blue" value="70" />
                </div>
                <div>
                  <p className="text-blue-600 mt-4">70% Done</p>
                </div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <Avatar src={require("../images/profile.png")} />
                <div className="lg:w-7/12 xl:w-8/12 w-6/12">
                  <p className="fs-500 pb-2">Building Drawing</p>
                  <Progress color="purple" value="40" />
                </div>
                <div>
                  <p className="text-purple-600 mt-4">40% Done</p>
                </div>
              </div>
              <div className="flex mt-4 justify-between items-center">
                <Avatar src={require("../images/profile.png")} />
                <div className="lg:w-7/12 xl:w-8/12 w-6/12">
                  <p className="fs-500 pb-2">Soil Test</p>
                  <Progress color="green" value="90" />
                </div>
                <div>
                  <p className="text-green-600 mt-4">90% Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}