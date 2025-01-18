import React from 'react'
import { Orbit } from '@uiball/loaders'

const Loading = () => {
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()})`;
  };
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Orbit size={40} speed={1.5} color={color()} />
    </div>
  )
}

export default Loading
