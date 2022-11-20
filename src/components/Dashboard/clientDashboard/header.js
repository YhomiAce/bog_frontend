import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
    Avatar, Menu, MenuHandler, MenuItem, MenuList, Button,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai"
import { logout } from '../../../redux/actions/authAction';

export default function Header() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const [notifyDown, setNotifyDown] = useState(false)


    function ShowNotify() {
        setNotifyDown(current => !current)
    }
    const getUserType = (type) => {
        switch (type) {
            case "admin":
                return "Super Admin"
            case "professional":
                return "Service Partner"
            case "vendor":
                return "Product Partner"
            case "private_client":
                return "Private Client"
            case "corporate_client":
                return "Corporate Client"
            default: return ""
        }
    }

    


    return (
        <div className="fixed w-full z-50 bg-gray-100">
            <div className="flex w-full bg-white justify-between lg:head-grid">
                <div className="bg-white py-3  text-center">
                    <Link to="/"><img src={require('./images/logo.png')} alt="boglogo" className="w-24 xl:w-32 ml-3 md:ml-6" /></Link>
                </div>
                <div className="lg:shadow bg-white py-4 px-5 flex lg:justify-between justify-end  items-center">

                    <div className="ml-10 hidden lg:flex items-center w-6/12">
                        {/* <FontAwesomeIcon icon={faBarsStaggered} size="2x" className="text-2xl lg:ml-4 cursor-pointer" onClick={sidebarReduce}/> */}
                        <p className="ml-5 fw-700 hidden lg:block">{ auth?.user ? getUserType(auth?.user?.userType) : ""} Dasboard</p>
                        
                    </div>
                    <div className="flex items-center w-full">
                        <div class="mr-6 relative mx-auto text-gray-600 hidden lg:block">
                            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                type="search" name="search" placeholder="Search" />
                            <button type="submit" class="absolute bg-primary right-0 top-0 py-2 px-4 rounded-r-lg">
                                <FontAwesomeIcon icon={faSearch} className="text-white" />
                            </button>
                        </div>
                        <div>
                            <p className="bg-transparent border-0 shadow-none hover:shadow-none  text-black px-1 ml-2"><Link to="switch" className="flex text-center"><p className="fs-500 text-center"><p className="text-primary"><AiOutlineUserSwitch/></p><p className="fw-500 text-primary">Switch</p></p></Link></p>
                        </div>
                        <div className="relative mx-3">
                            <div onClick={ShowNotify} className="bg-gray-100 px-2 rounded-sm py-1">
                                <FontAwesomeIcon icon={faBell} className="lg:text-xl  text-primary" />
                                <p className="absolute -top-2 left-3/4 border circle px-1 text-white text-xs bg-primary">6</p>
                            </div>
                            {notifyDown && (
                                <div className="absolute bg-white rounded shadow pb-5 w-68 lg:w-72 text-start fs-400 lg:-left-64 -left-56 top-12" onClick={ShowNotify}>
                                    <p className="mb-3 text-white bg-primary py-2 pl-3 text-lg fw-600">Notifications</p>
                                    <p className="my-3 flex">
                                        <div>
                                            <img src={require("./images/profile.png")} className="mx-3 w-9" alt="Notify" />
                                        </div>
                                        <div>
                                            <p>New Product is added to Store</p>
                                            <p className="text-gray-500 text-xs">just now</p>
                                        </div>
                                    </p>
                                    <p className="my-5 flex">
                                        <div>
                                            <img src={require("./images/profile.png")} className="mx-3 w-9" alt="Notify" />
                                        </div>
                                        <div>
                                            <p>Top deals available</p>
                                            <p className="text-gray-500 text-xs">just now</p>
                                        </div>
                                    </p>
                                    <p className="my-5 flex">
                                        <div>
                                            <img src={require("./images/profile.png")} className="mx-3 w-9" alt="Notify" />
                                        </div>
                                        <div>
                                            <p>New Plumber alert</p>
                                            <p className="text-gray-500 text-xs">just now</p>
                                        </div>
                                    </p>
                                    <Link to="notify"><p className="text-center hover:text-orange-500">View All</p></Link>
                                </div>
                            )}
                        </div>
                        <div className="ml-5">
                            <Menu placement="bottom-end"
                            >
                                <MenuHandler>
                                    <Button className="p-0">
                                        <Avatar src={require('./images/pic1.jpg')} alt="profilelogo" />
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem>Sevices</MenuItem>
                                    <MenuItem>Chat</MenuItem>
                                    <MenuItem>Products</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                    <MenuItem  onClick={()=> dispatch(logout())}>Sign Out</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}