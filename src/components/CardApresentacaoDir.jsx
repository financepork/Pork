import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';



const CardApresentacaoDir = ({ DevName, DevStack, DevImgSrc, devInsta, devGithub, devLinkedin }) => {

    useEffect(() => {
        AOS.init({ once: true }); // once: true anima só uma vez
    }, []);

    return (
        <div className='bg-[var(--color-white)] flex ml-9 mt-9 rounded-bl-full rounded-tl-full p-3 h-auto'>
            <div className='flex '>
                <img src={DevImgSrc} alt="Foto Desenvolvedor" className='h-[100%] rounded-full w-[50%]' />
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
            </div>

        </div>
    )
}

export default CardApresentacaoDir