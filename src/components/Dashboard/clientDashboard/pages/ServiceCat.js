/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CreateServiceModal from "./Product/Modals/CreateService";
import { MdOutlineEngineering } from "react-icons/md";
import { ServiceCategoryTable } from "../../assets/Tables/ServiceCatTable";
import { useEffect } from "react";
import { getAllServiceCategories } from "../../../../redux/actions/ServiceCategoryAction";

export default function ServiceCategory() {
    const dispatch = useDispatch();

    const [adminAdd, setAdminAdd] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const categories = useSelector((state) => state.service.services);

    useEffect(() => {
        dispatch(getAllServiceCategories())
    }, [dispatch]);

    const openEditModal = (item) => {
        setSelectedItem(item);
        setAdminAdd(true);
    }


    function CloseModal() {
        setAdminAdd(false)
    }

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Manage Services</p>
                        <p className="fs-400 text-gray-600 mt-2">Update, add and edit service categories to render to customers. </p>
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
                                <span> Service Category</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded bg-primary text-white fw-600 flex items-center" onClick={() => setAdminAdd(!adminAdd)}><span className="pr-1"><MdOutlineEngineering /></span>Add New Category</button>
                    </div>
                </div>
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <div className="">
                            {categories.length > 0 ? <ServiceCategoryTable adminEdit={openEditModal} /> : <center><h5>No Categories added. Add new ones</h5></center>}
                        </div>
                    </div>
                </div>
            </div>
            {adminAdd && (
                <CreateServiceModal selected={selectedItem} CloseModal={CloseModal} />
            )}
        </div>
    )
}