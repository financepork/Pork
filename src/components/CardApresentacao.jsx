import React from 'react'

const CardApresentacao = ({ DevName, DevStack, DevDesc, DevImgSrc, className }) => {
    return (
        <div className={`flex bg-[var(--color-white)] mt-30 p-15 mb-15 ${className}`}>
            <div>
                <h1 className='text-6xl font-title ml-15'>{DevName}</h1>
                <h2 className='text-4xl  mt-3 font-text ml-22'>{DevStack}</h2>
                <p className='text-3xl mt-9 mb-4 font-text mr-15 '>{DevDesc}</p>
            </div>
            <div className='w-340 h-100 bg-[var(--color-green)] rounded-full'>
                <aside>
                    <img src={DevImgSrc} alt="Foto Desenvolvedor" />
                </aside>
            </div>

        </div>
    )
}

export default CardApresentacao