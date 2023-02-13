/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { useParams } from "react-router-dom";
import { SimilarProducts } from "./shop/SimilarProduct";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { addToCart } from '../../redux/actions/cartAction';
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from "react-redux";
import { ProductImage } from "./shop/ProductImg";
import { useNavigate } from "react-router-dom";
import "toasted-notes/src/styles.css";
import Spinner from "../layouts/Spinner";
import { getProducts } from '../../redux/actions/ProductAction';
import Axios from "../../config/config";
import { formatNumber } from "../../services/helper";
import { BsFillInfoCircleFill } from "react-icons/bs";


export default function ProductDetail() {

    const products = useSelector((state) => state.products.products);
    const [cartNum, setCartNum] = useState(1)
    const dispatch = useDispatch()
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        try {
            setLoading(true);
            const config = {
                headers: {
                    "Content-Type": "Application/json",
                    authorization: localStorage.getItem("auth_token"),
                },
            };
            const url = `/product/${itemId}`
            const res = await Axios.get(url,config);
            const data = res.data;
            setItem(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const navigate = useNavigate()
    const [itemAdded, setItemAdded] = useState(false)
    const [similarProducts, setSimilarProducts] = useState([]);

    const addItemToCart = (item, cartNum) => {
        dispatch(addToCart(item, cartNum));
        setItemAdded(true);
    }

    useEffect(() => {
        fetchProduct();
    }, [itemId])
    useEffect(() => {
        dispatch(getProducts())
        if (item != null) {
            const similar = products.filter(where => where.category.id === item.category.id).filter(prod => prod.id != item.id);
            setSimilarProducts(similar)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item, !loading])

    useEffect(() => {
        if (itemAdded) {
            setTimeout(function () {
                setItemAdded(false);
            }, 4000);
        } // eslint-disable-next-line
    }, [addItemToCart]);

    if (loading || !item) {
        return <center>
            <Spinner />
        </center>
    }


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
                        <div className=" w-full">
                            <div className="lg:flex items-center justify-between lg:pt-10">
                                <div className="lg:w-6/12 bg-light shadow-md p-4">
                                    {/* <img src="https://www.mobismea.com/upload/iblock/2a0/2f5hleoupzrnz9o3b8elnbv82hxfh4ld/No%20Product%20Image%20Available.png" alt="product" className="w-full lg:h-72" /> */}

                                    <ProductImage item={item} />
                                </div>
                                <div className="lg:pl-8 mt-4 lg:w-6/12 lg:mt-0 relative">
                                    <p className="lg:text-3xl text-lg fw-600">{item.name}</p>
                                    <p className="fw-600 py-2 text-gray-600"><span className="pr-2 ">Product Category :</span>{item.category.name}</p>
                                    <div className="flex items-center">
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
                                        <p className="text-gray-500 pl-3">(5 Reviews)</p>
                                    </div>
                                    <p className="lg:text-2xl fs-700 fw-600 py-2 text-secondary">NGN {formatNumber(item.price)}</p>
                                    <div className="relative flex">
                                        <div className="mt-2 flex items-end fs-500 lg:fs-600">
                                            <div>
                                                <p className="fw-600 text-gray-600 mb-2">Quantity</p>
                                                <input type="number" min={0} max={10} value={cartNum} onChange={(e) => setCartNum(e.target.value)} className="w-16 px-1 lg:px-2 rounded py-1 lg:py-2 border border-black" />
                                            </div>
                                            <div className="">
                                                <button className="btn-primary ml-7 px-4 lg:px-8 " onClick={() => addItemToCart(item, cartNum)}>Add To Cart</button>
                                                {itemAdded && (
                                                    <div className="absolute lg:fs-400 fs-300 fw-600 px-2 text-center w-40 border lg:right-0 xl:right-1/4 lg:bottom-0 -bottom-3/4 py-1 bg-secondary rounded text-gray-100 scale-ani">
                                                        <p>Added to Cart</p>
                                                        <p onClick={() => { navigate("/carts") }} className="underline cursor-pointer">Click to view</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mt-4 lg:mt-6 flex fw-500 text-primary fs-300 lg:fs-500"><span className="text-lg lg:text-xl pr-2 mt-1"><BsFillInfoCircleFill/></span><span>Delivery is effecient and fast to every part of Nigeria. (same day delivery is location based)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
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
                            {
                                similarProducts.length > 0 ?
                                    <>
                                        <p className="fw-600 lg:text-2xl py-6">Similar Products</p>
                                        <SimilarProducts products={similarProducts} />
                                    </> : null
                            }

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}