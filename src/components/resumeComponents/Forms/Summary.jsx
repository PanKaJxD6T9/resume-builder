import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Brain, LoaderCircle, Save } from 'lucide-react';
import GlobalApi from '@/api/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { AIchatSession } from '@/api/AIModal';

const Summary = ({enableNextTab}) => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState(resumeInfo?.summary);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const params = useParams();

    useEffect(()=>{
      summary && setResumeInfo({...resumeInfo, summary: summary});
    }, [summary])

    const generatedSummary = async() => {
      if (!prompt.trim()) {
        toast({
          title: "Please enter a prompt first",
        });
        return;
      }
      
      setLoading(true);
      try {
        const chat = AIchatSession;
        const result = await chat.sendMessage(prompt);
        const generatedText = result.response.text();
        setSummary(generatedText);
        setResumeInfo({...resumeInfo, summary: generatedText});
        toast({
          title: "Summary generated successfully",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Failed to generate summary",
        });
      } finally {
        setLoading(false);
      }
    }

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

        <form className='mt-7 mb-5' onSubmit={onSubmit}>
            <div className='mb-5 flex justify-between items-end'>
                <label htmlFor="">Add Summary</label>
                <Button 
                  type="button" 
                  className='text-[#7BD197] hover:text-[#7BD197] border-2 border-[#7BD197] outline:none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center' 
                  size="sm" 
                  variant="outline"
                  onClick={generatedSummary}
                  disabled={loading}
                >
                  {loading ? <LoaderCircle className='animate-spin'/> : <Brain className='h-5 w-5' />}
                  Add Summary Using AI
                </Button>
            </div>
            <Textarea 
              required 
              name='summary' 
              rows={10} 
              className='outline:none focus:outline-none' 
              onChange={(e)=>setSummary(e.target.value)}
              value={summary || ''}
            />
            <div className='flex justify-between items-center mt-5'>
              <h2 className='text-red-600'>* Write or Generate Summary and Edit if required</h2>
              <Button disabled={loading} type='submit' className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline:none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center'>{loading ? <LoaderCircle className='animate-spin'/> : "Save"}<Save /></Button>
            </div>
        </form>
        <hr className='border-[1.5px] border-[#7BD197]'/>
        <div>
          <h2 className='text-xl font-semibold my-5 space-grotesk'>Summary Prompt</h2>
          <Textarea 
            placeholder='Enter your summary prompt. 
Ex. "Write a summary for my resume Job Title : Full Stack Developer within 4-5 lines"' 
            name='prompt' 
            rows={5} 
            className='outline:none focus:outline-none'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
    </div>
  )
}

export default Summary