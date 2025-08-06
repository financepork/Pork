import React from 'react'

const SmallCard = ({imgPath, text}) => {
  return (
     <div className='flex flex-col justify-center items-center border-2 space-y-2 md:space-y-6 rounded-2xl p-8 border-[var(--color-green)] max-h-[1%] w-[60%] md:w-[45%] xl:w-[25%] xl:h-100 m-0'>
        <img src={imgPath} alt="Icone Economia" className='h-[60%] xl:h-[80%] object-cover' />
        <p className='font-title-alt text-2xl md:text-4xl  text-[var(--color-green)] text-center'>{text}</p>
    </div>
  )
}

export default SmallCard