import React from 'react'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';

const App = () => {

  const {user, isLoaded, isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to="/auth/sign-in" />
  }

  return (
    <div className='w-full h-screen'>
      <Outlet />
    </div>
  )
}

export default App