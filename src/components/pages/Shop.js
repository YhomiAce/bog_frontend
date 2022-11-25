/* eslint-disable react-hooks/exhaustive-deps */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";
import { RiEqualizerLine } from 'react-icons/ri';
import AllProducts from "./shop/AllProducts";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProducts } from '../../redux/actions/ProductAction';
import CategoryList from "./shop/CategoryList";
import Spinner from '../layouts/Spinner';

export default function Shop() {
    const dispatch = useDispatch();
    const [all, setAll] = useState(true)
    const [show, setShow] = useState(false);
    const [active, setActive] = useState(null);
    const [productCategory, setProductCategory] = useState([]);
    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.products.categories);
    const loading = useSelector((state) => state.products.isLoading);

    function ShowAll() {
        setAll(true);
        setShow(false);
        setActive(null)
    }

    const activeState = {
        color: "white",
        backgroundColor: "#3F79AD",
        borderRadius: "5px",
        paddingLeft: "5px",
    }

    const showCategories = (catId) => {
        const categorys = products.filter(where => where.category.id === catId);
        setProductCategory(categorys)
        setShow(true);
        setAll(false);
        setActive(catId)
    }

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, []);

    // if (loading) {
    //     return <center>
    //         <Spinner />
    //     </center>
    // }

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
                        <div>
                            <p className="text-2xl fw-600 mb-5">Search Products</p>
                            <div className="lg:flex items-center justify-between">
                                <div class=" relative border lg:w-4/12 border-gray-500 rounded  text-gray-600 hidden lg:block">
                                    <input class=" lg:w-11/12 bg-white h-10 px-2  rounded text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Search Blog Post" />
                                    <button type="submit" class="absolute bg-tertiary right-0 top-0 py-2 px-4 rounded-r">
                                        <FontAwesomeIcon icon={faSearch} className="text-white" />
                                    </button>
                                </div>
                                <div className="lg:w-4/12 flex lg:justify-end">
                                    <div className="bg-gray-100 lg:w-5/12 lg:pr-4 pr-2 rounded-md ring-1">
                                        <select className="py-2 lg:px-6 rounded-md  bg-gray-100 focus:outline-none lg:fw-600 fs-500 pl-2 " onClick={ShowAll}>
                                            <option >All Products</option>
                                            <option>New Arrivals</option>
                                            <option>Top Picks</option>
                                        </select>
                                    </div>
                                    <div className="ml-6">
                                        <Menu placement="bottom-end">
                                            <MenuHandler>
                                                <Button variant="outlined" className="border-0 bg-light rounded text-black flex items-center">Filter <span className="pl-6"><RiEqualizerLine /></span> </Button>
                                            </MenuHandler>
                                            <MenuList>
                                                <MenuItem>Newest Arrivals</MenuItem>
                                                <MenuItem>Customer Rating</MenuItem>
                                                <MenuItem>Popularity</MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-36">
                    <div className="box">
                        <div className="flex justify-between">
                            <div className="bg-light lg:pl-12 pl-2  px-4 pt-6 pb-48 w-3/12 rounded">
                                <p className="fw-600 lg:text-xl fs-300 md:fs-400 pt-4">Categories</p>
                                <p className="border-2 border-black w-4/12 mb-4 bg-black"></p>
                                <ul className="md:fs-400 fw-500 fs-300 lg:fs-600">
                                    <li className="py-2 cursor-pointer" style={all ? activeState : undefined} onClick={ShowAll} >All Products</li>
                                    <div>
                                        {categories.filter(where => where.totalProducts !== 0).map(category => {
                                            return (
                                                <CategoryList
                                                    key={category.id}
                                                    category={category}
                                                    clickHandler={showCategories}
                                                    active={active}
                                                    activeState={activeState}
                                                />
                                            )
                                        })}
                                    </div>

                                </ul>
                            </div>
                            <div className="w-9/12 pl-3 lg:pl-0 lg:w-8/12">

                                  {
                                    loading ? <Spinner /> : <AllProducts products={show ? productCategory : products} />
                                  }      
                                

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}