import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillGrid1X2Fill, BsBell, BsGear, BsBag, BsEnvelope, BsBoxArrowRight, BsFillCaretDownFill } from "react-icons/bs";
import { CiFloppyDisk } from "react-icons/ci";
import { FiUsers, FiClock } from "react-icons/fi";
import { GrUserWorker } from  "react-icons/gr";
import { RiUserStarLine } from  "react-icons/ri";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";


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

    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl fixed top-6 z-50 menu-btn lg:hidden" onClick={() => {
                    setShowSideBar(current => !current);
                }} />
            </div>
            {showSideBar && (
                <div className="fixed z-20 bg-white lg:fs-500 fs-400 top-20 lg:grid items-between w-6/12 lg:sidebar-w shadow min-h-screen pt-2 px-2 ">
                    <div>
                        <NavLink
                            to=""
                            className="w-full flex items-center pl-2 py-2 fw-600 my-1 hover:bg-primary hover:text-white hover:rounded"

                            onClick={unShow}
                        >
                            <BsFillGrid1X2Fill className="text-xl" />
                            <p className="pl-3"> Dashboard</p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <CiFloppyDisk className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Products <span className="pl-5"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-1 light-bg text-primary"
                            onClick={unShow}
                        >
                            <BsBag className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Orders <span className="pl-5"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-1 light-bg text-primary"
                            onClick={unShow}
                        >
                            <BsEnvelope className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Emails <span className="pl-5"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <FiUsers className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Clients <span className="pl-5"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <RiUserStarLine className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Product Partners<span className="pl-2"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <GrUserWorker className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Service Partners <span className="pl-2"><BsFillCaretDownFill/></span></p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <BsBell className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">Notifications</p>
                        </NavLink>
                        <NavLink
                            to="orders"
                            className="w-full flex items-center pl-2 py-2 fw-600 my-2 hover:bg-primary hover:text-white hover:rounded"
                            activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                            onClick={unShow}
                        >
                            <FiClock className="text-xl" />
                            <p className="pl-3 flex justify-between items-center">History </p>
                        </NavLink>
                    </div>
                    <div>
                        <Link to="settings">
                            <div className="w-full py-2 fw-600 flex items-center my-2 rounded-lg">
                                <FontAwesomeIcon icon={faQuestionCircle} className="pr-3 pl-2 text-lg" />
                                Help
                            </div>
                        </Link>
                        <Link to="settings">
                            <div className="w-full py-2 pl-2 fw-600 flex items-center my-2 rounded-lg">
                                <BsGear className="text-xl" />
                                <p className="pl-3">Settings</p>
                            </div>
                        </Link>
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

export default AdminSidebar