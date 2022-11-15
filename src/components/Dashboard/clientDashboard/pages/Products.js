import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { products } from "../../../pages/shop/AllProducts";
import {RiDeleteBinLine} from "react-icons/ri";
import {BiEdit} from "react-icons/bi";
import {BsExclamationCircleFill} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Products() {

    const [productDelete, setProductDelete] = useState(false)
    const [productEdit, setProductEdit] = useState(false)

    function CloseDelete() {
        setProductDelete(false)
        setProductEdit(false)
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
                            {/* header to add and see draft */}
                            <Tabs>
                                <TabList className="flex fs-400 lg:fs-600">
                                    <Tab>My Products</Tab>
                                    <Tab>Add New Product</Tab>
                                    <Tab>Drafts</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="lg:fs-500 fs-400">
                                        {products.slice(0,5).map(item => {
                                            return(
                                                <div className="mt-12 flex border-b pb-4">
                                                    <div className="lg:w-3/12">
                                                        <img src={item.img} alt="productId" className="w-40 h-36"/>
                                                    </div>
                                                    <div className="w-9/12 lg:pl-6 pl-3 grid content-between">
                                                        <div className="lg:fs-500">
                                                            <p>{item.tittle}</p>
                                                            <p className="mt-1">{item.price}</p>
                                                            <p className="mt-1 h-10 fs-300 overflow-hidden">Consequat mollit commodo laboris amet est occaecat velit velit proident enim nulla eu. Deserunt consectetur cillum irure magna cillum elit mollit nulla. Ullamco commodo irure est aliquip qui anim qui occaecat magna officia minim do qui cupidatat. Ex et ipsum magna nisi ipsum. Ea magna in in aute sunt excepteur ad quis aliqua excepteur quis aliqua. Veniam deserunt qui labore occaecat sint consectetur sit veniam exercitation aliquip laboris id.</p>
                                                            <p className="mt-1 text-green-600 fw-500">Approved</p>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <span className="text-2xl pr-3 cursor-pointer" onClick={() => {setProductEdit(true)}}><BiEdit/></span> 
                                                            <span className="text-2xl pl-3 text-red-600 cursor-pointer"><RiDeleteBinLine onClick={() => {setProductDelete(true)}}/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="mt-12 px-5">
                                        <form>
                                            <p className="fs-600 fw-600">Add a new Product to the Shop</p>
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
                                            <div className="mt-8 flex lg:w-10/12 justify-between">
                                                <button className="btn-primary w-5/12 px-1 ">
                                                    Save to Drafts
                                                </button>
                                                <button className="btn-primary w-5/12">
                                                    Add Product
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                <div>
                                        {products.slice(4,6).map(item => {
                                            return(
                                                <div className="mt-12 flex border-b pb-4 fs-400 lg:fs-500">
                                                    <div className="lg:w-3/12">
                                                        <img src={item.img} alt="productId" className="w-40 h-36"/>
                                                    </div>
                                                    <div className="w-9/12 lg:pl-6 pl-3 grid content-between">
                                                        <div className="lg:fs-500">
                                                            <p>{item.tittle}</p>
                                                            <p className="mt-1">{item.price}</p>
                                                            <p className="mt-1 h-10 fs-300 overflow-hidden">Consequat mollit commodo laboris amet est occaecat velit velit proident enim nulla eu. Deserunt consectetur cillum irure magna cillum elit mollit nulla. Ullamco commodo irure est aliquip qui anim qui occaecat magna officia minim do qui cupidatat. Ex et ipsum magna nisi ipsum. Ea magna in in aute sunt excepteur ad quis aliqua excepteur quis aliqua. Veniam deserunt qui labore occaecat sint consectetur sit veniam exercitation aliquip laboris id.</p>
                                                        </div>
                                                        <div className="flex items-center mt-1">
                                                            <button className="btn-primary py-1 mr-4">Add to Shop</button>
                                                            <span className="text-2xl pl-3 text-red-600 cursor-pointer"><RiDeleteBinLine/></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <div className="bg-white rounded-lg px-3 py-6 mt-8 lg:mt-0">
                            <p className="fs-700 fw-600">Recent Products</p>
                            <div className="mt-12">
                                {products.slice(0,4).map(item => {
                                    return(
                                        <div className="mt-12 flex border-b pb-4">
                                            <div className="w-4/12">
                                                <img src={item.img} alt="productId" className="w-full h-32"/>
                                            </div>
                                            <div className="w-8/12 pl-6 grid content-between">
                                                <div className="fs-500">
                                                    <p>{item.tittle}</p>
                                                    <ReactStars
                                                        edit={false}
                                                        value={item.rating}
                                                        size={20}
                                                    />
                                                    <p className="mt-1 fw-600">{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                            <p className="px-3 py-1 border border-orange-500 text-center w-8/12 lg:w-6/12 rounded mt-10 mx-auto cursor-pointer">View More Products</p>
                        </div>
                    </div>
                </div>
                {/* modals */}
                {productDelete && (
                    <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                        <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <div className="flex lg:px-6 px-5">
                                <div className="text-2xl pr-3 text-yellow-600">
                                    <BsExclamationCircleFill/>
                                </div>
                                <div>
                                    <p className="fs-700 fw-600 mb-4">Delete Product</p>
                                    <p>Are you sure you want to delete this product? All data attached to this product will be permanently removed.</p>
                                </div>
                            </div>
                            <div className="bg-light rounded-b-md  py-4 mt-5 text-end px-5">
                                <Button color="black" variant="outlined" ripple={true} onClick={CloseDelete}>Cancel</Button>
                                <Button color="red" className="ml-4" ripple={true}>Delete</Button>
                            </div>
                        </div> 
                    </div>
                )}
                {productEdit && (
                    <div className="fixed font-primary top-0 left-0 w-full h-screen bg-op center-item z-40" onClick={CloseDelete}>
                        <div className="bg-white px-4 lg:w-5/12 rounded-md h-700 overflow-y-auto overscroll-none  w-11/12 pt-8 pb-8 lg:px-10 shadow fw-500 scale-ani" onClick={e => e.stopPropagation()}>
                            <form>
                                <p className="lg:fs-700 fw-600">Edit this Product</p>
                                <div className="mt-5">
                                    <label className="block">New Product Tittle</label>
                                    <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">New Product Price</label>
                                    <input type="text" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">New Product Image</label>
                                    <input type="file" className="w-full lg:w-10/12 border border-gray-400 rounded mt-2 py-2 px-2" required/>
                                </div>
                                <div className="mt-5">
                                    <label className="block">New Product Description</label>
                                    <textarea className="w-full lg:w-10/12 h-24 border border-gray-400 rounded mt-2 p-2" required></textarea>
                                </div>
                                <div className="mt-8 flex lg:w-10/12 justify-between">
                                    <Button color="red" onClick={CloseDelete}>Cancel</Button>
                                    <Button className="bg-primary">Save Edit</Button>
                                </div>
                            </form>
                        </div> 
                    </div>
                )}
            </div>
        </div>
        )
}