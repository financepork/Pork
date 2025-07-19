import React from 'react'

const CardWindow = ({titleText, imgSrc, windowOpen, setOpenWindow}) => {
  return (
    <button className='flex h-[50%] w-40 bg-gradient-to-r from-[var(--color-green)] to-[var(--color-dark-green)]  rounded-2xl  justify-center items-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out m-4 '
     onClick={() => setOpenWindow(windowOpen)}>

    </button>
    
  )
}

export default CardWindow