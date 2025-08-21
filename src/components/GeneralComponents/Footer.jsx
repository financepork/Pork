import React from 'react'

const Footer = () => {
  return (
    <footer  className='bg-[var(--color-gray)] h-auto border-footer '>
        <div className='mb-5' >
        <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center h-auto mt-10'>
          <img src="/icons/icon.png" alt="Logo Pork" className='h-12 md:h-12 xl:h-25 object-cover' />
          <h1 className='text-2xl md:text-3xl xl:text-6xl font-title mt-3 ml-1 text-[var(--color-white)]'>Pork</h1>
        </div>
        <hr className='border-[var(--color-lgray)] min-w-[75%] xl:max-w-[75%] h-0.5 mt-6' />
          <p className='text-[var(--color-white)] text-xs md:text-sm mt-5 xl:text-1xl'>© 2025 Bernardo Soares & João Vitor Chaves.</p>
          <p className='text-[var(--color-white)] text-xs md:text-sm xl:text-1xl'>Todos os direitos reservados.</p>
        <p className='text-[var(--color-white)] mt-3'>v0.0.1</p>
        </div>
          <div className='text-[var(--color-white)] mt-16 flex justify-center items-center'>
          </div>
        </div>
    </footer>

  )
}

export default Footer