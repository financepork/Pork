import React from 'react'

const Card = ({ title, text, imgPath }) => {
    return (
        <div className='bg-none m-10 w-310 h-120 rounded-3xl flex justify-between p-8 shadow-[1px_1px_25px_1px_var(--color-dark-green)]'>
            <div>
                <h2 className='text-[var(--color-white)] font-title leading-tight pb-3 text-7xl'>{title}</h2>
                <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-4xl font-text mt-12 text-transparent'>{text}</p>
            </div>
            <div className='bg-[var(--color-green)] h-100 w-550 ml-5 rounded-2xl'>
                <aside>
                    <img src={imgPath} alt=""/>
                </aside>
            </div>
        </div>
    )
}

export default Card