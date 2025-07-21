import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Verify = () => {
    return (
        <div>
            <Navbar />
            <div
                className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center w-[90%] h-full space-y-4'>
                    <h1 className='text-[var(--color-white)] text-center font-title-alt text-4xl md:text-6xl xl:text-7xl'>Sua conta foi <span className='text-[var(--color-green)]'>Verificada!</span></h1>
                    <p className='text-[var(--color-white)] font-text-alt text-center text-sm md:text-xl lg:text-2xl'>Agora você pode curtir o seu cofrinho digital!</p>
                    <a href="/login" className='bg-[var(--color-green)] border-0 p-2 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md 
          rounded-2xl transition-colors duration-400 ease-in-out w-[50%] xl:w-[15%] flex justify-center items-center text-md md:text-3xl xl:text-3xl '><button>Login</button></a>

                </div>


            </div>
            <Footer />
        </div>
    )
}

export default Verify