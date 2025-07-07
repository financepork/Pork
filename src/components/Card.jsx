import React from 'react'

const Card = ({text, imgPath }) => {
    return (
        <div className='bg-[var(--color-white)] m-10 mb-25 w-280 h-320 rounded-3xl flex flex-col p-8'>
            <div className='bg-[var(--color-green)] h-150  rounded-2xl'>
                <aside>
                    <img src={imgPath} alt=""/>
                </aside>
            </div>
            <div>
                <p className='bg-gradient-to-b from-[var(--color-green)] to-[var(--color-light-green)] bg-clip-text text-4xl font-text mt-12 text-transparent p-12'>{text}</p>
            </div>
            
        </div>
    )
}

export default Card