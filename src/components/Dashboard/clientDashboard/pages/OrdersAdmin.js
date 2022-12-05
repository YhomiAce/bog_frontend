import React, { useRef, useState,useEffect } from "react";
// import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import  { Button } from "@material-tailwind/react";
// import {BsThreeDotsVertical} from "react-icons/bs";
import { Breadcrumbs} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { HiOutlineDocumentDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAdminOrders } from '../../../../redux/actions/OrderAction';
import { useDispatch } from "react-redux";
import OrderTable from "../../assets/Tables/OrderTable";

export default function OrdersAdmin() {
    //   const formatNumber = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    // const formatStatus = (status) => {
    //     switch (status) {
    //         case "in_review":
    //             return "In Review"
    //         case "approved":
    //             return "Approved"
    //         case "disapproved":
    //             return "Disapproved"
    //         case "pending":
    //             return "Pending"
    //         case "draft":
    //             return "Draft"

    //         default: return status
    //     }

    // }
    let adminOrders = useSelector((state) => state.orders.adminOrders);
    //  if (status) {
    //     adminOrders = adminOrders.filter(where => where.status === status)
    //  }
    console.log(adminOrders);
    // console.log(`====== ${adminOrders}`);
    //   const dispatch = useDispatch();

    // const draftOrders = adminOrders.length > 0 ? adminOrders.filter(where => where.status === "pending") : [];
    // const reviewOrders = adminOrders.length > 0 ? adminOrders.filter(where => where.status === "in_review") : [];
    // const approvedOrders = adminOrders.length > 0 ? adminOrders.filter(where => where.status === "approved") : [];

    const products = useRef(null);
    const navigate = useNavigate()
    const [adminAdd, setAdminAdd] = useState(false)
    function CloseModal() {
        setAdminAdd(false)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAdminOrders());
        // dispatch(getCategories());
    }, [dispatch])
  

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Manage Orders</p>
                        <p className="fs-400 text-gray-600 mt-2">Assign, monitor and review all orders by clients.</p>
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
                                <span>Orders</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded border-pri text-primary" onClick={() => setAdminAdd(!adminAdd)}>Assign New Order</button>
                    </div>
                </div>  
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>All Orders</Tab>
                                <Tab>Completed</Tab>
                                <Tab>Ongoing</Tab>
                                <Tab>Cancelled</Tab>
                            </TabList>
                            <TabPanel>
                                 <OrderTable />
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
                                                    Order ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Product Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Price
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
                                                SAN - WEDG -13 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Sand
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                20-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 150,000
                                            </td>
                                            <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Ongoing
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p className="bg-orange-100" onClick={() => navigate("/dashboard/orderadmindetail")}><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                2
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                CEM-FRTG-73 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Cement
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                25-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 60,000
                                            </td>
                                            <td className="border-b border-gray-200 text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Completed
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
                                                STL-TRTG-226 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Steel
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                28-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 60,000
                                            </td>
                                            <td className="border-b border-gray-200 text-green-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Completed
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
                                                GRA-HRTC-15
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Granite
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                21-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 340,000
                                            </td>
                                            <td className="border-b text-yellow-500 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Cancelled
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
                            </TabPanel>
                             <TabPanel>
                                <OrderTable status={"in_review"} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTable status={"approved"} />
                            </TabPanel>
                            <TabPanel>
                                <OrderTable status={"disapproved"} />
                            </TabPanel>
                            {/* <TabPanel>
                                <div className="mt-10">
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
                                                    Order ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Product Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Price
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
                                                CEM-FRTG-73 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Cement
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                25-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 60,000
                                            </td>
                                            <td className="border-b border-gray-200 text-green-600 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Completed
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                            <tr>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                2
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                STL-TRTG-226 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Steel
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                28-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 60,000
                                            </td>
                                            <td className="border-b border-gray-200 text-green-600 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Completed
                                            </td>
                                            <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10">
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
                                                    Order ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Product Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Price
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
                                                SAN - WEDG -13 
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Sand
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                20-11-2022
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                NGN 150,000
                                            </td>
                                            <td className="border-b text-blue-600 border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                Ongoing
                                            </td>
                                            <td className="border-b border-gray-200 align-middle  text-sm whitespace-nowrap px-2 py-4 text-left">
                                                <div className="flex text-xl">
                                                    <p className="bg-orange-100" onClick={() => navigate("/dashboard/orderadmindetail")}><BsThreeDotsVertical/></p>
                                                </div>
                                            </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="mt-10">
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
                                                    Order ID
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Product Category
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Date
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Price
                                                </th>
                                                <th className="px-2 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                                    Status
                                                </th>
                                                <th className="px-2 fw-600 text-primary align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left w-56">
                                                    Action
                                                </th>
                                            </tr>
                                            <tr>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    1
                                                </td>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    GRA-HRTC-15
                                                </td>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Granite
                                                </td>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    21-11-2022
                                                </td>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    NGN 340,000
                                                </td>
                                                <td className="border-b text-yellow-500 border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    Cancelled
                                                </td>
                                                <td className="border-b border-gray-200 align-middle text-sm whitespace-nowrap px-2 py-4 text-left">
                                                    <div className="flex text-xl">
                                                    <p className="bg-orange-100"><BsThreeDotsVertical/></p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </TabPanel> */}
                        </Tabs>
                    </div>
                </div>
            </div>
            {adminAdd && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <form>
                                <p className="lg:fs-700 fw-600">Add Product</p>
                                <div className="mt-5">
                                    <label className="block">Product Tittle</label>
                                    <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Product Price</label>
                                    <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Product Image</label>
                                    <input type="file" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Product Description</label>
                                    <textarea className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                </div>
                                <div className="mt-5">
                                    <label className="block">Product Category</label>
                                    <select className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required>
                                        <option>Sand</option>
                                        <option>Granite</option>
                                        <option>Cement</option>
                                        <option>Steel</option>
                                    </select>
                                </div>
                                <div className="mt-8 flex lg:w-10/12 justify-between">
                                    <Button color="red" onClick={CloseModal}>Cancel</Button>
                                    <Button className="bg-primary">ADD Product</Button>
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
        </div>
        )
}