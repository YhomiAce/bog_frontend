import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../../Routes/ProtectedRoute";
import Header from "./header";
import Dashboard from "./pages/Dasboard";
import Meetings from "./pages/Meetings";
import Notify from "./pages/Notify";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Sidebar from "./sidebar";
import Settings from "./pages/Settings"
import Transactions from "./pages/Transactions";
import Projects from "./pages/Project";
import Cart from "./pages/Cart";
import { AllProject } from "./pages/allprojects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SwitchAccount } from "./pages/SwitchAccount";
import Inbox from "./pages/inbox";
import Ppartners from "./pages/Ppartners";
import Spartners from "./pages/Spartner";
import Clients from "./pages/Clients";
import ProductsAdmin from "./pages/ProductsAdmin";
import ProductDetailsAdmin from "./pages/ProductDetails";
import ProductsCategory from "./pages/ProductCat";
import OrdersAdmin from "./pages/OrdersAdmin";
import KycForm from "./pages/KycForm";
import OrderDetails from "./pages/OrderDetails";
import UserDetails from "./pages/UserDetail";
import Review from "./pages/Reviews";
import ProjectsAdmin from "./pages/ProjectsAdmin";
import ProjectDetails from "./pages/ProjectDetailsAdmin";
import ProjectRequest from "./pages/ProjectRequest";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/CreatePost";
import EditPost from "./pages/Blog/EditPost";
import Email from "./pages/Email";
import CreateEmail from "./pages/Email/CreateEmail";
import OrderDetailsClient from "./pages/OrderDetails Client";
import ProjectDetailsClient from "./pages/ProjectDetailsClient";
import OrderRequest from "./pages/OrderRequest";
import UserOrderDetail from "./pages/UserOrderDetail";
import KycAlert from "../assets/KycAlert";
import { Subscription } from "./pages/Subscribtion";
import ProjectFile from "./pages/projects/ProjectFile";
import ProjectCategory from "./pages/ProjectCat";
import Sadmins from "./pages/SAdmins";
import { ViewBlog } from "./pages/Blog/ViewBlog";
import { Testimonial } from "./pages/Testimonial";
import SubAdminDetails from "./pages/SubAdminDetails";
import AdminTransactions from "./pages/AdminTransactions";

export default function ClientDashboard() {

    const navigate = useNavigate()
    const [sidebarReduce, setSidebarReduce] = useState(false)


    return (
        <div>
            <div className="font-primary">
                <Header />
                <div className="" style={{ width: sidebarReduce ? "100px" : "200px" }}>
                    <Sidebar />
                </div>
                <div className="fixed top-0 hidden lg:block sub-menu z-50">
                    <FontAwesomeIcon icon={faBarsStaggered} size="2x" className="text-2xl lg:ml-4 cursor-pointer" onClick={() => setSidebarReduce(!sidebarReduce)} />
                </div>
                <div
                    style={{
                        width: sidebarReduce ? "calc(100% - 45px)" : "",
                        zIndex: sidebarReduce ? "45" : ""
                    }}
                    className="lg:main-p pt-21 home-bg pb-10 relative">
                    <KycAlert />
                    <Routes element={<ProtectedRoute />}>
                        <Route path="" element={<Dashboard />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="order-request" element={<OrderRequest />} />
                        <Route path="products" element={<Products />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="client" element={<Clients />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="createpost" element={<BlogPost />} />
                        <Route path="viewpost/:postId" element={<ViewBlog />} />
                        <Route path="editpost/:postId" element={<EditPost />} />
                        <Route path="email" element={<Email />} />
                        <Route path="createmail" element={<CreateEmail />} />
                        <Route path="userdetails" element={<UserDetails />} />
                        <Route path="productscategory" element={<ProductsCategory />} />
                        <Route path="productsadmin" element={<ProductsAdmin />} />
                        <Route path="productdetailadmin" element={<ProductDetailsAdmin />} />
                        <Route path="ordersadmin" element={<OrdersAdmin />} />
                        <Route path="myorderdetails" element={<OrderDetailsClient />} />
                        <Route path="orderadmindetail" element={<OrderDetails />} />
                        <Route path="order-detail/:orderId" element={<UserOrderDetail />} />
                        <Route path="projectsadmin" element={<ProjectsAdmin />} />
                        <Route path="projectadmindetail" element={<ProjectDetails />} />
                        <Route path="myprojectdetails" element={<ProjectDetailsClient />} />
                        <Route path="projectrequest" element={<ProjectRequest />} />
                        <Route path="productpartner" element={<Ppartners />} />
                        <Route path="servicepartner" element={<Spartners />} />
                        <Route path="sub-admin" element={<Sadmins />} />
                        <Route path="admin-details" element={<SubAdminDetails />} />
                        <Route path="allprojects" element={<AllProject />} />
                        <Route path="projectfile" element={<ProjectFile />} />
                        <Route path="servicecategory" element={<ProjectCategory />} />
                        <Route path="meetings" element={<Meetings />} />
                        <Route path="transact" element={<Transactions />} />
                        <Route path="transactions" element={<AdminTransactions />} />
                        <Route path="notify" element={<Notify />} />
                        <Route path="switch" element={<SwitchAccount />} />
                        <Route path="review" element={<Review />} />
                        <Route path="inbox" element={<Inbox />} />
                        <Route path="kyc" element={<KycForm />} />
                        <Route path="testimonial" element={<Testimonial />} />
                        <Route path="subscription" element={<Subscription />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Dashboard />} />
                    </Routes>

                </div>
                <div
                    style={{
                        width: sidebarReduce ? "calc(100% - 45px)" : "",
                        zIndex: sidebarReduce ? "45" : ""
                    }}
                    className="lg:flex relative bg-white text-center lg:main-p px-5 py-5 text-primary fw-500 justify-between fs-400">
                    <div className="flex mb-5 lg:mb-0">
                        <ul className="flex w-full justify-evenly lg:justify-start">
                            <li onClick={() => navigate("/")} className="cursor-pointer">Homepage</li>
                            <li className="lg:px-6 px-3 cursor-pointer" onClick={() => navigate("/shop")} >Products</li>
                            <li onClick={() => navigate("/services")} className="cursor-pointer">Services</li>
                        </ul>
                    </div>
                    <div>
                        Copyright &copy; {new Date().getFullYear()}{' '} Build On The Go
                    </div>
                </div>
                <div className="fixed bottom-0 right-0 lg:m-5 m-4">
                    <FontAwesomeIcon icon={faQuestionCircle} className="lg:text-5xl text-3xl text-secondary cursor-pointer" />
                </div>
            </div>
        </div>

    )
}