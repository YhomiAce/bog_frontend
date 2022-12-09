/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import { products } from "../../../pages/shop/AllProducts";
// import { RiDeleteBinLine } from "react-icons/ri";
// import { BiEdit } from "react-icons/bi";
// import { BsExclamationCircleFill } from "react-icons/bs";
// import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import AddProduct from "./Product/AddProduct";
import ProductItem from "./Product/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { getUserProducts, getCategories } from '../../../../redux/actions/ProductAction';
import Spinner from "../../../layouts/Spinner";
import DraftProduct from "./Product/DraftProduct";
import EditProduct from "./Product/EditProduct";
import DeleteModal from "./Product/Modals/DeleteModal";
import RecentProducts from "./Product/RecentProducts";

export default function Products() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [productDelete, setProductDelete] = useState(false)
    const [productEdit, setProductEdit] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const products = useSelector((state) => state.products.userProducts);
    const isLoading = useSelector((state) => state.products.isLoading);

    const draftProducts = products.length > 0 ? products.filter(where => where.status === "draft") : [];
    const reviewProducts = products.length > 0 ? products.filter(where => where.status === "in_review") : [];
    const approvedProducts = products.length > 0 ? products.filter(where => where.status === "approved") : [];

    const changeEditProduct = (val) => {
        setSelectedProduct(val);
        setProductEdit(true)
    }
    const changeDeleteProduct = (val) => {
        setSelectedProduct(val);
        setProductDelete(true)
    }

    function CloseDelete() {
        setProductDelete(false)
    }
    function CloseEditModal() {
        setProductEdit(false)
    }

    useEffect(() => {
        dispatch(getUserProducts());
        dispatch(getCategories());
    }, [dispatch]);

    if (isLoading) {
        return <center><Spinner /></center>
    }


    return (
        <div className="">
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Manage Products</p>
                    <p className="fs-400 text-gray-600 mt-2">Update, add and edit your products available at the shop </p>
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
                {/* product contents */}
                <div className="lg:p-5 px-2 py-4">
                    <div className="lg:grid-83">
                        <div className="bg-white rounded-lg px-3 py-6">
                            {/* header to add and see pending */}
                            <Tabs>
                                <TabList className="flex fs-400 lg:fs-600">
                                    <Tab>My Products</Tab>
                                    <Tab>Add New Product</Tab>
                                    <Tab>Review</Tab>
                                    <Tab>Drafts</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="lg:fs-500 fs-400">
                                        {approvedProducts.slice(0, 5).map(item => (
                                            <ProductItem
                                                key={item.id}
                                                item={item}
                                                setProductEdit={changeEditProduct}
                                                setProductDelete={changeDeleteProduct}
                                            />
                                        ))
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <AddProduct />
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        {reviewProducts.slice(0, 5).map(item => (
                                            <DraftProduct
                                                key={item.id}
                                                item={item}
                                                setProductDelete={changeDeleteProduct}
                                                setProductEdit={changeEditProduct}
                                            />
                                        ))
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        {draftProducts.slice(0, 5).map(item => (
                                            <DraftProduct
                                                key={item.id}
                                                item={item}
                                                setProductDelete={changeDeleteProduct}
                                                setProductEdit={changeEditProduct}
                                            />
                                        ))
                                        }
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-6 mt-8 lg:mt-0">
                            <p className="fs-700 fw-600">Recent Products</p>
                            <div className="mt-12">
                                {products.slice(0, 4).map(item => {
                                    return (
                                        <RecentProducts key={item.id} item={item} />
                                    )
                                })
                                }
                            </div>
                            <p className="px-3 py-1 border border-orange-500 text-center w-8/12 lg:w-6/12 rounded mt-10 mx-auto cursor-pointer" onClick={() => {navigate("/shop")}}>View More Products</p>
                        </div>
                    </div>
                </div>
                {/* modals */}
                {productDelete && (
                    <DeleteModal product={selectedProduct} CloseDelete={CloseDelete} />
                )}
                {productEdit && (
                    <EditProduct CloseEditModal={CloseEditModal} product={selectedProduct} />
                )}
            </div>
        </div>
    )
}