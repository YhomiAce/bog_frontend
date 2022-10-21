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
                        <Route path="meetings" element={<Meetings />} />
                        <Route path="notify" element={<Notify />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Dashboard />}  />
                    </Routes>
                    
                </div>
                <div className="lg:flex bg-white lg:main-p px-5 py-5 text-primary fw-500 justify-between fs-400">
                        <div className="flex">
                            <ul className="flex">
                                <li>Homepage</li>
                                <li className="lg:px-6 px-3">Products</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div>
                            Copyright &copy; {new Date().getFullYear()}{' '} Build On The Go
                        </div>
                    </div>
            </div>
        </div>
        
        )
}