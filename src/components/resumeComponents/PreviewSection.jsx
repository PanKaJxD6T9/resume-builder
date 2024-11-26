import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetails from './resumePreview/PersonalDetails';
import ResumeSummary from './resumePreview/ResumeSummary';
import ResumeExperience from './resumePreview/ResumeExperience';
import ResumeEducation from './resumePreview/ResumeEducation';
import ResumeSkills from './resumePreview/ResumeSkills';

const PreviewSection = () => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);

  return (
    <div className={`shadow-md h-full p-10 border-t-[20px] bg-white`} style={{borderColor: `${resumeInfo?.themeColor}`}}>
        <PersonalDetails resumeInfo={resumeInfo}/>
        <ResumeSummary resumeInfo={resumeInfo}/>
        <ResumeExperience resumeInfo={resumeInfo}/>
        <ResumeEducation resumeInfo={resumeInfo}/>
        <ResumeSkills resumeInfo={resumeInfo}/>
    </div>
  )
}

export default PreviewSection