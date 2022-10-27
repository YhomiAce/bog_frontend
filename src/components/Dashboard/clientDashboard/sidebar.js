/* eslint-disable no-unused-vars */
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsCameraVideo, BsFillGrid1X2Fill, BsBell, BsGear, BsReceiptCutoff, BsBag, BsEnvelope, BsBoxArrowRight } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/actions/authAction';
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import ClientSidebar from "../../layouts/sidebar/client";
import AdminSidebar from "../../layouts/sidebar/admin";

export default function Sidebar() {
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
  let sidebar = <ClientSidebar />;

  if (auth?.user?.userType === "private_client") {
    sidebar = <ClientSidebar />
  }else if(auth?.user?.userType === "admin"){
    sidebar = <AdminSidebar />
  }
  return sidebar;
}