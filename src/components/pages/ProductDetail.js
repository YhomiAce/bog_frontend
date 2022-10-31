import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { useParams } from "react-router-dom";
import { products } from "./shop/AllProducts";

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
                        <div className="lg:flex pt-10">
                            <div className="w-4/12">
                                <img src={thisItem.img} alt="product" className="w-full" />
                            </div>
                            <div className="pl-8">
                                <p className="text-3xl fw-600">{thisItem.tittle}</p>
                                <p className="fw-600 py-4 text-gray-600"><span className="pr-2 ">Product Category :</span>{thisItem.category}</p>
                                <ReactStars 
                                    edit={false}
                                    value={thisItem.rating}
                                    size={35}
                                />
                                <p className="text-2xl fw-600 py-6">{thisItem.price}</p>
                                <div>
                                    <p className="fw-600 text-gray-600">Quantity</p>
                                    <div className="mt-6">
                                        <input type="number" value={1} className="w-16 px-2 rounded py-2 border border-black"/>
                                        <button className="btn-primary ml-7 px-8">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                {/* <div className="py-24 box">
                    <p><img src={thisTop.img} alt="product" /></p>
                    <p>{thisTop.tittle}</p>
                </div> */}
                <Footer/>
            </div>
        </div>
    )
}