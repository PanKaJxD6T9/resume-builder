import React from 'react'
import './App.css'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className='w-full h-screen'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Button</Button>
    </div>
  )
}

export default App