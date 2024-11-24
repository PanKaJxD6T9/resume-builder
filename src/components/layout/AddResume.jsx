import { PlusCircle } from 'lucide-react'
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
  

const AddResume = () => {

  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div>
      <div
        className="p-14 py-24 border-2 rounded-lg bg-secondary flex items-center justify-center h-[320px] w-[280px] hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed" onClick={() => setOpenDialog(true)}
      >
        <PlusCircle />
      </div>
      <Dialog open={openDialog} onOpenChange={()=>setOpenDialog(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Do you want to create a resume?</DialogTitle>
            <DialogDescription>
              Create a resume to get started
            </DialogDescription>
            <div className='flex justify-end gap-5'>
              <Button variant="ghost" className="bg-white border border-[#7BD197] outline-none focus:outline-none" onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button className="bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none">Create</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume