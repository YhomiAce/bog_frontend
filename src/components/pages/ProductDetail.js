import React, { useEffect, useState } from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import {useParams } from "react-router-dom";
import { SimilarProducts } from "./shop/SimilarProduct";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { ProductImage } from "./shop/ProductImg";
import { useNavigate } from "react-router-dom";
import "toasted-notes/src/styles.css";



export default function ProductDetail() {

    const products = useSelector((state) => state.products.products);
    const [cartNum, setCartNum] = useState(1)
    const dispatch = useDispatch()
    const { itemId } = useParams()
    const item = products.find(prod => prod.id === itemId);
    const similarProducts = products.filter(where => where.category.id === item.category.id);
    const navigate = useNavigate()

    const [itemAdded, setItemAdded] = useState(false)
    
    const addItemToCart = (item, cartNum) => {
        dispatch(addToCart(item, cartNum));
        setItemAdded(true);
    }

    useEffect(() => {
        if (itemAdded) {
            setTimeout(function () {
            setItemAdded(false);
          }, 4000);}
    }, [addItemToCart])


    return (
        <div>
            <div className="font-primary">
                <Header />
                <div className="bg-shop bg-cover bg-center text-white h-40 lg:h-80  flex items-center">
                    <div className="box">
                        <p className="lg:text-4xl text-2xl fw-700 mb-2">Products</p>
                        <p>Buy top quality building materials for your project</p>
                    </div>
                </div>
                <div className="section">
                    <div className="box">
                        <div className="lg:flex justify-center w-full">
                            <div className="lg:flex lg:pt-10">
                                <div className="lg:w-7/12 shadow-md p-4">
                                    {/* <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="product" className="w-full lg:h-72" /> */}
                                        
                                    <ProductImage item={item} />
                                </div>
                                <div className="lg:pl-8 mt-4 lg:mt-0 relative">
                                    <p className="lg:text-3xl text-lg fw-600">{item.name}</p>
                                    <p className="fw-600 lg:py-4 py-2 text-gray-600"><span className="pr-2 ">Product Category :</span>{item.category.name}</p>
                                    <div>
                                        <div className="hidden lg:block">
                                            <ReactStars
                                                edit={false}
                                                value={4}
                                                size={35}
                                            />
                                        </div>
                                        <div className="lg:hidden">
                                            <ReactStars
                                                edit={false}
                                                value={4}
                                                size={25}
                                            />
                                        </div>
                                    </div>
                                    <p className="lg:text-2xl fs-700 fw-600 lg:py-6 py-2">{item.price}</p>
                                    <div className="relative">
                                        <p className="fw-600 text-gray-600">Quantity</p>
                                        <div className="mt-6 flex fs-500 lg:fs-600">
                                            <input type="number" min={0} max={10} value={cartNum} onChange={(e) => setCartNum(e.target.value)} className="w-16 px-1 lg:px-2 rounded py-1 lg:py-2 border border-black" />
                                            <div className="">
                                                <button className="btn-primary ml-7 px-4 lg:px-8 " onClick={() => addItemToCart(item, cartNum)}>Add To Cart</button>
                                                {itemAdded && (
                                                    <div className="absolute lg:fs-400 fs-300 fw-600 px-2 text-center w-40 border lg:-right-3/4 lg:bottom-0 -bottom-3/4 py-1 bg-green-600 rounded text-gray-100 scale-ani">
                                                        <p>added to cart</p>
                                                        <p onClick={() => {navigate("/carts")}} className="underline cursor-pointer">Click to view</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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
                                    <Tab>Product Description</Tab>
                                    <Tab>Reviews</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="mt-6 lg:px-6 fs-400 lg:fs-600">
                                        {item.description}
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="pt-6 lg:px-6 fs-400 lg:fs-600">
                                        No reviews yet.
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
                            <SimilarProducts products={similarProducts} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}