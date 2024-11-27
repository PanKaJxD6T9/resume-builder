import React, { useState } from 'react'
import PersonalDetails from './Forms/PersonalDetails'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'

const FormSection = () => {

  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [enableNextTab, setEnableNextTab] = useState(false);

  return (
    <div>
      <div className='flex justify-between'>
        <Button variant='outline' size='sm' className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center'><LayoutGrid /> Theme</Button>
        <div className='flex gap-2'>
          {
            activeTabIndex > 1 && <Button size="sm" className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center' onClick={() => setActiveTabIndex(activeTabIndex - 1)}><ArrowLeft /> Back</Button>
          }
          <Button disabled={!enableNextTab} size='sm' className='bg-[#7BD197] hover:bg-[#7BD197]/90 text-black outline-none focus:outline-none space-grotesk text-lg flex gap-2 justify-center items-center' onClick={() => setActiveTabIndex(activeTabIndex + 1)}>Next <ArrowRight /></Button>
        </div>
      </div>

      {/* Personal Details Rendering Based on TabIndex */}

      {
        activeTabIndex === 1 ? <PersonalDetails enableNextTab={(v)=>setEnableNextTab(v)} /> : null
      }
    </div>
  )
}

export default FormSection