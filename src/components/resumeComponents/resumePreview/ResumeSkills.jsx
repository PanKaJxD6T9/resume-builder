import React from 'react'

const ResumeSkills = ({resumeInfo}) => {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-md mb-2 space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>Skills</h2>
        <hr className='border-[1.5px]' style={{borderColor: `${resumeInfo?.themeColor}`}}/>
        {
            resumeInfo?.skills.map((skill, index)=>(
                <div key={index} className='my-4'>
                    <h2 className='text-lg font-semibold space-grotesk'>{skill.name}</h2>
                    <div className='w-full h-3 bg-zinc-200 rounded-lg my-2 overflow-hidden'>
                        <div className='h-full' style={{backgroundColor: `${resumeInfo.themeColor}`, width: `${skill.rating}%`}}></div>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default ResumeSkills