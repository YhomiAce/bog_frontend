import { Button } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {

    const [menuShow, setMenuShow] = useState(false)

    const CloseMenu = () => {
        setMenuShow(false);
    }

    return (
        <div>
            <div className="box">
                <div className="justify-between items-center flex py-2 pb-3">
                    <div className="w-4/12 hidden lg:flex">
                        <ul className="flex w-full justify-between">
                            <li><BsList className="text-2xl"/></li>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Find a Service Partner</li>
                        </ul>
                    </div>
                    <div className="w-4/12 flex justify-center">
                        <Link to="/"><img src={require("../../assets/images/logo.png")} alt="logo" className="lg:w-40 "/></Link>
                    </div>
                    <div className="w-4/12 hidden lg:flex justify-end items-center">
                        <Link to="/login" className="text-primary">
                            <button >Login</button>
                        </Link>
                        <Link to="/signup" className="ml-7 px-6 bg-primary text-white py-2 rounded">
                            <button>Get Started</button>
                        </Link>
                    </div>
                    <div className="text-black lg:hidden">
                        <HiMenuAlt3 className="text-5xl fw-700" onClick={() => {setMenuShow(true)}}/>
                    </div>
                    
                </div>
            </div>
            {menuShow && (
                    <div className="w-full bg-op absolute lg:hidden z-40 top-0 min-h-screen"  onClick={CloseMenu}>
                        <div className="absolute lg:hidden w-10/12 bg-white px-6 z-40 top-0 min-h-screen">
                            <div className="flex justify-between pt-5">
                                <img src={require("../../assets/images/logo.png")} alt="logo" className="w-36" />
                                <MdOutlineCancel onClick={() => {setMenuShow(false)}}/>
                            </div>
                            <div className="mt-16">
                                <ul className="list-none">
                                    <li className="py-4"><Link to="/">Home</Link></li>
                                    <li className="py-4"><Link to="/">Shop</Link></li>
                                    <li className="py-4"><Link to="/">Service Partners</Link></li>
                                    <li>Our Blog</li>
                                    <li>Contact Us</li>
                                    <li>FAQs</li>
                                    <li className="pt-8" onClick={CloseMenu}>
                                        <Link to="/">
                                            <Button className="px-10">Login</Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}