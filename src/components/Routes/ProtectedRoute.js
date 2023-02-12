import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const loading = useSelector((state) => state.auth.isLoading);
    return isAuthenticated && !loading ? <Outlet /> : <Navigate to="/login" replace/>
}

export default ProtectedRoute

export const Protected = ({children}) => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if(!isLoggedIn){
        return <Navigate to="/login" replace />
    }
    return children
  
}