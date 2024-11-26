import React from 'react'

const ResumeEducation = ({resumeInfo}) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-md mb-2 space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>Education</h2>
        <hr className='border-[1.5px]' style={{borderColor: `${resumeInfo?.themeColor}`}}/>
        {
            resumeInfo?.education.map((edu, index)=>(
                <div key={index} className='my-4'>
                    <h2 className='font-semibold text-xl space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>{edu?.universityName}</h2>
                    <h2 className='text-md space-grotesk flex justify-between'>
                        {edu?.degree} in {edu?.major}
                        <span>{edu?.startDate} {edu?.currentlyWorking ? '- Present' : '- '+edu?.endDate}</span>
                    </h2>
                    <p className='text-sm space-grotesk my-2'>{edu?.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ResumeEducation