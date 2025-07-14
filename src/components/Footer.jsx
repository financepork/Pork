import React from 'react'

const Footer = () => {
  return (
    <div  className='bg-[var(--color-gray)] h-auto border-footer md:mt-8'>
        <footer className='mb-5' >
        <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center h-auto mt-10'>
          <img src="./icon.png" alt="Logo Pork" className='h-9 md:h-12 xl:h-25 object-cover' />
          <h1 className='text-lg md:text-3xl xl:text-6xl font-title mt-3 ml-1 text-[var(--color-white)]'>Pork</h1>
        </div>
        <hr className='bg-[var(--color-lgray)] min-w-[75%] xl:max-w-[75%] h-0.5 mt-6' />
          <p className='text-[var(--color-white)] text-xs md:text-sm mt-5 xl:text-1xl'>© 2025 Bernardo Soares & João Vitor Chaves.</p>
          <p className='text-[var(--color-white)] text-xs md:text-sm xl:text-1xl'>Todos os direitos reservados.</p>
        <p className='text-[var(--color-white)] mt-3'>v0.0.1</p>
        </div>
          <div className='text-[var(--color-white)] mt-16 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-md md:text-xl xl:text-2xl font-title text-[var(--color-green)]'>E-mail para Contato:</h1>
            <p className='font-text-small mt-3 text-sm md:text-lg xl:text-2xl'>financepork@gmail.com</p>
            </div>
            
          </div>
        </footer>
    </div>

  )
}

export default Footer