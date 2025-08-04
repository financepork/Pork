import React from 'react'

const headerPages = ({firstLineText, secLineText, altText}) => {
  return (
     <main 
        className='flex flex-col  h-[40%] w-full p-6 xl:ml-15 rounded-b-4xl md:mb-8'>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-7xl '>{firstLineText}</h1>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-8xl '>{secLineText}</h1>
        <div>
          <p className='font-text-alt text-xl md:text-2xl xl:text-4xl text-[var(--color-white)] mt-2 xl:mt-4 '>{altText}</p>
        </div>
        
      </main>
  )
}

export default headerPages