import { Loader2, PlusCircle } from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import GlobalApi from '@/api/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


const AddResume = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const {user} = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate = async()=>{
    setLoading(true);
    const uuid = uuidv4();
    
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      }
    }

    GlobalApi.createNewResume(data).then((res)=>{
      if(res){
        navigation(`/dashboard/resume/${uuid}/edit`);
        setLoading(false);
        setOpenDialog(false);
      }
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div
        className="p-14 py-24 border-2 border-[#7BD197] rounded-lg bg-secondary flex items-center justify-center h-[320px] w-[280px] hover:shadow-md cursor-pointer border-dashed" onClick={() => setOpenDialog(true)}
      >
        <PlusCircle />
      </div>
      <h2 className='text-xl font-semibold text-center mt-1 space-grotesk'>Create New Resume</h2>
      <Dialog open={openDialog} onOpenChange={()=>setOpenDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription className='flex flex-col gap-5'>
              Add Title for new resume
              <Input placeholder="Ex. Resume for Job" className="bg-white border border-[#7BD197] outline-none focus:outline-none mb-2" onChange={(e)=>setResumeTitle(e.target.value)} />
            </DialogDescription>
            <div className='flex justify-end gap-5'>
              <Button variant="ghost" className="bg-white border border-[#7BD197] outline-none focus:outline-none" onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button className="bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none" disabled={!resumeTitle||loading} onClick={()=>onCreate()}>{
                loading ?
                <Loader2 className='animate-spin' /> : 
                "Create"
              }</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume