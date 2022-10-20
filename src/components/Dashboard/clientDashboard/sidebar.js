/* eslint-disable no-unused-vars */
import {  faBarsStaggered, faCartShopping, faBagShopping, faGear, faRightFromBracket, faComments, faHandshake,  faListOl,  faMailBulk,  faTableColumns, faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <FontAwesomeIcon icon={faBarsStaggered} className="text-primary text-2xl fixed top-6 menu-btn lg:hidden" onClick={() => {
            setShowSideBar(current => !current);
          }} />
            </div>
            {showSideBar && (
                <div className="fixed bg-white fs-500 top-20 grid items-between w-6/12 lg:sidebar-w shadow min-h-screen pt-2 px-2">
                <div>
                  <NavLink
                      to=""
                      className="w-full flex items-center py-2 fw-600 my-4"
                      
                      onClick={unShow}
                    >
                      <FontAwesomeIcon icon={faTableColumns} className="pr-3 pl-2 text-lg text-white" />
                              Dashboard
              </NavLink>
              <NavLink
                      to="orders"
                      className="w-full flex items-center py-2 fw-600 my-4"
                      activeClassName="w-full flex items-center py-2 fw-600 my-4 light-bg text-primary"
                      onClick={unShow}
                    >
                      <FontAwesomeIcon icon={faListOl} className="pr-3 pl-2 text-white text-lg" />
                              projects
                    </NavLink>
                    <Link to="orders">
                      <div className="w-full flex items-center my-4 py-2 fw-600 hover:bg-primary hover:text-white hover:rounded">
                              <FontAwesomeIcon icon={faBagShopping} className="pr-3 pl-2 text-white text-lg" />
                              Orders
                      </div>
                    </Link>
                    <Link to="products">
                      <div className="w-full flex items-center my-4 py-2 fw-600 hover:bg-primary hover:text-white hover:rounded">
                              <FontAwesomeIcon icon={faEnvelope} className="pr-3 pl-2 text-lg" />
                              Inbox
                      </div>
                    </Link>
              <Link to="meetings">
              <div className="w-full py-2 flex items-center my-4 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faVideoCamera} className="pr-3 pl-2 text-white text-lg" />
                        Meetings
                    </div>
              </Link>
              <Link to="notify">
              <div className="w-full py-2 flex items-center my-4 fw-600 hover:bg-primary hover:text-white hover:rounded">
                        <FontAwesomeIcon icon={faBell} className="pr-3 pl-2 text-lg" />
                        Notification
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
              <div className="w-full py-2 fw-600 flex items-center my-2 rounded-lg">
                        <FontAwesomeIcon icon={faGear} className="pr-3 pl-2 text-lg" />
                        Settings
                    </div>
              </Link>
              <Link to="signOut">
                <div 
                  style={sideBarStyle.cursorStyle}
                  onClick={()=>dispatch(logout())}
              className="w-full py-2 fw-600 flex my-2  rounded-lg">
                        <FontAwesomeIcon icon={faRightFromBracket} className="pr-3 pl-2 text-lg" />
                        Sign Out
                    </div>
              </Link>
                </div>
           </div>
            )}
        </div>
        
        )
  }