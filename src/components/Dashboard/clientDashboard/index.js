import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../../Routes/ProtectedRoute";
import Header from "./header";
import Chat from "./pages/Chats";
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
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function ClientDashboard() {
    
    return (
        <div>
            <div className="font-primary">
                <Header />
                <Sidebar />
                <div className="lg:main-p pt-21 home-bg pb-10">
                    <Routes element={<ProtectedRoute />}>
                        <Route path="" element={<Dashboard />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="products" element={<Products />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="allprojects" element={<AllProject />} />
                        <Route path="meetings" element={<Meetings />} />
                        <Route path="transact" element={<Transactions />} />
                        <Route path="notify" element={<Notify />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Dashboard />}  />
                    </Routes>
                    
                </div>
                <div className="lg:flex bg-white text-center lg:main-p px-5 py-5 text-primary fw-500 justify-between fs-400">
                    <div className="flex mb-5 lg:mb-0">
                        <ul className="flex w-full justify-evenly lg:justify-start">
                            <li>Homepage</li>
                            <li className="lg:px-6 px-3">Products</li>
                            <li>Services</li>
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