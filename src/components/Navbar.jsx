import React from 'react'
import { useState } from 'react'
import { useFormState } from 'react-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative'>
      <nav className='flex justify-between md:justify-around bg-[var(--color-black)] text-[var(--color-white)] w-full h-auto p-3 border-nav lg:space-x-8'>
        <div className='flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-title space-x-1'>
          <img src="./icon.png" alt="" className='h-9 md:h-12 lg:h-15' />
          <h1 className='align-middle'>Pork</h1>
        </div>
        <div className='hidden md:flex text-sm lg:text-lg text-[var(--color-white)] justify-center items-center space-x-3 lg:space-x-8 font-text'>

           <a href="LandingPage.jsx" className='transform hover:scale-110 ease-in-out duration-700'>Apresentação</a>
          <a href="LandingPage.jsx" className='transform hover:scale-110 ease-in-out duration-700'>Funcionamento</a>
          <a href="LandingPage.jsx" className='transform hover:scale-110 ease-in-out duration-700'>Sobre Nós</a>

        </div>
        <div className='hidden md:flex text-sm lg:text-lg text-[var(--color-white)] justify-center items-center space-x-3 font-text'>

          <a href="$" className='transform hover:scale-105 ease-in-out duration-400'>Login</a>
          <a href="$" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out"><button>Registre-se</button></a>


        </div>
        <div className='flex md:hidden justify-center items-center'>
          <button className='md:hidden text-[var(--color-white)] text-2xl flex flex-col justify-center items-center' onClick={() => setIsOpen(!isOpen)}>
            <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300'></span>
            <span className='h-0.5 w-6 bg-[var(--color-white)] my-1 transition-all duration-300'></span>
            <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300 '></span>

          </button>
        </div>
      </nav>
      {isOpen && (
        <div>
          <div className='absolute md:hidden w-full bg-[var(--color-black)] text-white flex flex-col items-center space-y-3 py-4 shadow-md animate-slide-down z-1  transition-all duration-300 ease-out'>

            <a href="LandingPage.jsx">Apresentação</a>
            <a href="LandingPage.jsx">Funcionamento</a>
            <a href="LandingPage.jsx">Sobre Nós</a>
          </div>
        </div>

      )
      }

    </header>



  )
}

export default Navbar