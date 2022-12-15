import React, { useEffect } from "react";
// import { DownloadTableExcel } from "react-export-table-to-excel";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import {BsThreeDotsVertical} from "react-icons/bs";
import { Breadcrumbs} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { HiOutlineDocumentDownload } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
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

    // const products = useRef(null);
    // const navigate = useNavigate()
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
                            
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
        )
}