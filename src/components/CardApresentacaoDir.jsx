import React from 'react'

const CardApresentacaoDir = ({ DevName, DevStack, DevDesc, DevImgSrc }) => {
    return (
        <div className={`bg-[var(--color-white)] mt-30 mb-15 rounded-bl-full rounded-tl-full ml-15 p-15 max-h-130 animate-fade-left animate-delay-[400ms] animate-ease-in-out`}>
            <div className='flex'>
                <div>
                    <aside>
                        <img src={DevImgSrc} alt="Foto Desenvolvedor" className='rounded-full w-370 h-100 object-cover shadow-[var(--color-black)]' />
                    </aside>
                </div>
                <div className='flex flex-col ml-20'>
                    <h1 className='text-5xl font-title ml-15'>{DevName}</h1>
                    <h2 className='text-3xl  mt-3 font-text ml-20 text-[var(--color-green)]'>{DevStack}</h2>
                    <p className='text-3xl mt-9 mb-4 font-text mr-15 '>{DevDesc}</p>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className='flex space-x-3.5 -mt-8 mb-6 ml-auto'>
                    <a href="#"><img src="./instagram.png" alt="Icone Instagram" className='h-15' /></a>
                    <a href="#"><img src="./github.png" alt="Icone Github" className='h-15' /></a>
                    <a href="#"><img src="./linkedin.png" alt="Icone LinkedIn" className='h-15' /></a>
                </div>
            </div>
        </div>

    )
}

export default CardApresentacaoDir