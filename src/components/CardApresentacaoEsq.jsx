import React from 'react'

const CardApresentacaoEsq = ({ DevName, DevStack, DevDesc, DevImgSrc}) => {
    return (
            <div className={`bg-[var(--color-white)] mt-30 mb-15 rounded-br-full rounded-tr-full mr-15 p-17`}>
                <div className='flex'>
                    <div>
                        <h1 className='text-6xl font-title ml-15'>{DevName}</h1>
                        <h2 className='text-4xl  mt-3 font-text ml-22'>{DevStack}</h2>
                        <p className='text-3xl mt-9 mb-4 font-text mr-15 '>{DevDesc}</p>
                    </div>
                    <div className='w-385 h-110 bg-[var(--color-gray)] rounded-full flex justify-center items-center'>
                        <aside>
                            <img src={DevImgSrc} alt="Foto Desenvolvedor" className='rounded-full max-h-105 w-100'/>
                        </aside>
                    </div>
                </div>
                    <div className='flex ml-15 space-x-3.5'>
                        <a href="#"><img src="./instagram.png" alt="Icone Instagram" className='h-20' /></a>
                        <a href="#"><img src="./github.png" alt="Icone Github" className='h-20' /></a>
                        <a href="#"><img src="./linkedin.png" alt="Icone LinkedIn" className='h-20'/></a>
                </div>
            </div>

    )
}

export default CardApresentacaoEsq