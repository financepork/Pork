import React from 'react'

const SmallCard = ({imgPath, text}) => {
  return (
    <div className='flex flex-col justify-center items-center border-2 space-y-2 rounded-2xl p-8 border-[var(--color-green)]'>
        <img src={imgPath} alt="Icone Economia" className='' />
        <p className='font-title-alt text-2xl text-[var(--color-green)] text-center'>{text}</p>
    </div>
  )
}

export default SmallCard