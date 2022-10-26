import React from "react";
import { FaLocationArrow  } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){

    return (
        <div>
            <div className="pt-24 pb-12 font-primary bg-primary text-white">
                <div className="box">
                    <div className="lg:flex justify-between">
                        <div className="lg:w-3/12">
                            <img src={require("../../assets/images/BOOG 1.png")} alt="whiteLogo" className="relative -top-6"/>
                        </div>
                        <div className="lg:w-2/12">
                            <p className="fw-600 mb-3">QUICK LINKS</p>
                            <ul>
                                <li className="py-1"><Link to="/">Home</Link></li>
                                <li className="py-1">About</li>
                                <li className="py-1">FAQS</li>
                                <li className="py-1">Contact Us</li>
                            </ul>
                        </div>
                        <div className="lg:w-2/12 mt-8 lg:mt-0">
                            <p className="fw-600 mb-3">SERVICES</p>
                            <ul>
                                <li className="py-1">Find A Service Provider</li>
                                <li className="py-1">Shop from Vendor</li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 mt-8 lg:mt-0">
                            <p className="fw-600 lg:mb-6 mb-3">STAY UPDATED</p>
                            <div className="flex border-2 ">
                                <input type="text" placeholder="Enter your emmail" className="w-10/12 px-2 text-black border-0" />
                                <div className="bg-secondary w-2/12 pl-3 py-2">
                                    <FaLocationArrow className="lg:text-xl"/>
                                </div>
                            </div>
                            <ul className="mt-4 flex">
                                <li><img src={require("../../assets/images/insta.png")} alt="insta" /></li>
                                <li className="pl-3"><img src={require("../../assets/images/twitter.png")} alt="twitter" /></li>
                                <li className="pl-3"><img src={require("../../assets/images/linkedn.png")} alt="linkedn" /></li>
                                <li className="pl-3"><img src={require("../../assets/images/facebook.png")} alt="facebook" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-6 bg-white h-0.5"></div>
                    <div className="lg:flex justify-between">
                        <div className="text-center">
                            Copyright &copy; {new Date().getFullYear()}{' '} BOG. All Rights Reserved
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <ul className="flex justify-center lg:text-end">
                                <li>Terms & Conditions</li>
                                <li className="pl-2">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}