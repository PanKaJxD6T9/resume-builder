import AddResume from '@/components/layout/AddResume'
import React from 'react'

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='text-4xl font-bold space-grotesk'>My Resume</h2>
      <p className='text-xl text-gray-500 space-grotesk'>Welcome to my resume builder</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
        <AddResume />
      </div>
    </div>
  )
}

export default Dashboard