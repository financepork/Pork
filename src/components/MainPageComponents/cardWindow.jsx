import React from 'react'

const CardWindow = ({titleText, imgSrc}) => {
  return (
    <div className='bg-gradient-to-tr from-[var(--color-green)] to-[var(--color-dark-green)] relative rounded-2xl w-[80%] h-[100%] flex flex-row
    md:flex-col justify-between md:justify-around items-center shadow-lg transition-transform duration-1000 hover:scale-110 active:scale-110 cursor-pointer'>
        <div className=' items-center flex p-5'>
            <h3 className='text-[var(--color-white)] font-title-alt text-[100%] md:text-2xl xl:text-3xl'>{titleText}</h3>
        </div>
        <div className= 'w-[45%] h-[90%] md:h-[50%] md:w-[80%] xl:h-[70%] md:m-1  flex justify-center items-center p-1 xl:p-4'>
            <img src={imgSrc} alt="" className='h-[100%] w-full bg-[var(--color-white)] rounded-2xl border-2 border-[var(--color-white)] cover' />
        

        </div>
        

    </div>
  )
}

export default CardWindow