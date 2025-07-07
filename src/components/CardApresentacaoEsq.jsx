import React from 'react'

const CardApresentacaoEsq = ({ DevName, DevStack, DevDesc, DevImgSrc }) => {
    return (
        <div className={`bg-[var(--color-white)] mt-30 mb-15 rounded-br-full rounded-tr-full mr-15 p-17 max-h-130 animate-fade-right animate-delay-[400ms] animate-ease-in-out`}>
            <div className='flex'>
                <div>
                    <h1 className='text-5xl font-title ml-15'>{DevName}</h1>
                    <h2 className='text-3xl  mt-3 font-text ml-22 text-[var(--color-green)]'>{DevStack}</h2>
                    <p className='text-3xl mt-9 mb-4 font-text mr-15 '>{DevDesc}</p>
                </div>
                <div>
                    <aside>
                        <img src={DevImgSrc} alt="Foto Desenvolvedor" className='rounded-full w-340 h-100 object-cover shadow-[var(--color-black)]' />
                    </aside>
                </div>
            </div>
            <div className='flex space-x-3.5 -mt-8 mb-6 self-end'>
                <a href="#"><img src="./instagram.png" alt="Icone Instagram" className='h-15' /></a>
                <a href="#"><img src="./github.png" alt="Icone Github" className='h-15' /></a>
                <a href="#"><img src="./linkedin.png" alt="Icone LinkedIn" className='h-15' /></a>
            </div>
        </div>

    )
}

export default CardApresentacaoEsq