import React from 'react'

const CardApresentacaoDir = ({ DevName, DevStack, DevDesc, DevImgSrc}) => {
    return (
            <div className={`bg-[var(--color-white)] mt-30 mb-15 rounded-bl-full rounded-tl-full ml-15 p-17`}>
                <div className='flex'>
                    <div className='w-370 h-100 bg-[var(--color-gray)] rounded-full flex justify-center items-center'>
                        <aside>
                            <img src={DevImgSrc} alt="Foto Desenvolvedor" className='rounded-full max-w-350 max-h-95' />
                        </aside>
                    </div>
                    <div className='flex flex-col ml-20'>
                        <h1 className='text-6xl font-title ml-15'>{DevName}</h1>
                        <h2 className='text-4xl  mt-3 font-text ml-22'>{DevStack}</h2>
                        <p className='text-3xl mt-9 mb-4 font-text mr-15 '>{DevDesc}</p>
                    </div>
                    
                </div>
                    <div className='flex items-end ml-160 space-x-3.5'>
                        <a href="#"><img src="./instagram.png" alt="Icone Instagram" className='h-20' /></a>
                        <a href="#"><img src="./github.png" alt="Icone Github" className='h-20' /></a>
                        <a href="#"><img src="./linkedin.png" alt="Icone LinkedIn" className='h-20'/></a>
                </div>
            </div>

    )
}

export default CardApresentacaoDir