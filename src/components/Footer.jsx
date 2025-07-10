import React from 'react'

const Footer = () => {
  return (
    <div  className='bg-[var(--color-gray)] h-auto border-footer'>
        <footer className='mb-5' >
        <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center h-auto mt-10'>
          <img src="./icon.png" alt="Logo Pork" className='h-10' />
          <h1 className='text-lg font-title mt-3 ml-1 text-[var(--color-white)]'>Pork</h1>
        </div>
        <hr className='bg-[var(--color-lgray)] min-w-[75%] h-0.5 mt-6' />
          <p className='text-[var(--color-white)] text-xs mt-5'>© 2025 Bernardo Soares & João Vitor Chaves.</p>
          <p className='text-[var(--color-white)] text-xs'>Todos os direitos reservados.</p>
        <p className='text-[var(--color-white)] mt-3'>v1.0.0</p>
        </div>
          <div className='text-[var(--color-white)] mt-16 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-md font-title text-[var(--color-green)]'>E-mail para Contato:</h1>
            <p className='font-text-small mt-3 text-sm'>financepork@gmail.com</p>
            </div>
            
          </div>
        </footer>
    </div>

  )
}

export default Footer