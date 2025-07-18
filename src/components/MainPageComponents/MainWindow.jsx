import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react'
import CardWindow from './cardWindow' 


const MainWindow = ({ setOpenWindow }) => {
  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);
  return (
    <div
      className=' h-full w-full flex flex-col items-center   '>
      <div 
        className='flex flex-col items-center h-[35%] w-full space-y-4 bg-none p-12 mt-2 xl:mt-0 rounded-b-4xl'>
        <h1 className='font-title-alt text-4xl text-[var(--color-white)] md:text-5xl xl:text-6xl text-center'>Olá, Usuário!</h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-3xl text-[var(--color-white)] text-center'>Seja bem-vindo ao Pork, seu Cofrinho Digital!</p>
      </div>
      <div 
       className='flex flex-col md:flex-row items-center justify-center h-full w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl space-y-5 p-2 '>
      
          <button className='w-[100%] h-[20%] md:h-[70%] flex justify-center' onClick={() => setOpenWindow('Window1')}>
            <CardWindow titleText="Plano Econômico" imgSrc='planoEconomico.png' />
        </button>
        
        <button className='w-[100%] h-[20%] md:h-[70%] flex justify-center'  onClick={() => setOpenWindow('Window2')}>
          <CardWindow titleText="Registro de Gastos" imgSrc='registroGastos.png' />
                 
        </button>
        <button className='w-[100%] h-[20%] md:h-[70%] flex justify-center md:mb-5'  onClick={() => setOpenWindow('Window3')}>
          <CardWindow titleText="Metas de Economia" imgSrc='metasEconomicas.png' />
        </button>

      </div>
    </div>
  )
}

export default MainWindow