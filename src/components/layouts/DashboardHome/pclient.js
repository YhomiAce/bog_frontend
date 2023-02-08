import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Breadcrumbs, CardBody, Progress } from "@material-tailwind/react";
import ProjectChart from "../assets/ProjectChart";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserOrders } from "../../../redux/actions/OrderAction";
import dayjs from "dayjs";

export default function PclientDashboard() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);

  const order = useSelector((state) => state.orders.userOrders)
  const project = useSelector((state) => state.projects.projects)

  const pendingOrder = order.filter(where => where.status === "pending")
  const ongoingProject = project.filter(where => where.status === "ongoing")

  useEffect(() => {
    dispatch(getUserOrders())
  }, [dispatch])
  
  return (
    <div className="min-h-screen">
      <div className="w-full py-6 lg:px-8 bg-white px-4">
        <div className="text-2xl fw-600 flex items-center">
          <p className="">Welcome, {user?.name}</p>
          <FontAwesomeIcon icon={faThumbsUp} className="pl-3 text-secondary" />
        </div>
        <p className="mt-3 fs-500">
          Enjoy full control of your construction projects
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
            <div className="px-4 py-3 bg-purple-50 rounded flex justify-between items-center shades">
              <Link to="orders" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl fw-600 pb-2 text-xl">{order? order.length : 0} </p>
                  <p className="">Total Orders</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/order.png")}
                    alt="project"
                    className=" relative w-16"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-yellow-100 mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="orders" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl pb-2 fw-600">{pendingOrder? pendingOrder.length : 0 }</p>
                  <p className="text-gray-600">Pending Orders</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/pend.png")}
                    alt=""
                    className=" relative w-16 mt-2"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-blue-100  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="fw-600 text-xxl pb-2">{project? project.length : 0}</p>
                  <p className="text-gray-600">Total Projects</p>
                </div>
                <div className="relative">
                  <img
                    src={require("../images/project.png")}
                    alt="cart"
                    className=" relative w-16"
                  />
                </div>
              </Link>
            </div>
            <div className="bg-green-100  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projects" className="flex justify-between items-center w-full">
                <div>
                  <p className="text-xxl fw-600 pb-2">{ongoingProject? ongoingProject.length : 0}</p>
                  <p className="text-gray-600">Ongoing Projects</p>
                </div>
                <div className="">
                  <img
                    src={require("../images/ongoing.png")}
                    alt="ongoing"
                    className=" left-2 relative w-20"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* recent order and chart */}
        <div className="mt-7 lg:grid-83 justify-between">
          <div className=" fw-600 fs-500 bg-white rounded">
            <div className="lg:flex px-5 border-b-2 items-center py-3 bg-primary text-white rounded-t-lg justify-between">
              <div>
                <p className="fw-600 text-lg mb-6 lg:mb-0">Recent Orders</p>
              </div>
              <div className="">
                <div class="mr-6 relative mx-auto text-black">
                  <Link to='orders'><button className="border-secondary bg-light px-3 py-1">View All</button></Link>
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
                      {
                          order.length > 0 ? order.slice(0, 6).map((item, index) => {
                              return (
                                  <tr key={index}>
                                      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                          {index + 1}                    
                                      </td>
                                      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                          {item.orderSlug}
                                      </td>
                                      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                          {item.order_items[0].product.name}
                                      </td>
                                      <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                          {dayjs(item.createdAt).format('DD-MMM-YYYY')}
                                      </td>
                                      <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                          {item.status}
                                      </td>
                                  </tr>
                              )
                          }) : <p className="text-primary text-center fw-500 mt-8">No Order Made</p>
                      }
                  </tbody>
                  </table>
                </div>
              </CardBody>
            </div>
          </div>
          <div className="bg-white mt-6 lg:mt-0 rounded ">
            <div className="flex justify-between border-b-2 items-center py-3 px-4 bg-primary text-white rounded-t-lg">
              <p className="fw-600 text-lg">Order Analysis</p>
              <select disabled className="bg-white py-1 rounded text-black">
                <option>weekly</option>
              </select>
            </div>
            <div className="mt-8">
              {/* <ChartLine /> */}
            </div>
          </div>
        </div>
        {/* project analysis and ongoing project*/}
        <div className="mt-7 lg:grid-74 justify-between">
          <div className="pb-6 bg-white rounded">
            <div className="flex justify-between border-b-2 items-center py-3 px-4 bg-primary text-white rounded-t-lg">
              <p className="text-lg fw-600">Project Analysis</p>
              <select disabled className="bg-white py-1 rounded text-black">
                <option>yearly</option>
              </select>
            </div>
            <div className="mt-4 px-4 ">
              <ProjectChart />
            </div>
          </div>
          {/* ongoing projects */}
          <div className="bg-white mt-6 lg:mt-0 pb-6 rounded">
            <div  className="border-b-2 items-center py-3 px-4 bg-primary text-white rounded-t-lg">
              <p className="text-lg fw-600">Ongoing Projects</p>
            </div>
            <div className="pt-8 text-sm fw-600 px-6">
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