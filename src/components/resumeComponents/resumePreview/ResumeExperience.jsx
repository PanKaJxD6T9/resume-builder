import React from 'react'

const ResumeExperience = ({resumeInfo}) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-md mb-2 space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>Professional Experience</h2>
        <hr className='border-[1.5px]' style={{borderColor: `${resumeInfo?.themeColor}`}}/>
        {
            resumeInfo?.experience.map((exp, index)=>(
                <div key={index} className='my-4'>
                    <h2 className='font-semibold text-xl space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>{exp?.title}</h2>
                    <h2 className='text-lg space-grotesk flex justify-between'>
                        {exp?.companyName}, {exp?.city}, {exp?.state}
                        <span>{exp?.startDate} {exp?.currentlyWorking ? '- Present' : '- '+exp?.endDate}</span>
                    </h2>
                    <p className='text-sm space-grotesk my-2'>{exp?.workSummary.split('\n').map((item, index)=>(<span key={index}>{item}<br/></span>))}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ResumeExperience