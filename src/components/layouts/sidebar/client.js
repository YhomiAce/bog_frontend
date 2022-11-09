import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCameraVideo, BsFillGrid1X2Fill, BsBell, BsGear, BsReceiptCutoff, BsBag, BsEnvelope, BsBoxArrowRight } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";


const ClientSidebar = () => {
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
    const activeStyle = {
        backgroundColor: "rgba(234, 245, 255, 1)",
        color: "rgba(63, 121, 173, 1)",
        borderRight: "6px solid rgba(63, 121, 173, 1)"
    };

    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl fixed top-6 z-50 menu-btn lg:hidden" onClick={() => {
                    setShowSideBar(current => !current);
                }} />
            </div>
            {showSideBar && (
                <div className="fixed z-20 bg-white fs-500 top-20 grid items-between w-6/12 lg:sidebar-w shadow min-h-screen pt-2 px-2">
                    <div>
                        <NavLink
                            to=""
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"

                            onClick={unShow}
                        >
                            <BsFillGrid1X2Fill className="text-xl" />
                            <p className="pl-3"> Dashboard</p>
                        </NavLink>
                        <NavLink
                            to="projects"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                        >
                            <BsReceiptCutoff className="text-xl" />
                            <p className="pl-3">Projects</p>
                        </NavLink>
                        <NavLink 
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            >
                                <BsBag className="text-lg" />
                                <p className="pl-3">Orders</p>
                        </NavLink>
                        <NavLink 
                            to="inbox"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsEnvelope className="text-lg" />
                                <p className="pl-3">Inbox</p>
                        </NavLink>
                        <NavLink 
                            to="meetings"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsCameraVideo className="text-xl " />
                                <p className="pl-3">Meetings</p>
                        </NavLink>
                        <NavLink 
                            to="notify"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsBell className="text-xl" />
                                <p className="pl-3">Notification</p>
                        </NavLink>
                        <NavLink 
                            to="transact"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsBell className="text-xl" />
                                <p className="pl-3">Transactions</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink 
                            to="help"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <FontAwesomeIcon icon={faQuestionCircle} className="pr-3  text-lg" />
                                Help
                        </NavLink>
                        <NavLink 
                            to="settings"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                            style={({ isActive }) => (isActive ? activeStyle : undefined)}
                            onClick={unShow}
                            >
                                <BsGear className="text-xl" />
                                <p className="pl-3">Settings</p>
                        </NavLink>
                        <Link>
                            <div
                                style={sideBarStyle.cursorStyle}
                                onClick={() => dispatch(logout())}
                                className="w-full py-2 fw-600 pl-2 flex my-2  rounded-lg">
                                <BsBoxArrowRight className="text-xl" />
                                <p className="pl-3">Sign Out</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>

    )
}

export default ClientSidebar