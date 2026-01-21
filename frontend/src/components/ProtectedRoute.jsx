import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { isLoggedIn, user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isLoggedIn) {
    navigate('/login');
    return null;
  }

  if (requiredRole && user?.role !== requiredRole) {
    navigate('/');
    return null;
  }

  return children;
};
