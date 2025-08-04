import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react'
import CardWindow from './cardWindow' 


const MainWindow = ({setOpenWindow}) => {
  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);
  return (
    <main
      className=' scroll-smooth h-full w-full '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
       className='flex flex-wrap h-auto w-full bg-amber-400 rounded-t-4xl p-8 xl:p-16 gap-4 xl:gap-12  overflow-y-none justify-center'>
      
            <CardWindow titleText="Plano de Economia" imgSrc='planEco.png' windowOpen={'PlanejamentoEconomico'} setOpenWindow={setOpenWindow} />
      
          <CardWindow titleText="Registro de Gastos" imgSrc='registroGastos.png' windowOpen={'RegistroGastos'} setOpenWindow={setOpenWindow} />
                 
          <CardWindow titleText="Metas de Economia" imgSrc='metas.png' windowOpen={'DefinirMetas'} setOpenWindow={setOpenWindow} />
      
      </div>
    </main>
  )
}

export default MainWindow