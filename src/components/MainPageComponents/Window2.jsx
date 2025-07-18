import React from 'react'

const Window2 = () => {
  return (
    <div
      className=' h-full w-full flex flex-col items-center   '>
      <div 
        className='flex flex-col items-center h-[35%] w-full space-y-4 bg-none p-12 mt-2 xl:mt-0 rounded-b-4xl'>
        <h1 className='font-title-alt text-4xl text-[var(--color-white)] md:text-5xl xl:text-6xl text-center'></h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-3xl text-[var(--color-white)] text-center'></p>
      </div>
      <div 
       className='flex flex-col md:flex-row items-center justify-center h-full w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl space-y-5 p-2 '>

      </div>
    </div>
  )
}

export default Window2