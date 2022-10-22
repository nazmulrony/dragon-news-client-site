import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuhtContext } from '../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuhtContext);
    const location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center align-items-center vh-100 '>
            <Spinner animation="border" variant="success" />
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children;

};

export default PrivateRoute;