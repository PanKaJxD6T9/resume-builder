import React from 'react'

const ResumeSummary = ({resumeInfo}) => {
  return (
    <div>
        <p className='space-grotesk text-sm'>{resumeInfo?.summary}</p>
    </div>
  )
}

export default ResumeSummary