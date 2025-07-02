import React from 'react'

const Card = ({ title, text, imgPath }) => {
    return (
        <div className='bg-[var(--color-green)] m-10 w-310 h-120 rounded-3xl flex justify-between p-8'>
            <div className=''>
                <h2 className='text-[var(--color-white)] text-7xl font-title' >{title}</h2>
                <p className='text-[var(--color-white)] text-4xl font-text mt-12'>{text}</p>
            </div>
            <div className='bg-[var(--color-white)] h-100 w-550 ml-5 rounded-2xl'>
                <aside>
                    <img src={imgPath} alt=""/>
                </aside>
            </div>
        </div>
    )
}

export default Card