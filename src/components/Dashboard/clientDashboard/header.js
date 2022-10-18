import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Header() {
    

    return (
        <div className="fixed w-full bg-white">
            <div className="flex px-2 py-4 shadow">
                <div className="lg:w-2/12 md:3/12 w-4/12 text-center">
                    <img src={require('./images/logo.png')} alt="boglogo" className="w-24 lg:w-32 md:ml-6" />
                </div>
                <div className="lg:w-10/12 md:w-10/12 w-8/12  flex lg:justify-between justify-end  items-center">
                    <div className=" hidden lg:flex">
                        <FontAwesomeIcon icon={faBars} size="2x" className="text-2xl lg:ml-4"  />
                        <p className="ml-10 fw-700 hidden lg:block">Client Dasboard</p>
                    </div>
                    <div className="flex items-center">
                        <div className="relative">
                            <FontAwesomeIcon icon={faBell} className="lg:text-2xl text-xl text-primary" />
                            <p className="absolute -top-2 left-3 border circle px-1 text-white text-xs bg-secondary">6</p>
                        </div>
                        <div className="px-4 pl-6">
                            <img src={require('./images/profile.png')} alt="profilelogo" className="lg:w-12 w-12"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        )
}