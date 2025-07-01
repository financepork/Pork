import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import LandingFooter from '../components/LandingFooter'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section >
        <div className='flex m-15'>
          <div className='space-y-13 flex flex-col min-height-auto' >
            <h1 className='text-[var(--color-green)] font-title text-9xl'>Conheça o Pork</h1>
            <p className='text-4xl font-text text-[var(--color-dark-green)] ml-6'>O porquinho ideal para conseguir gerenciar melhor suas economias</p> 
          </div>
          <div>
          <aside className='flex items-center justify-center' >
            <img src="./image.png" alt="Logo Pork" className='h-130 w-auto mt-auto mb-auto'/>
          </aside>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col justify-center items-stretch'>
          <Card title="Como funciona?" text="texto random" imgPath="" />
          <Card title="Porque usar o Pork?" text="01:21 e eu nao pensei em como eu vou por um li so nesse card" imgPath="" />
        </div>
      </section>
      <section>
        <h1>Gostou do nosso trabalho?</h1>
        <p>Registre-se abaixo e deixe esse porquinho bem mais feliz!</p>
        <a href="#"><button>Registrar</button></a>
        <LandingFooter />


      </section>
    </div>


  )
}

export default LandingPage