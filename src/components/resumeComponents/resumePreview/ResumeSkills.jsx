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
                    <div className='my-2 w-full h-3 rounded-lg bg-zinc-300'>
                        <div className={`w-[${skill.rating}%] h-full rounded-lg`} style={{backgroundColor: `${resumeInfo?.themeColor}`}}></div>
                    </div>

                </div>
            ))
        }
    </div>
  )
}

export default ResumeSkills