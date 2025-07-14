import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';



const CardApresentacaoDir = ({ DevName, DevStack, DevImgSrc, devInsta, devGithub, devLinkedin }) => {

    useEffect(() => {
        AOS.init({ once: true }); // once: true anima só uma vez
    }, []);

    return (
        <div data-aos="fade-left" data-aos-delay="400" data-aos-duration="1500" data-aos-easing="ease-in-out" className='bg-[var(--color-white)] flex ml-9 lg:ml-18 mt-9 rounded-bl-full rounded-tl-full p-3 h-auto lg:h-100 '>
            <div className='flex '>
                <img src={DevImgSrc} alt="Foto Desenvolvedor" className='h-[100%] rounded-full w-[50%] lg:w-[30%]' />
                <div className='flex flex-col justify-center ml-5 space-y-2 md:space-y-4'>
                    <div className='flex flex-col justify-center items-center md:space-y-1 lg:mt-35'>
                        <h1 className='text-md md:text-3xl lg:text-6xl font-title'>{DevName}</h1>
                        <h2 className='text-sm md:text-xl lg:text-3xl font-text text-[var(--color-green)] ml-1'>{DevStack}</h2>
                    </div>
                    <div className='flex justify-center'>
                        <a href={devInsta}><img src="./instagram.png" alt="Logo Instagram" className='h-[50%] md:h-[65%] lg:h-[30%]' /></a>
                        <a href={devGithub}><img src="./github.png" alt="Logo Github" className='h-[50%] md:h-[65%] lg:h-[30%]' /></a>
                        <a href={devLinkedin}><img src="./linkedin.png" alt="Logo Linkedin" className='h-[50%] md:h-[65%] lg:h-[30%]' /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardApresentacaoDir