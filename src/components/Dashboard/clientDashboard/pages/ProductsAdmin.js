/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAdminProducts, getCategories } from '../../../../redux/actions/ProductAction';
import AdminCreateProduct from "./Product/Modals/AdminCreateProduct";
import AdminProductLists from "./Product/AdminProductLists";

export default function ProductsAdmin() {
    useEffect(() => {
        dispatch(getAdminProducts());
        dispatch(getCategories());
    }, [])

    const [adminAdd, setAdminAdd] = useState(false);
    const dispatch = useDispatch();

    function CloseModal() {
        setAdminAdd(false)
    }

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Manage Products</p>
                        <p className="fs-400 text-gray-600 mt-2">Update, add and edit products available at the shop </p>
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
                                <span>Products</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded border-pri text-primary" onClick={() => setAdminAdd(!adminAdd)}>Add Product</button>
                    </div>
                </div>
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <Tabs className="px-2 lg:px-0 py-5 lg:py-0">
                            <TabList className="">
                                <Tab>All Products</Tab>
                                <Tab>In Review</Tab>
                                <Tab>Approved</Tab>
                                <Tab>Disapproved</Tab>
                            </TabList>
                            <TabPanel>
                                
                                <AdminProductLists />
                            </TabPanel>
                            <TabPanel>
                                <AdminProductLists status={"in_review"} />
                            </TabPanel>
                            <TabPanel>
                                <AdminProductLists status={"approved"} />
                            </TabPanel>
                            <TabPanel>
                                <AdminProductLists status={"disapproved"} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            {adminAdd && (
                <AdminCreateProduct CloseModal={CloseModal} />
            )}
        </div>
    )
}