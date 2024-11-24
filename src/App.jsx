import React from 'react'
import './App.css'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
import Header from './components/layout/Header';

const App = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  // Allow home page (/) to be accessed without authentication
  if (location.pathname === '/') {
    return (
      <div className='w-full h-screen'>
        <Header />
        <Outlet />
      </div>
    );
  }

  // For other routes, check authentication
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <div className='w-full h-screen'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App