import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { useParams } from "react-router-dom";
import { products, SimilarProducts } from "./shop/AllProducts";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ReactStars from "react-rating-stars-component";

export default function ProductDetail() {

    const {itemId} = useParams()
    const thisItem = products.find( prod => prod.id === itemId);

    return (
        <div>
            <div className="font-primary">
                <Header/>
                <div className="bg-shop bg-cover bg-center text-white h-40 lg:h-80  flex items-center">
                    <div className="box">
                        <p className="lg:text-4xl text-2xl fw-700 mb-2">Products</p>
                        <p>Buy top quality building materials for your project</p>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex lg:pt-10">
                            <div className="lg:w-4/12 shadow-md p-4">
                                <img src={thisItem.img} alt="product" className="w-full" />
                            </div>
                            <div className="lg:pl-8 mt-4 lg:mt-0">
                                <p className="lg:text-3xl text-lg fw-600">{thisItem.tittle}</p>
                                <p className="fw-600 lg:py-4 py-2 text-gray-600"><span className="pr-2 ">Product Category :</span>{thisItem.category}</p>
                                <div>
                                    <div className="hidden lg:block">
                                        <ReactStars 
                                            edit={false}
                                            value={thisItem.rating}
                                            size={35}
                                        />
                                    </div>
                                    <div className="lg:hidden">
                                        <ReactStars 
                                            edit={false}
                                            value={thisItem.rating}
                                            size={25}
                                        />
                                    </div>
                                </div>
                                <p className="lg:text-2xl fs-700 fw-600 lg:py-6 py-2">{thisItem.price}</p>
                                <div>
                                    <p className="fw-600 text-gray-600">Quantity</p>
                                    <div className="mt-6 fs-500 lg:fs-600">
                                        <input type="number" className="w-16 px-1 lg:px-2 rounded py-1 lg:py-2 border border-black"/>
                                        <button className="btn-primary ml-7 px-4 lg:px-8 ">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div>
                           <Tabs>
                                <TabList className="flex fs-300 lg:fs-600">
                                    <Tab>Product Details</Tab>
                                    <Tab>Specification</Tab>
                                    <Tab>Reviews</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="mt-6 lg:px-6 fs-400 lg:fs-600">
                                        <p className="text-lg mb-4 fw-600">Description</p>
                                        {thisItem.tittle}
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="mt-6 lg:px-6 fs-400 lg:fs-600">
                                        <p className="text-lg mb-4 fw-600">Description</p>
                                        {thisItem.price}
                                    </div>
                                </TabPanel>
                           </Tabs>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div>
                            <p className="fw-600 lg:text-2xl py-6">Similar Products</p>
                            <SimilarProducts />
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}