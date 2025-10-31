import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../Pages/LoadingSpinner';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoute = ({ children }) => {
  const { user, loading} = use(AuthContext)

  const location = useLocation();
  //console.log(location);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate  state={location.pathname} to='/auth/login'></Navigate>;
   
};

export default PrivateRoute;