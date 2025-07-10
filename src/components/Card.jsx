import React from 'react'

const Card = ({ text, imgPath }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out" className='bg-[var(--color-white)] h-auto w-[75%] rounded-3xl m-8 p-6 '>
            <div className='flex flex-col justify-center items-center md:flex-row space-y-5'>
                <div className='flex justify-center items-center h-auto '>
                    <img src="./icon.png" alt="" className='bg-[var(--color-green)] h-1/2 w-[95%] rounded-2xl '/>
                </div>

                <div>
                    <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-md font-text text-transparent'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card