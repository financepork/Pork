import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import LandingFooter from '../components/LandingFooter'

const LandingPage = () => {
  return (
    <div>
      <section className="bg-[url('/background.png')] bg-cover bg-center h-250 ">
        <Navbar />
        <div className='m-15'>
          <div className='space-y-13 flex flex-col items-start min-height-auto ml-19 pt-3 ' >
            <h1 className='text-[var(--color-white)] font-title text-8xl'>Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital</h1>
            <p className='text-4xl font-text text-[var(--color-green)] ml-1'>Uma ferramenta criada para ajudar no controle de gastos.<br /> Organização e praticidade com seu cofrinho digital.</p>
            <div className='space-x-4 text-2xl'>
              <a href="#" className='bg-[var(--color-green)] rounded-2xl p-4 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md'><button>Comece Já</button></a>
              <a href="#" className="border-3 rounded-2xl p-4 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text space-x-4 shadow-md"><button >Repositório</button></a>
            </div>

          </div>
        </div>
      </section>
      <section>
        <div className=' flex items-center flex-col bg-[var(--color-chumbo)] m-7 mt-0 rounded-3xl'>
          <Card title="Como funciona?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
          <Card title="Porque usar o Pork?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
        </div>
      </section>
      <section>
        <div className='space-y-13 flex flex-col items-start min-height-auto ml-35 pt-3 mt-15' >
            <h1 className='text-[var(--color-white)] font-title text-8xl'>Principais Benefícios</h1>
            <ul className='mt-7 text-[var(--color-white)] font-text text-4xl'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        <LandingFooter />
      </section>
    </div>


  )
}

export default LandingPage