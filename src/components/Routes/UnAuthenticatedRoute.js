import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UnAuthenticatedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.isLoading);
    return isAuthenticated && !loading ? <Outlet /> : <Navigate to="/dashboard/home" />
}

export default UnAuthenticatedRoute