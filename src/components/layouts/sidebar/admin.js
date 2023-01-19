import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillGrid1X2Fill, BsBell, BsGear, BsBag, BsBoxArrowRight, BsFillCaretDownFill, BsCameraVideo, BsReceiptCutoff } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GrBlog, GrUserWorker } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Adminlogout } from '../../../redux/actions/authAction';
import { MdOutlineEmail, MdOutlineReviews } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { HiOutlineLogout } from "react-icons/hi";


const AdminSidebar = () => {
    const dispatch = useDispatch();
    const [showSideBar, setShowSideBar] = useState(true);
    const auth = useSelector((state) => state.auth);
    console.log(auth.user);


    useEffect(() => {

        function handleResize() {
            if (window.innerWidth < 900) {
                setShowSideBar(false);
            } else {
                setShowSideBar(true);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);


    }, []);

    function unShow() {
        if (window.innerWidth < 900) {
            setShowSideBar(false);
        } else {
            setShowSideBar(true);
        }
    }
    const sideBarStyle = {
        cursorStyle: {
            cursor: "pointer"
        }
    }

    const [orderDrop, setOrderDrop] = useState(false);
    // const [emailDrop, setEmailDrop] = useState(false);
    const [userDrop, setUserDrop] = useState(false);
    const [productDrop, setProductDrop] = useState(false);
    const [projectDrop, setProjectDrop] = useState(false);
    const [settingsDrop, setSettingsDrop] = useState(false);
    const [signOut, setSignOut] = useState(false)

    function CloseAll() {
        // setSettingsDrop(false)
        setOrderDrop(false)
        setProductDrop(false)
        setUserDrop(false)
        setProjectDrop(false)
    }
    function CloseModal() {
        setSignOut(false)
    }

    const activeStyle = {
        backgroundColor: "rgba(234, 245, 255, 1)",
        color: "rgba(63, 121, 173, 1)",
        borderRight: "6px solid rgba(63, 121, 173, 1)"
    };
    const activeStyles = {
        backgroundColor: "rgba(234, 245, 255, 1)",
        color: "rgba(63, 121, 173, 1)",
    };

    return (
        <div className="overflow-y-scroll">
            <div>
                <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl fixed top-6 z-50 menu-btn lg:hidden" onClick={() => {
                    setShowSideBar(current => !current);
                }} />
            </div>
            {showSideBar && (
                <div className="fixed lg:pb-24 overflow-y-scroll z-20 bg-white fs-400 top-20 w-6/12 h-full lg:sidebar-w shadow pt-2 px-2" onClick={CloseAll}>
                    <div className="">
                        <NavLink
                            to=""
                            className="w-full flex items-center pl-2 py-2 fw-600 my-1 rounded"

                            onClick={unShow}
                        >
                            <BsFillGrid1X2Fill className="text-lg" />
                            <p className="pl-3"> Dashboard</p>
                        </NavLink>
                        <div
                            
                            className="w-full items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                        >
                            <div className="flex" onClick={e => e.stopPropagation()}>
                                <BsReceiptCutoff className="text-xl" />
                                <div className="flex items-center cursor-pointer" onClick={() => {setProductDrop(!productDrop);setProjectDrop(false);setOrderDrop(false);setUserDrop(false);setSettingsDrop(false)}}>
                                    <p className="pl-3 pr-5">Products</p>
                                    <BsFillCaretDownFill className="text-black"/>
                                </div>
                            </div>
                            {productDrop && (
                                <div className="lg:ml-9 ml-4 fs-400 pt-2">
                                    <NavLink
                                        to="productsadmin"
                                        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                        >
                                        <p className="py-2">All Products</p>
                                    </NavLink>
                                    <NavLink
                                        to="productscategory"
                                        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                        >
                                        <p className="pt-2">Categories</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <div
                            
                            className="w-full items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                        >
                            <div className="flex" onClick={e => e.stopPropagation()}>
                                <BsBag className="text-xl" />
                                <div className="flex items-center cursor-pointer" onClick={() => {setOrderDrop(!orderDrop);setProjectDrop(false);setProductDrop(false);setUserDrop(false);setSettingsDrop(false)}}>
                                    <p className="pl-3 pr-5">Orders</p>
                                    <BsFillCaretDownFill className="text-black"/>
                                </div>
                            </div>
                            {orderDrop && (
                                <div className="lg:ml-9 ml-4 fs-400 pt-2">
                                    <NavLink
                                        to="ordersadmin"
                                        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                        >
                                        <p className="py-2">All Orders</p>
                                    </NavLink>
                                     
                                </div>
                            )}
                        </div>
                        <div
                            
                            className="w-full items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                        >
                            <div className="flex" onClick={e => e.stopPropagation()}>
                                <GrUserWorker className="text-xl" />
                                <div className="flex items-center cursor-pointer" onClick={() => {setProjectDrop(!projectDrop);setProductDrop(false);setOrderDrop(false);setUserDrop(false);setSettingsDrop(false)}}>
                                    <p className="pl-3 pr-5">Projects</p>
                                    <BsFillCaretDownFill className="text-black"/>
                                </div>
                            </div>
                            {projectDrop && (
                                <div className="lg:ml-9 ml-4 fs-400 pt-2">
                                    <NavLink
                                        to="projectsadmin"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">All Projects</p>
                                    </NavLink>
                                    <NavLink
                                        to="projectrequest"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Project Requests</p>
                                    </NavLink>
                                    <NavLink
                                        to="servicecategory"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        >
                                        <p className="py-2">Service Category</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <div
                            
                            className="w-full items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                        >
                            <div className="flex" onClick={e => e.stopPropagation()}>
                                <FiUsers className="text-xl" />
                                <div className="flex items-center cursor-pointer" onClick={() => {setUserDrop(!userDrop);setProjectDrop(false);setProductDrop(false);setOrderDrop(false);setSettingsDrop(false)}}>
                                    <p className="pl-3 pr-5">Users</p>
                                    <BsFillCaretDownFill className="text-black"/>
                                </div>
                            </div>
                            {userDrop && (
                                <div className="lg:pl-8 pl-4 fs-400 pt-2" onClick={e => e.stopPropagation()}>
                                    <NavLink
                                        to="client"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={unShow}
                                        >
                                        <p className="py-1">Clients</p>
                                    </NavLink>
                                    <NavLink
                                        to="productpartner"
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={unShow}
                                        >
                                        <p className="py-2">Product Partners</p>
                                    </NavLink>
                                    <NavLink
                                        to="servicepartner"
                                        className=""
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={unShow}
                                        >
                                        <p className="py-1 pb-2">Service Partners</p>
                                    </NavLink>
                                    <NavLink
                                        to="sub-admin"
                                        className=""
                                        style={({ isActive }) => (isActive ? activeStyles : undefined)}
                                        onClick={unShow}
                                        >
                                        <p className="py-1">Sub Admins</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <NavLink 
                            to="blog"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <GrBlog className="text-lg" />
                                <p className="pl-3">Blog</p>
                        </NavLink>
                        <NavLink 
                            to="review"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <MdOutlineReviews className="text-lg" />
                                <p className="pl-3">Testimonials</p>
                        </NavLink>
                        <NavLink 
                            to="announcement"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            onClick={unShow}
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <MdOutlineEmail className="text-lg" />
                                <p className="pl-3">Messages</p>
                        </NavLink>
                        <NavLink 
                            to="admin-meetings"
                            onClick={unShow}
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                            <BsCameraVideo className="text-xl " />
                            <p className="pl-3">Meetings</p>
                        </NavLink>
                        <NavLink 
                            to="notification"
                            onClick={unShow}
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                            <BsBell className="text-xl" />
                            <p className="pl-3">Notification</p>
                            
                        </NavLink>
                        <NavLink 
                            to="transactions"
                            onClick={unShow}
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                            <VscHistory className="text-xl" />
                            <p className="pl-3">Transactions</p>
                        </NavLink>
                    </div>
                    <div className="w-full items-center fw-600">
                            <div className="w-full py-2 pl-2 fw-600 cursor-pointer flex items-center my-2 rounded-lg" onClick={() => {setSettingsDrop(!settingsDrop); setUserDrop(false); setProjectDrop(false); setProductDrop(false); setOrderDrop(false); }}>
                                <BsGear className="text-lg" />
                                <p className="pl-3 pr-5">Settings</p>
                                <BsFillCaretDownFill className="text-black" />
                                </div>
                            <div>
                                {settingsDrop && (
                                    <div className="lg:pl-8 pl-4 fs-400 pt-1" onClick={e => e.stopPropagation()}>
                                        <NavLink
                                            to="settings"
                                            onClick={unShow}
                                        >
                                            <p className="pb-2">Profile Settings</p>
                                        </NavLink>
                                        <NavLink
                                            to="smart-calc"
                                            onClick={unShow}
                                        >
                                            <p className="py-1">Smart Calculator</p>
                                        </NavLink>
                                    </div>
                                )
                                }
                            </div>
                    </div>
                    
                    <div>
                        <Link>
                            <div
                                style={sideBarStyle.cursorStyle}
                                onClick={ () => setSignOut(true)}
                                className="w-full py-2 fw-600 pl-2 flex my-2  rounded-lg">
                                <BsBoxArrowRight className="text-lg" />
                                <p className="pl-3">Sign Out</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
            {signOut && (
                <div className="fixed font-primary left-0 top-0 w-full h-screen bg-op center-item z-40" onClick={CloseModal}>
                    <div className="bg-white lg:w-5/12 rounded-md  overscroll-none  w-11/12 pt-8 shadow fw-500 scale-ani px-5" onClick={e => e.stopPropagation()}>
                        <div className="lg:px-6">
                            <div className="flex text-xl fw-600">
                                <p className="pr-4 text-red-600"><HiOutlineLogout/></p>
                                <p>Sign Out ?</p>
                            </div>
                            <p>Are you sure you want to sign out ?</p>
                        </div>
                        <div className="text-end px-4 my-5">
                            <button className="btn py-1 border-pri text-primary" onClick={CloseModal}>No</button>
                            <button className="btn py-1 ml-5 border border-red-600 text-red-600" onClick={() => dispatch(Adminlogout())}>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default AdminSidebar