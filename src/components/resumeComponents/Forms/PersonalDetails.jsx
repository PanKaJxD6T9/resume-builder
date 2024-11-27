import React, { useContext, useEffect, useState } from 'react'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoaderCircle, Save } from 'lucide-react';
import { useParams } from 'react-router-dom';
import GlobalApi from '@/api/GlobalApi';
import { useToast } from '@/hooks/use-toast';

const PersonalDetails = ({enableNextTab}) => {

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);
    const [tabData, setTabData] = useState();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast()
    const params = useParams();

    // useEffect(()=>{
    //     console.log(params);
    // }, [])

    const handleChange = (e) => {
        enableNextTab(false);
        const {name, value} = e.target;
        setTabData({...tabData, [name]: value});
        setResumeInfo({...resumeInfo, [name]: value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: tabData
        }
        GlobalApi.updateResume(params.resumeId, data).then((res)=>{
            console.log(res);
            enableNextTab(true);
            setLoading(false);
            toast({
              title: "Personal details updated successfully",
            })
      
        }).catch((err)=>{
            console.log(err);
            setLoading(false);
        })
    }

  return (
    <div className='my-5 space-grotesk p-5 shadow-md border-t-[20px] rounded-lg' style={{borderColor: `${resumeInfo?.themeColor}`}}>
        <h2 className='text-xl font-semibold'>Personal Details</h2>
        <p>Let's get started with your personal details</p>

        <form action="" onSubmit={onSubmit}>
            <div className='grid grid-cols-2 gap-5 my-5'>
                <div>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>First Name</label>
                    <Input name='firstName' defaultValue={resumeInfo?.firstName} required onChange={handleChange}/>
                </div>
                <div>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Last Name</label>
                    <Input name='lastName' defaultValue={resumeInfo?.lastName} required onChange={handleChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Job Title</label>
                    <Input name='jobTitle' defaultValue={resumeInfo?.jobTitle} required onChange={handleChange}/>
                </div>
                <div className='col-span-2'>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Address</label>
                    <Input name='address' defaultValue={resumeInfo?.address} required onChange={handleChange}/>
                </div>
                <div>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Phone Number</label>
                    <Input name='phone' defaultValue={resumeInfo?.phone} required onChange={handleChange}/>
                </div>
                <div>
                    <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Email</label>
                    <Input type='email' name='email' defaultValue={resumeInfo?.email} required onChange={handleChange}/>
                </div>
            </div>
            <div className='flex justify-end'>
                <Button disabled={loading} type='submit' className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center'>{loading ? <LoaderCircle className='animate-spin'/> : "Save"}<Save /></Button>
            </div>
        </form>
    </div>
  )
}

export default PersonalDetails