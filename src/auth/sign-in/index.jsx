import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div  className='w-full h-screen flex items-center justify-center bg-[#161925]'>
        <SignIn />
    </div>
  )
}

export default SignInPage