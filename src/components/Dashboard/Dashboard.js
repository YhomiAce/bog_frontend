import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import Home from './Home'
import Dashboard from './clientDashboard/pages/Dasboard'

const Dashboard = () => {
    return (
        <Routes element={<ProtectedRoute />}>
            <Route path='home' element={<Dashboard />} />
        </Routes>
    )
}

export default Dashboard