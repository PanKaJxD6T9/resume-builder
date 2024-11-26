import FormSection from '@/components/resumeComponents/FormSection';
import PreviewSection from '@/components/resumeComponents/PreviewSection';
import {ResumeInfoContext} from '@/context/ResumeInfoContext';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dummy from '@/data/example.jsx';

const ResumeEdit = () => {

    const params = useParams();
    const [resumeInfo, setResumeInfo] = useState();

    useEffect(()=>{
        setResumeInfo(dummy);
    }, [])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10 bg-white">
        <FormSection />
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default ResumeEdit