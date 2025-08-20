import React from 'react'
import { useState } from 'react'
import { useFormState } from 'react-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='relative'>
      <nav className='flex justify-between bg-[var(--color-black)] text-[var(--color-white)] w-full h-auto p-3 md:p-4 lg:p-5 xl:p-6 border-nav xl:space-x-8 lg:px-12 xl:px-24  '>
        <a href='/' className='flex justify-center items-center text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-title space-x-1'>
          <img src="public/icons/icon.png" alt="Icone Pork" className='h-9 md:h-12 xl:h-15 object-cover align-middle' />
          <h1 className='align-middle'>Pork</h1>
        </a>
        <div className='hidden md:flex text-sm xl:text-lg 2xl:text-2xl text-[var(--color-white)] justify-center items-center space-x-3 font-text'>

          <a href="/FazerLogin" className='transform hover:scale-105 ease-in-out duration-400'>Login</a>
          <a href="/RegistrarConta" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out xl:p-4"><button>Registre-se</button></a>


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
        <nav>
          <div className='absolute md:hidden w-full bg-[var(--color-black)] text-white font-title-alt flex flex-row justify-center items-center space-x-2  py-4 shadow-md z-50'>
            <a href="/FazerLogin" className="border-0 text-[var(--color-black)] bg-[var(--color-green)] rounded-2xl p-3 hover:bg-[var(--color-white)] hover:text-[var(--color-green)] transition-colors duration-400 ease-in-out w-[30%] text-center mb-0"><button>Login</button></a>
            <a href="/Register" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[30%] text-center"><button>Registre-se</button></a>
          </div>
        </nav>

      )
      }

    </header>



  )
}

export default Navbar