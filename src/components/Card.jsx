import React from 'react'

const Card = ({text, imgPath }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out" className='bg-[var(--color-white)] m-10 mb-25 w-280 h-100 rounded-3xl flex p-8'>
            <div>
                <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-2xl font-text text-transparent'>{text}</p>
            </div>
             <div>
                <img src="$" alt="Foto Aplicativo" className='bg-[var(--color-green)] h-80 rounded-2xl w-100' />
             </div>
                
            
        </div>
    )
}

export default Card