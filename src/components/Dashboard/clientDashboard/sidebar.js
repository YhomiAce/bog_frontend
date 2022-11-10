/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ClientSidebar from "../../layouts/sidebar/client";
import AdminSidebar from "../../layouts/sidebar/admin";
import ProductSidebar from "../../layouts/sidebar/product";
import ServiceSidebar from "../../layouts/sidebar/service";

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
  }else if(auth?.user?.userType === "vendor"){
    sidebar = <ProductSidebar />
  }else if(auth?.user?.userType === "professional"){
    sidebar = <ServiceSidebar />
  }else if(auth?.user?.userType === "admin"){
    sidebar = <AdminSidebar />
  }
  return sidebar;
}