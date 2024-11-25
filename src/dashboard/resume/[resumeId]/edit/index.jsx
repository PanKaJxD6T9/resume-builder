import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ResumeEdit = () => {

    const params = useParams();

    useEffect(()=>{
        console.log(params.resumeId)
    }, [])

  return (
    <div>ResumeEdit : {params.resumeId}</div>
  )
}

export default ResumeEdit