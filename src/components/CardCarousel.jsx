import React from 'react'

const CardCarousel = ({imgSrc, titleText}) => {
  return (
    <div className='flex flex-col  w-full  md:w-[60%] lg:w-[40%] xl:w-[28%] h-[30%]   bg-[var(--color-white)] text-[var(--color-green)]  rounded-2xl justify-between  items-center p-4 shadow-md hover:scale-105 transition-all duration-500 ease-in space-y-2 md:space-y-4 cursor-pointer hover:bg-[var(--color-white)] hover:text-[var(--color-green)] md:m-4 
    '
     >
      <img src={imgSrc} alt="Foto da Função" className=' h-[75%] w-[90%] md:w-[90%] rounded-2xl' />
      <h2 className=' font-title-app text-center text-xl md:text-4xl  m-2'>{titleText}</h2>
    </div>
  )
}

export default CardCarousel