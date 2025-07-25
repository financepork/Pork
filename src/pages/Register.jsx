import React from 'react'
import Forms from '../components/Forms'
import Navbar from '../components/Navbar'
import { div } from 'framer-motion/client'
import Footer from '../components/Footer'
 

const Register = () => {
  return (
    <main>
      <Navbar />
      <div 
       className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
        <Forms mainText='Registre-se' altText='Insira seus dados' />
      </div>
      <Footer />
    </main>
    
  )
}

export default Register