import { useAuth } from '../contexts/AuthContext';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
  const { user } = useAuth();
  return (
    user ? children : <Navigate to="/register"/>
  );
}
