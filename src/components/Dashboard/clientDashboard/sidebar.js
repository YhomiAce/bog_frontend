/* eslint-disable no-unused-vars */
import {  faBarsStaggered, faCartShopping, faBagShopping, faGear, faRightFromBracket, faComments, faHandshake,  faListOl,  faMailBulk,  faTableColumns, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCameraVideo,BsFillGrid1X2Fill, BxBoxArrowRight, BsColumnsGap, BsBell, BsGear, BsReceiptCutoff, BsBag , BsArrowRightSquare, BsEnvelope, BsBoxArrowRight } from "react-icons/bs";
import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import { faQuestionCircle, faBell,  faFileVideo, faMessage, faEnvelope, } from "@fortawesome/free-regular-svg-icons";

export default function Sidebar() {
  const dispatch = useDispatch();
    const [showSideBar, setShowSideBar] = useState(true);

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
                <div className="fixed z-20 bg-white fs-500 top-20 grid items-between w-6/12 lg:sidebar-w shadow min-h-screen pt-2 px-2">
                <div>
                  <NavLink
                      to=""
                      className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                      
                      onClick={unShow}
                    >
                      <BsFillGrid1X2Fill className="text-xl"/>
                             <p className="pl-3"> Dashboard</p>
              </NavLink>
              <NavLink
                      to="orders"
                      className="w-full flex items-center pl-2 py-2 fw-600 my-4"
                      activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                      onClick={unShow}
                    >
                      <BsReceiptCutoff className="text-xl" />
                              <p className="pl-3">Projects</p>
                    </NavLink>
                    <Link to="orders">
                      <div className="w-full flex items-center pl-2 my-4 py-2 fw-600 hover:bg-primary hover:text-white hover:rounded">
                              <BsBag className="text-lg" />
                              <p className="pl-3">Orders</p>
                      </div>
                    </Link>
                    <Link to="products">
                      <div className="w-full flex pl-2 items-center my-4 py-2 fw-600 hover:bg-primary hover:text-white hover:rounded">
                              <BsEnvelope className="text-lg" />
                              <p className="pl-3">Inbox</p>
                      </div>
                    </Link>
              <Link to="meetings">
              <div className="w-full py-2 flex items-center my-4 fw-600 pl-2 hover:bg-primary hover:text-white hover:rounded">
                        <BsCameraVideo className="text-xl "/>
                        <p className="pl-3">Meetings</p>
                    </div>
              </Link>
              <Link to="notify">
              <div className="w-full py-2 flex items-center pl-2 my-4 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <BsBell className="text-xl"/>
                        <p className="pl-3">Notification</p>
                    </div>
              </Link>
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
                        <BsGear className="text-xl"/>
                        <p className="pl-3">Settings</p>
                    </div>
              </Link>
              <Link to="signOut">
                <div 
                  style={sideBarStyle.cursorStyle}
                  onClick={()=>dispatch(logout())}
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