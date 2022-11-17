/* eslint-disable react-hooks/exhaustive-deps */
import { Breadcrumbs } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "../../../../config/config";
import Spinner from "../../../layouts/Spinner";
import dayjs from 'dayjs';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { ApproveProduct } from '../../../../redux/actions/ProductAction';

const baseURL = process.env.REACT_APP_IMAGE_URL;

export default function ProductDetailsAdmin() {
    const { search } = useLocation();
    const productId = new URLSearchParams(search).get("productId");
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const stopLoading = () => setLoading(false)

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const url = `/product/${productId}`
            const res = await Axios.get(url);
            const data = res.data;
            setProduct(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (loading) {
        return <center><Spinner /></center>
    }

    const approveProduct = () => {
        Swal.fire({
            title: "Approve Product",
            text: 'Do you want to approve this product?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Approve Product',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                const payload = {
                    productId,
                    status: "approved"
                }
                dispatch(ApproveProduct(payload, stopLoading))
            }
        });
    }

    const disapproveProduct = () => {
        Swal.fire({
            title: "Disapprove Product",
            text: 'Do you want to disapprove this product?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4BB543',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Disapprove Product',
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                const payload = {
                    productId,
                    status: "disapproved"
                }
                dispatch(ApproveProduct(payload, stopLoading))
            }
        });
    }


    return (
        <div>
            <div className="min-h-screen fs-500 relative">
                <div className="w-full py-8 bg-white px-4">
                    <p className="text-2xl fw-600">Product Details</p>
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
                            <span>Product Details</span>
                        </Link>
                    </Breadcrumbs>
                </div>
                {
                    product &&
                    <div className="lg:p-5 px-2 py-4">
                        <div className="lg:grid-83">
                            <div className="bg-white lg:px-6 lg:py-6 py-4 px-3 rounded-md">
                                <form>
                                    <div className="mt-5">
                                        <label className="block fw-500">Created By</label>
                                        <input type="text" value={product?.creator.name} className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required />
                                    </div>
                                    <div className="mt-5">
                                        <label className="block fw-500">Product Name</label>
                                        <input type="text" value={product?.name} className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required />
                                    </div>
                                    <div className="mt-5">
                                        <label className="block fw-500">Product Description</label>
                                        <textarea value={product?.description} className="w-full  h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="bg-white lg:px-6 lg:py-6 px-3 py-4 mt-4 lg:mt-0 rounded-md">
                                <form>
                                    <div className="mt-5">
                                        <label className="block fw-500">Product Price</label>
                                        <input type="text" value={formatNumber(product?.price)} className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required />
                                    </div>
                                    <div className="mt-5">
                                        <label className="block fw-500">Product Category</label>
                                        <input type="text" value={product?.category.name} className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required />
                                    </div>
                                    <div className="mt-5">
                                        <label className="block fw-500">Date Posted</label>
                                        <input type="text" value={dayjs(product?.createdAt).format("DD/MM/YYYY")} className="w-full  border border-gray-400 rounded mt-2 py-2 px-2" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="mt-6 px-6 py-5 bg-white rounded-md lg:w-9/12">
                            <p className="text-xl fw-600">Uploaded Photos</p>
                            <div className="mt-6 pb-4 flex justify-between overflow-x-auto">
                                {
                                    product?.product_image.map(item => (
                                        <img key={item.id} src={`${baseURL}/${item.image}`} alt="product" className="lg:w-36 rounded-lg" />
                                    ))
                                }
                            </div>
                        </div>
                        <div className="border-t border-gray-400 mt-6 lg:mt-8">
                            <div className="flex justify-between my-6">
                                {
                                    product?.status !== "disapproved" ?
                                        <button
                                            onClick={disapproveProduct}
                                            className="w-5/12 py-2 border border-red-500 text-red-500 bg-white rounded-lg"
                                        >Disapprove</button> : null
                                }
                                {
                                    product?.status !== "approved" ?
                                        <button
                                            onClick={approveProduct}
                                            className="w-5/12 py-2 text-white bg-primary rounded-lg"
                                        >Approve Product</button> : null
                                }

                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}