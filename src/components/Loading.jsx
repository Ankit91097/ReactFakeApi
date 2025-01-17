import React from 'react'
import { Orbit } from '@uiball/loaders'

const Loading = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Orbit size={40} speed={1.5} color="#32cd32" />
    </div>
  )
}

export default Loading
