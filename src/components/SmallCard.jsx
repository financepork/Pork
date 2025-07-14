import React from 'react'

const SmallCard = ({imgPath, text}) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 space-y-2 md:space-y-6 rounded-2xl p-8 border-[var(--color-green)] md:h-[10%] md:w-[100%] xl:h-90'>
        <img src={imgPath} alt="Icone Economia" className='md:h-[55%]' />
        <p className='font-title-alt text-2xl md:text-4xl  text-[var(--color-green)] text-center'>{text}</p>
    </div>
  )
}

export default SmallCard