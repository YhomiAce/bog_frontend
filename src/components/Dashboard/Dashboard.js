import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../Routes/ProtectedRoute'
import Home from './Home'

const Dashboard = () => {
    return (
        <Routes element={<ProtectedRoute />}>
            <Route path='home' element={<Home />} />
        </Routes>
    )
}

export default Dashboard