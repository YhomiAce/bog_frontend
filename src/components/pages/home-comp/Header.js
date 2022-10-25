import React from "react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div>
            <div className="box">
                <div className="justify-between items-center flex py-2 pb-3">
                    <div className="w-4/12 hidden lg:flex">
                        <ul className="flex w-full justify-between">
                            <li><BsList className="text-2xl"/></li>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Find Service Provider</li>
                        </ul>
                    </div>
                    <div className="w-4/12 flex justify-center">
                        <img src={require("../../assets/images/logo.png")} alt="logo" className="lg:w-40 "/>
                    </div>
                    <div className="w-4/12 hidden lg:flex justify-end items-center">
                        <Link to="/login" className="text-primary">
                            <button >Login</button>
                        </Link>
                        <Link to="/signup" className="ml-7 px-6 bg-primary text-white py-2 rounded">
                            <button>Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}