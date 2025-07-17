import React from 'react'

const MainWindow = ({setOpenWindow}) => {
  return (
    <div className=' h-full w-full p-6 flex flex-col items-center  '>
      <div className='flex flex-col items-center h-[50%] p-4 space-y-4 mt-11 '>
        <h1 className='font-title-alt text-4xl text-[var(--color-green)] md:text-5xl xl:text-6xl'>Olá, Usuário!</h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-3xl text-[var(--color-white)]'>Seja bem-vindo ao <span className='text-[var(--color-green)]'>Pork</span>, seu Cofrinho Digital!</p>
      </div>
      <div className='w-[75%] xl:w-fit xl:p-10 xl:mt-8 2xl:mt-4 bg-[var(--color-white)] h-[80%] rounded-2xl flex flex-col items-center p-6 space-y-12 xl:space-y-18 mb-4 xl:mb-8'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-title-alt text-[var(--color-green)] mt-2 text-2xl md:text-4xl xl:text-5xl text-center'>Opções Disponíveis</h2>
        </div>
        <div className='flex flex-col space-y-6'>
          <button className=' bg-[var(--color-green)] p-2 rounded-2xl text-[var(--color-white)] font-text-alt text-lg h-[30%] md:text-2xl md:p-3 xl:text-4xl xl:p-5 hover:text-[var(--color-green)] hover:bg-[var(--color-white)] transition-colors duration-400 ease-in-out'
           onClick={() => setOpenWindow('Window1')}>Plano Econômico</button>
          <button className=' bg-[var(--color-green)] p-2 rounded-2xl text-[var(--color-white)] font-text-alt text-lg h-[30%] md:text-2xl xl:text-4xl xl:p-4 hover:text-[var(--color-green)] hover:bg-[var(--color-white)] transition-colors duration-400 ease-in-out'
           onClick={() => setOpenWindow('Window2')}>Gastos</button>
          <button className=' bg-[var(--color-green)] p-2 rounded-2xl text-[var(--color-white)] font-text-alt text-lg h-[30%] md:text-2xl xl:text-4xl xl:p-4 hover:text-[var(--color-green)] hover:bg-[var(--color-white)] transition-colors duration-400 ease-in-out'
           onClick={() => setOpenWindow('Window3')}>Metas</button>
        </div>

      </div>
    </div>
  )
}

export default MainWindow