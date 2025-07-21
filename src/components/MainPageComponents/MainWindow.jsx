import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react'
import CardWindow from './cardWindow' 


const MainWindow = ({setOpenWindow}) => {
  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);
  return (
    <div
      className=' scroll-smooth h-full w-full flex flex-col  '>
      <div data-aos="fade-right" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col  h-[50%] xl:h-[60%] w-full p-6 xl:ml-15 rounded-b-4xl'>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-7xl '>Bem Vindo,</h1>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-8xl '>João Vitor Chaves</h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-4xl text-[var(--color-white)] mt-2 xl:mt-4 '>Seja bem-vindo ao Pork, seu Cofrinho Digital!</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
       className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 xl:p-16 gap-4 xl:gap-12  overflow-y-auto justify-center'>
      
            <CardWindow titleText="Plano Econômico" imgSrc='planEco.png' windowOpen={'Window1'} setOpenWindow={setOpenWindow} />
      
          <CardWindow titleText="Registro de Gastos" imgSrc='registroGastos.png' windowOpen={'Window2'} setOpenWindow={setOpenWindow} />
                 
          <CardWindow titleText="Metas de Economia" imgSrc='metas.png' windowOpen={'Window3'} setOpenWindow={setOpenWindow} />

      </div>
    </div>
  )
}

export default MainWindow