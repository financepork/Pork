import React from 'react'

const CardApresentacaoEsq = ({ DevName, DevStack, DevImgSrc, devInsta, devGithub, devLinkedin }) => {
    return (
        <div  data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500" data-aos-easing="ease-in-out"  className='bg-[var(--color-white)] rounded-tr-full rounded-br-full flex p-3 mt-9 mr-9  h-auto'>
            <div className='flex'>
                <div className='flex flex-col  ml-5 space-y-2'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-md font-title'>{DevName}</h1>
                        <h2 className='text-sm font-text text-[var(--color-green)] ml-1'>{DevStack}</h2>
                    </div>
                    <div className='flex justify-center'>
                        <a href={devInsta}><img src="./instagram.png" alt="Logo Instagram" className='h-[50%]' /></a>
                        <a href={devGithub}><img src="./github.png" alt="Logo Github" className='h-[50%]' /></a>
                        <a href={devLinkedin}><img src="./linkedin.png" alt="Logo Linkedin" className='h-[50%]' /></a>
                    </div>
                </div>
                 <img src={DevImgSrc} alt="Foto Desenvolvedor" className='h-[100%] rounded-full w-[50%]' />
            </div>

        </div>
    )
}

export default CardApresentacaoEsq