import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children, login }) => {
    const isLoggedIn = useSelector((state) => state.handleAuth);

    return isLoggedIn ? children : <Navigate to={`/${login}`} />
}

export default PrivateRoute