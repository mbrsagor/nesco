import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateOutlet = () => {
  const isLoggedIn = !!Cookies.get('accessToken');

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;