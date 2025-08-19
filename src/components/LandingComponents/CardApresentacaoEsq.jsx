import React from 'react'

const CardApresentacaoEsq = ({ DevName, DevStack, DevImgSrc, devInsta, devGithub, devLinkedin }) => {
    return (
        <div 
            data-aos="fade-right" 
            data-aos-delay="000" 
            data-aos-duration="1500" 
            data-aos-easing="ease-in-out" 
            className='bg-[var(--color-white)] rounded-full flex p-3 mt-9 h-auto w-[95%] md:w-[80%] xl:h-[320px]'
        >
            <div className='flex flex-row items-center w-full'>
                {/* Texto e ícones */}
                <div className='flex flex-col justify-center mr-5 space-y-2 md:space-y-4 flex-1'>
                    <div className='flex flex-col justify-center items-center md:space-y-3'>
                        <h1 className='text-md md:text-3xl xl:text-6xl font-title'>{DevName}</h1>
                        <h2 className='text-sm md:text-xl xl:text-3xl font-text text-[var(--color-green)] ml-1'>{DevStack}</h2>
                    </div>
                    <div className='flex justify-center space-x-2'>
                        <a href={devInsta}><img src="public/icons/instagram.png" alt="Logo Instagram" className='h-6 md:h-8 xl:h-10 2xl:h-20' /></a>
                        <a href={devGithub}><img src="public/icons/github.png" alt="Logo Github" className='h-6 md:h-8 xl:h-10 2xl:h-20' /></a>
                        <a href={devLinkedin}><img src="public/icons/linkedin.png" alt="Logo Linkedin" className='h-6 md:h-8 xl:h-10 2xl:h-20' /></a>
                    </div>
                </div>
                
                <div className='relative flex-shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] lg:w-[350px] lg:h-[350px] xl:w-[300px] xl:h-[300px]'>
                    <img 
                        src={DevImgSrc} 
                        alt="Foto Desenvolvedor" 
                        className='absolute inset-0 w-full h-full rounded-full object-cover border-2 border-[var(--color-green)]'
                        loading="lazy"
                        style={{
                            WebkitMaskImage: '-webkit-radial-gradient(white, black)' 
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardApresentacaoEsq