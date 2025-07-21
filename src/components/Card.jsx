import React from 'react'

const Card = ({ text, imgPath }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out" className='bg-[var(--color-white)] h-auto w-[75%] rounded-3xl m-8 p-8 md:p-10 xl:mt-20  '>
            <div className='flex flex-col xl:flex-row justify-center items-center space-y-5'>
                <div className='flex justify-center items-center w-auto xl:m-8  '>
                    <img src={imgPath} alt="Foto Card" className=' h-1/2 md:h-100 xl:h-80 xl:w-320 w-[95%] rounded-2xl img-center'/>
                </div>

                <div>
                    <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-3xl md:text-4xl xl:text-4xl font-text text-transparent xl:m-8'>{text}</p> 
                </div>
            </div>
        </div>
    )
}

export default Card