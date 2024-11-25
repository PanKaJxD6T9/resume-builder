import React from 'react'
import { Button } from '../ui/button'
import { Link, useLocation } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react';

const Header = () => {

    const {user, isLoaded, isSignedIn} = useUser();
    const location = useLocation();

  return (
    <div className="p-3 px-5 flex items-center justify-between shadow-md">
      <div className='flex items-center gap-3'>
      <img src="/logo.svg" alt="Logo" width={50} height={50} className='max-md:w-10 max-md:h-10 max-sm:w-8 max-sm:h-8'/>
      <h2 className='text-3xl font-normal edu-au-vic-wa-nt-arrows max-md:text-xl max-sm:text-lg'>AI&nbsp;&nbsp;Resume&nbsp;&nbsp;Builder</h2>
      </div>

      {isSignedIn ? (
        <div className="flex items-center gap-4">
          {location.pathname !== "/dashboard" ? (
            <Link to="/dashboard">
              <Button className="bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none neucha-regular text-lg">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button className="bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none neucha-regular text-lg">
                Home
              </Button>
            </Link>
          )}
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none neucha-regular text-lg">
            Get Started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header