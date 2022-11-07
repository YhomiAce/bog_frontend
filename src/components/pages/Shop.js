import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "./home-comp/Footer";
import Header from "./home-comp/Header";
import { Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react";
import {RiEqualizerLine} from 'react-icons/ri';
import AllProducts from "./shop/AllProducts";
import { useState } from "react";
import Granite from "./shop/Granite";
import Sand from "./shop/Sand";
import Cement from "./shop/Cement";
import Steel from "./shop/Steel";

export default function Shop() {

    const [all, setAll] = useState(true)
    const [granite, setGranite] = useState(false)
    const [sand, setSand] = useState(false)
    const [cement, setCement] = useState(false)
    const [steel, setSteel] = useState(false)

    function ShowAll() {
        setAll(true)
        setGranite(false)
        setSand(false)
        setCement(false)
        setSteel(false)
    }
    function ShowGranite() {
        setAll(false)
        setGranite(true)
        setSand(false)
        setCement(false)
        setSteel(false)
    }
    function ShowSand() {
        setAll(false)
        setGranite(false)
        setSand(true)
        setCement(false)
        setSteel(false)
    }
    function ShowCement() {
        setAll(false)
        setGranite(false)
        setSand(false)
        setCement(true)
        setSteel(false)
    }
    function ShowSteel() {
        setAll(false)
        setGranite(false)
        setSand(false)
        setCement(false)
        setSteel(true)
    }

    const activeState = {
        color: "white",
        backgroundColor: "#3F79AD",
        borderRadius: "5px",
        paddingLeft: "5px",
      }
    

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
                        <div>
                            <p className="text-2xl fw-600 mb-5">Search Products</p>
                            <div className="lg:flex items-center justify-between">
                                <div class=" relative border lg:w-4/12 border-gray-500 rounded  text-gray-600 hidden lg:block">
                                    <input class=" lg:w-11/12 bg-white h-10 px-2  rounded text-sm focus:outline-none"
                                    type="search" name="search" placeholder="Search Blog Post"/>
                                    <button type="submit" class="absolute bg-tertiary right-0 top-0 py-2 px-4 rounded-r">
                                        <FontAwesomeIcon icon={faSearch} className="text-white"  />
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
                                                <Button variant="outlined" className="border-0 bg-light rounded text-black flex items-center">Filter <span className="pl-6"><RiEqualizerLine/></span> </Button>
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
                                    <li className="py-2 cursor-pointer" style={granite ? activeState : undefined} onClick={ShowGranite} >Granite  (150)</li>
                                    <li className="py-2 cursor-pointer" style={cement ? activeState : undefined} onClick={ShowCement}>Cement  (150)</li>
                                    <li className="py-2 cursor-pointer" style={steel ? activeState : undefined} onClick={ShowSteel}>Steel  (150)</li>
                                    <li className="py-2 cursor-pointer" style={sand ? activeState : undefined} onClick={ShowSand}>Sand  (150)</li>
                                </ul>
                            </div>
                            <div className="w-9/12 pl-3 lg:pl-0 lg:w-8/12">
                                {all && (
                                    <AllProducts/>
                                )}
                                {granite && (
                                    <Granite/>
                                )}
                                {sand && (
                                    <Sand/>
                                )}
                                {cement && (
                                    <Cement/>
                                )}
                                {steel && (
                                    <Steel/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
            </div>
        </div>
    )
}