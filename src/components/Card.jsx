import React from 'react'

const Card = ({title, imgPath}) => {
    return (
        <div className='bg-white w-full md:w-[60%] lg:w-[45%] 2xl:w-[40%] h-full p-8 md:p-12 lg:p-16 flex flex-row justify-center rounded-3xl'>
            <img src={imgPath} alt="Foto da ferramenta" className='w-[50%] h-[50%]' />
            <div className='flex flex-col space-y-4 justify-center mx-4'>
                <h3 className='font-title-app text-[var(--color-green)] text-2xl md:text-4xl 2xl:text-6xl text-center'>
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default Card