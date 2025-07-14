import React from 'react'

const Card = ({ text, imgPath }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out" className='bg-[var(--color-white)] h-auto w-[75%] rounded-3xl m-8 p-6 md:p-10 xl:mt-20  '>
            <div className='flex flex-col xl:flex-row justify-center items-center space-y-5'>
                <div className='flex justify-center items-center h-auto w-auto md:h-[20%] '>
                    <img src="./icon.png" alt="" className='bg-[var(--color-green)] h-1/2 md:h-[20%] xl:h-80 xl:w-450 w-[95%] object-cover  rounded-2xl '/>
                </div>

                <div>
                    <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-3xl xl:text-4xl font-text text-transparent xl:m-8'>{text}</p> 
                </div>
            </div>
        </div>
    )
}

export default Card