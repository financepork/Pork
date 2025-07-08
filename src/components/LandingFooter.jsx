import React from 'react'

const LandingFooter = () => {
  return (
    <div  className='bg-[var(--color-gray)] min-h-130 border-footer'>
        <footer >
        <div className='flex flex-col items-center'>
        <div className='flex justify-center items-center mt-15'>
          <img src="./icon.png" alt="Logo Pork" className='h-25' />
          <h1 className='text-6xl font-title mt-3 ml-1 text-[var(--color-white)]'>Pork</h1>
        </div>
        <hr className='bg-[var(--color-lgray)] min-w-150 h-1 mt-6' />
        <p className='text-[var(--color-white)] mt-5 text-1xl'>© 2025 Bernardo Soares & João Vitor Chaves. Todos os direitos reservados.</p>
        <p className='text-[var(--color-white)] mt-3'>v1.0.0</p>
        </div>
          <div className='text-[var(--color-white)] mt-16 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='text-3xl font-title text-[var(--color-green)]'>E-mail para Contato:</h1>
            <p className='font-text-small mt-3 text-2xl'>financepork@gmail.com</p>
            </div>
            
          </div>
        </footer>
    </div>
  )
}

export default LandingFooter