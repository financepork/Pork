import React from 'react'

const Card = ({ title, text, imgPath }) => {
    return (
        <div className='card'>
            <div className='flex flex-col space-y-8 items-center'>
                <h2 className='text-[var(--color-white)] font-title text-7xl '>{title}</h2>
                <p className='text-[var(--color-white)] font-text text-5xl'>{text}</p>
            </div>
                <aside>
                    <img src={imgPath} alt="" />
                </aside>
        </div>
    )
}

export default Card