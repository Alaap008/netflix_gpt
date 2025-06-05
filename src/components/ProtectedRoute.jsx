import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import withErrorBoundary from './withErrorBoundary';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default withErrorBoundary(ProtectedRoute, 'ProtectedRoute'); 