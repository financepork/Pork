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
        <div className='items-end'>
          <button className='md:hidden text-[var(--color-white)] text-2xl flex justify-center items-center' onClick={()=> setIsOpen(isOpen)}>
            ☰
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