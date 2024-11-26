import React from 'react'

const PersonalDetails = ({resumeInfo}) => {
  return (
    <div>
        <h2 className='text-2xl font-semibold text-center space-grotesk' style={{color: `${resumeInfo?.themeColor}`}}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
        <h2 className='text-md font-medium text-center space-grotesk'>{resumeInfo?.jobTitle}</h2>
        <h2 className='text-xs font-normal text-center space-grotesk'>{resumeInfo?.address}</h2>
        <div className='flex justify-between' style={{color: `${resumeInfo?.themeColor}`}}>
            <h2 className='text-xs font-normal text-center space-grotesk'>{resumeInfo?.phone}</h2>
            <h2 className='text-xs font-normal text-center space-grotesk'>{resumeInfo?.email}</h2>
        </div>
        <hr className='border-[1.5px] my-2' style={{borderColor: `${resumeInfo?.themeColor}`}}/>
    </div>
  )
}

export default PersonalDetails