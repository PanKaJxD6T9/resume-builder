import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Brain, LoaderCircle, Save } from 'lucide-react';
import GlobalApi from '@/api/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Summary = ({enableNextTab}) => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState(resumeInfo?.summary);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    useEffect(()=>{
      summary && setResumeInfo({...resumeInfo, summary: summary});
    }, [summary])

    const onSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      const data = {
          data: {
            summary: summary
          }
      }
      GlobalApi.updateResume(params.resumeId, data).then((res)=>{
          console.log(res);
          enableNextTab(true);
          setLoading(false);
          toast({
            title: "Summary updated successfully",
          })
    
      }).catch((err)=>{
          console.log(err);
          setLoading(false);
      })
  }

  return (
    <div className='my-5 space-grotesk p-5 shadow-md border-t-[20px] rounded-lg' style={{borderColor: `${resumeInfo?.themeColor}`}}>
        <h2 className='text-xl font-semibold'>Summary Details</h2>
        <p>Let's add your summary details</p>

        <form className='mt-7' onSubmit={onSubmit}>
            <div className='mb-5 flex justify-between items-end'>
                <label htmlFor="">Add Summary</label>
                <Button type="button" className='text-[#7BD197] hover:text-[#7BD197] border-2 border-[#7BD197] outline:none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center' size="sm" variant="outline"><Brain className='h-5 w-5' />Add Summary Using AI</Button>
            </div>
            <Textarea required name='summary' rows={10} className='outline:none focus:outline-none' onChange={(e)=>setSummary(e.target.value)} value={summary}/>
            <div className='flex justify-between items-center mt-5'>
              <h2 className='text-red-600'>* Add Some changes to save and move next</h2>
              <Button disabled={loading} type='submit' className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center'>{loading ? <LoaderCircle className='animate-spin'/> : "Save"}<Save /></Button>
            </div>
        </form>

    </div>
  )
}

export default Summary