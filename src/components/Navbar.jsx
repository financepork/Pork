import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[var(--color-green)] min-h-24 w-370 mx-10 my-8 rounded-4xl '>
      <div className='flex justify-between text-[var(--color-white)] '>
        <h1 className='text-5xl p-4 pl-8 ml-4 m-2 font-title'>Pork</h1>
        <div className='m-4 text-3xl flex font-text items-center pr-12 space-x-8'>
            <a href="$">Sobre</a>
            <a href="$">Registrar</a>
            <a href="$">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar