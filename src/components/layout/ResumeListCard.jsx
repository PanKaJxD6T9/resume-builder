import { Notebook, Pencil } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const ResumeListCard = ({resume}) => {
  return (
    <Link to={"/dashboard/resume/"+resume?.documentId+"/edit"} className='text-black hover:text-black'>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="p-14 py-24 border-2 border-[#000000] rounded-lg bg-secondary flex items-center justify-center h-[320px] w-[280px] hover:shadow-md cursor-pointer border-dashed">
          <Pencil />
        </div>
        <h2 className="text-xl font-semibold text-center mt-1 space-grotesk">
          {resume?.title}
        </h2>
      </div>
    </Link>
  );
}

export default ResumeListCard