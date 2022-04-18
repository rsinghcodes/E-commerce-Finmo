import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/reducers/authSlice';

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(authSelector);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
