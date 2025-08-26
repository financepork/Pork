import React from 'react'

const CardCarousel = ({ imgSrc, titleText, contentText }) => {
  return (
    <div className='flex flex-col lg:flex-row  w-full  md:w-[60%] lg:w-[75%]  lg:h-100 xl:w-[85%] 2xl:w-[85%] h-[30%]   bg-[var(--color-white)] text-[var(--color-green)]  rounded-2xl justify-between  items-center p-4 md:p-6 lg:p-12 shadow-md hover:scale-105 transition-all duration-500 ease-in space-y-2 md:space-y-4 lg:space-x-6 cursor-pointer hover:bg-[var(--color-white)] hover:text-[var(--color-green)] md:m-4 
    '
     >
      <img src={imgSrc} alt="Foto da Função" className=' h-[75%] w-[70%] xl:w-[50%]  rounded-2xl' />
      <div className='flex flex-col lg:m-4 justify-center items-center gap-6'>
        <h2 className=' font-title-app text-center text-xl md:text-4xl lg:text-5xl  m-2'>{titleText}</h2>
        <p className='hidden lg:block text-2xl font-text-alt text-center'>{contentText}</p>
      </div>
    </div>
  )
}

export default CardCarousel