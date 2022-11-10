/* eslint-disable no-unused-vars */
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Avatar, CardBody, Progress } from "@material-tailwind/react";
import ChartLine from "../../assets/UsersChart";
import ProjectChart from "../../assets/ProjectChart";
import PclientDashboard from "../../../layouts/DashboardHome/pclient";
import AdminDashboard from "../../../layouts/DashboardHome/admin";
import ProductDashboard from "../../../layouts/DashboardHome/pparttner";
import ServiceDashboard from "../../../layouts/DashboardHome/spartner";

export default function Dashboard() {

  const auth = useSelector((state) => state.auth);

  let dashboard = <PclientDashboard />;

  if (auth?.user?.userType === "private_client") {
    dashboard = <PclientDashboard />
  }else if(auth?.user?.userType === "vendor"){
    dashboard = <ProductDashboard />
  }else if(auth?.user?.userType === "professional"){
    dashboard = <ServiceDashboard />
  }else if(auth?.user?.userType === "admin"){
    dashboard = <AdminDashboard />
  }
  return dashboard;
}
