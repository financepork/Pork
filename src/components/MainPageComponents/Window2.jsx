import React from 'react'

const Window2 = () => {
  return (
    <div
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-right" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col  h-[50%] xl:h-[60%] w-full p-6 xl:ml-15 rounded-b-4xl'>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-7xl '>Registro de</h1>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-8xl '>Gastos</h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-4xl text-[var(--color-white)] mt-2 xl:mt-4 '>Organize suas despesas como ninguém!</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
       className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 overflow-y-auto justify-center'>
        <div className='m-8'>
          <form action="submit"  className='flex flex-col space-y-6 md:space-y-8 p-2'>
            <h2  className='text-3xl lg:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-white)]'>Registrar Gasto</h2>
            <label htmlFor="descGasto" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Descrição :</label>
            <input type="text" maxLength={40} name="descGasto" id="descGasto" placeholder='Descreva seu Gasto' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl  p-2 md:p-4' />
            <label htmlFor="valorGasto" className='text-md  text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Valor :</label>
            <input type="number" name="descGasto" id="descGasto" placeholder='Valor Gasto' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl p-2 md:p-4' />
            <a href="/" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[75%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4 xl:w-[60%] cursor-pointer self-center"><button>Registrar</button></a>
          </form>

        </div>
        <div className='flex flex-col bg-[var(--color-white)] space-y-4 md:space-y-6 xl:space-y-10 bg-none p-8 xl:p-12 rounded-4xl h-fit w-[80%]'>
          <h2 className='text-2xl md:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-green)]'>Gastos Registrados</h2>
          <ul className='text-lg md:text-2xl lg:text-3xl xl:text-5xl text-[var(--color-black)] font-text-alt space-y-2 xl:space-y-12 list-disc m-4 xl:p-5'>
            <li>Gasto 1</li>
            <li>Gasto 2</li>
          </ul>

        </div>

      </div>
    </div>
  )
}

export default Window2