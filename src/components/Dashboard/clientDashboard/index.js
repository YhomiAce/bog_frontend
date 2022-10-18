import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./header";
import Chat from "./pages/Chats";
import Dashboard from "./pages/Dasboard";
import Meetings from "./pages/Meetings";
import Notify from "./pages/Notify";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Sidebar from "./sidebar";

export default function ClientDashboard() {
    
    return (
        <div>
            <div className="font-primary">
                <Header />
                <Sidebar />
                <div className="lg:ml-52 pt-24 p-5 bg-gray-100">
                    <Routes>
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Orders />} />
                        <Route path="" element={<Products />} />
                        <Route path="" element={<Meetings />} />
                        <Route path="" element={<Notify />} />
                        <Route path="" element={<Chat />} />
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Dashboard />} />
                        <Route path="" element={<Dashboard />}  />
                    </Routes>
                    <div>
                        footer
                    </div>
                </div>
            </div>
        </div>
        
        )
}