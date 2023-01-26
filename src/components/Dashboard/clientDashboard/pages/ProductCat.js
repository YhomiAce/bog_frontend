/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../redux/actions/ProductAction";
import CreateCategoryModal from "./Product/Modals/CreateCategoryModal";
import { ProductCategoryTable } from "../../assets/Tables/ProductCatTable";
import EditCategoryModal from "./Product/Modals/EditCategoryModal";
import DeleteCategoryModal from "./Product/Modals/DeleteCategoryModal";

export default function ProductsCategory() {
    const dispatch = useDispatch();

    const [adminAdd, setAdminAdd] = useState(false);
    const [adminEdit, setAdminEdit] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [rowValue, setRowValue] = useState()
  const [rowId, setRowId] = useState()

  const AdminEdit = (id) => {
    setAdminEdit(true)
    setRowValue(id)
    console.log(id)
  }
  const AdminDelete = (id) => {
    setDeleteModal(true)
    setRowId(id)
    console.log(id)
  }

    const categories = useSelector((state) => state.products.categories);
    

    function CloseModal() {
        setAdminAdd(false)
        setAdminEdit(false)
        setDeleteModal(false)
    }

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4 lg:flex justify-between items-center">
                    <div>
                        <p className="text-2xl fw-600">Manage Products Categories</p>
                        <p className="fs-400 text-gray-600 mt-2">Update, add and edit products categories at the shop </p>
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
                                <span>Category</span>
                            </Link>
                        </Breadcrumbs>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <button className="px-4 lg:py-2 py-1 rounded border-pri text-primary" onClick={() => setAdminAdd(!adminAdd)}>Add New Category</button>
                    </div>
                </div>
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="bg-white lg:p-5 lg:mt-6 mt-6 rounded-lg">
                        <div className="mt-10">
                            {categories.length > 0 ? <ProductCategoryTable adminEdit={AdminEdit} adminDelete={AdminDelete}/> : <center><h5>No Categories added. Add new ones</h5></center>}
                        </div>
                    </div>
                </div>
            </div>
            {adminAdd && (
                <CreateCategoryModal CloseModal={CloseModal} />
            )}
            {adminEdit && (
                <EditCategoryModal CloseModal={CloseModal} itemDetails={rowValue} />
            )}

            {deleteModal && (
                <DeleteCategoryModal category={rowId} CloseDelete={CloseModal} isAdmin={true} />
            )}
        </div>
    )
}