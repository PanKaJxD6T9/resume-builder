import GlobalApi from '@/api/GlobalApi';
import AddResume from '@/components/layout/AddResume'
import ResumeListCard from '@/components/layout/ResumeListCard';
import { useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'

function Dashboard() {

  const {user} = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(()=>{
    user && getResumeList();
  },[user]);

  const getResumeList = () => {

    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then((res)=>{
      setResumeList(res.data.data);
      console.log(res.data.data);
    }).catch((err)=>{
      console.log(err);
    })

  }

  return (
    <div className='bg-white p-10 md:px-20 lg:px-32'>
      <h2 className='text-4xl font-bold space-grotesk'>My Resume</h2>
      <p className='text-xl text-[#7BD197] space-grotesk'>Welcome to my resume builder</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
        <AddResume />
        {
          resumeList.length > 0 && resumeList.map((resume, index)=>{
            return <ResumeListCard resume={resume} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default Dashboard