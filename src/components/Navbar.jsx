import React from 'react'
import { useState } from 'react'
import { useFormState } from 'react-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className='flex justify-between bg-[var(--color-black)] text-[var(--color-white)] w-full h-auto p-3 border-nav'>
        <div className='flex justify-center items-center text-2xl font-title space-x-1'>
          <img src="./icon.png" alt="" className='h-9' />
          <h1>Pork</h1>
        </div>
        <div className='hidden md:flex text-2xl text-[var(--color-white)]'>
          
              <a href="">Teste 1</a>
              <a href="">Teste 2</a>
              <a href="">Teste 3</a>

        </div>
        <div className='hidden md:flex text-2xl text-[var(--color-white)]'>
  
              <a href="">Teste 1</a>
              <a href="">Teste 2</a>

            
        </div>
        <div className='flex justify-center items-center'>
          <button className='md:hidden text-[var(--color-white)] text-2xl flex flex-col justify-center items-center' onClick={()=> setIsOpen(!isOpen)}>
             <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300'></span>
          <span className='h-0.5 w-6 bg-[var(--color-white)] my-1 transition-all duration-300'></span>
          <span className='h-0.5 w-6 bg-[var(--color-white)] transition-all duration-300 '></span>
        
          </button>
        </div>
        {isOpen && (
            <ul className='text-2xl text-[var(--color-white)]'>
              <a href="">Teste 1</a>
              <a href="">Teste 2</a>
              <a href="">Teste 3</a>
            </ul>
        )
         }
      </nav>
  )
}

export default Navbar