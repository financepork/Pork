import React from 'react'

const CardCarousel = ({ imgSrc, titleText, contentText }) => {
  return (
    <div className='flex flex-col w-full bg-[var(--color-white)] text-[var(--color-green)] rounded-2xl justify-between items-center p-4 shadow-md hover:scale-105 transition-all duration-500 ease-in cursor-pointer'>
      <img src={imgSrc} alt="Foto da Função" className='w-[80%] rounded-2xl' />
      <div className='flex flex-col justify-center items-center gap-6'>
        <h2 className='font-title-app text-center text-xl md:text-4xl lg:text-5xl m-2'>{titleText}</h2>
        <p className='hidden lg:block text-2xl font-text-alt text-center'>{contentText}</p>
      </div>
    </div>
  )
}

export default CardCarousel