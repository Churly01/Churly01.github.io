import {Outlet, Navigate } from 'react-router-dom';
import { useAuth }         from '../contexts/AuthContext.js';

const PrivateRoutes = () => {
  const { user } = useAuth();
  return(
    user ? <Outlet/> : <Navigate to="/register"/>
  );

}

export default PrivateRoutes;
