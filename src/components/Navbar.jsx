import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[var(--color-gray)] min-h-23 w-auto top-0 pt-2 border-nav '>
      <div className='flex justify-around text-[var(--color-white)] text-1xl'>
        <div className='flex justify-center items-center'>
          <img src="./icon.png" alt="Logo Pork" className='h-18' />
          <h1 className='text-4xl font-title mt-3 ml-1'>Pork</h1>
        </div>
        <div className='flex space-x-10 items-center font-text'>
          <a href="$" className='transform hover:scale-110 ease-in-out duration-700'>Apresentação</a>
          <a href="$" className='transform hover:scale-110 ease-in-out duration-700'>Funcionamento</a>
          <a href="$" className='transform hover:scale-110 ease-in-out duration-700'>Sobre Nós</a>
        </div>
        <div className='flex justify-center items-center  text-[var(--color-white)] font-text space-x-4'>
          <a href="$" className='transform hover:scale-105 ease-in-out duration-400'>Login</a>
          <a href="$" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out"><button>Registre-se</button></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar