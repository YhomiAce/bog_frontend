import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React from "react";
import { useSelector } from "react-redux";
import { Breadcrumbs, CardBody } from "@material-tailwind/react";
import ChartLine, { ProjectChart } from "../assets/UsersChart";
import  { AdminChart } from "../assets/ProjectChart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAdminOrders } from '../../../redux/actions/OrderAction';
// import { format } from 'date-fns';
// import Moment from 'react-moment';
import * as moment from 'moment'
import { formatNumber } from "../../../services/helper";
import { FaRegHandPointRight } from "react-icons/fa";
// import Moment from 'react-moment';


export default function AdminDashboard(status) {
    const user = useSelector((state) => state.auth.user);
    const formatStatus = (status) => {
        switch (status) {
            case "in_review":
                return "In Review"
            case "approved":
                return "Approved"
            case "disapproved":
                return "Disapproved"
            case "pending":
                return "Pending"
            case "draft":
                return "Draft"

            default: return status
        }

    }
    let adminOrders = useSelector((state) => state.orders.adminOrders);
    

  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAdminOrders());
        // dispatch(getCategories());
    }, [dispatch])
  
  return (
    <div className="min-h-screen">
      <div className="w-full py-6 lg:px-8 bg-white px-4">
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
            <div className="bg-[#e0e7ff] px-4 py-3 rounded flex justify-between items-center shades">
              <Link to="projectsadmin" className="flex justify-between items-center w-full">
                <div>
                    <p className="text-xxl fw-600 pb-2 text-xl">147</p>
                    <p className="text-gray-600">Total Projects</p>
                </div>
                <div className="">
                    <img
                    src={require("../images/users.png")}
                    alt="project"
                    className="-bottom-3 relative w-20"
                    />
                </div>
              </Link>
            </div>
            <div className="bg-orange-100 mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
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
            <div className="bg-blue-100  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
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
            <div className="bg-green-100  mt-4 lg:mt-0 px-4 py-3 rounded flex justify-between items-center shades">
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
                <div className="flex justify-between border-b-2">
                <p className="fw-600 text-lg">Analysis</p>
                <select disabled className="bg-gray-100 text-sm px-2">
                    <option>weekly</option>
                </select>
                </div>
                <div className="mt-4">
                    <div className="bg-light p-4 rounded">
                        <p className="fw-600 text-lg text-primary border-b rounded mb-3">Orders Chart</p>
                        <ChartLine />
                    </div>
                    <div className="mt-4 bg-light p-4 rounded">
                        <p className="fw-600 text-lg text-primary border-b  rounded mb-3">Projects Chart</p>
                        <ProjectChart />
                    </div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
        {/*order table*/}
        <div className="mt-7">
            <div className=" fw-600 fs-500 bg-white pt-6 rounded">
                <div className="lg:flex px-5 items-center justify-between">
                    <div>
                        <p className="fw-600 text-lg mb-6 lg:mb-0">Recent Orders</p>
                    </div>
                    <div>
                       <Link to="ordersadmin">
                        <button className="flex items-center border-b border-primary px-2 py-1"><span className="pr-1">Goto Orders </span><FaRegHandPointRight className="text-lg text-primary"/></button>
                       </Link>
                    </div>
                </div>
                <div>
                    <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light rounded-lg bg-light">
                            <tr className="rounded-lg">
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    S/N
                                </th>
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    Order ID
                                </th>
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    Product Name
                                </th>
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    Date
                                </th>
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    Order Price
                                </th>
                                <th className="px-2 align-middle fw-600 py-3 text-primary whitespace-nowrap text-left">
                                    Order Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="fw-400">
                            {
                                adminOrders.length > 0 ? adminOrders.slice(0, 9).map((item, index) => {
                                    return (
                                        <tr>
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
                                                {moment(item.createdAt).format("MMMM Do YYYY , h:mm:ss a")}{" "}
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN {formatNumber(item.totalAmount)}
                                            </td>
                                            <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                {formatStatus(item.status)}
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    {/* <p className="bg-orange-100" onClick={() => gotoDetailsPage(item.id)}><BsThreeDotsVertical /></p> */}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }) : null
                            }
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