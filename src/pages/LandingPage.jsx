import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import LandingFooter from '../components/LandingFooter'
import CardApresentacaoEsq from '../components/CardApresentacaoEsq'
import CardApresentacaoDir from '../components/CardApresentacaoDir'

const LandingPage = () => {
  return (
    <div>
      <section className="bg-[url('/background.png')] bg-cover bg-center h-250 ">
        <Navbar />
        <div className='m-15'>
          <div className='space-y-13 flex flex-col items-start min-height-auto ml-19 pt-3 ' >
            <h1 className='text-[var(--color-white)] font-title text-8xl'>Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital</h1>
            <p className='text-4xl font-text text-[var(--color-green)] ml-1'>Uma ferramenta criada para ajudar no controle de gastos.<br /> Organização e praticidade com seu cofrinho digital.</p>
            <div className='space-x-4 text-2xl flex items-center'>
              <a href="#" className='bg-[var(--color-green)] rounded-2xl p-4 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md transition-colors duration-400 ease-in-out'><button>Comece Já</button></a>
              <a href="#" className="border-3 rounded-2xl p-4 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text space-x-4 shadow-md transition-colors duration-400 ease-in-out"><button>Repositório</button></a>
              <img src="./github-icon.png" alt="Icone Github" className='h-10' />
            </div>

          </div>
        </div>
      </section>
      <hr className='border-nav'/>
      <section className='bg-[var(--color-white)]'>
        <div className=' flex items-center flex-col'>
          <Card title="Como funciona?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
          <Card title="Motivação Principal " text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
        </div>
      </section>
      <section className='bg-[url("/bgPig.png")] bg-cover bg-[120px_80%] '>
        <div className='flex items-center'>
          <div className='space-y-13 flex flex-col items-start min-height-auto ml-35 pt-3 mt-15' >
            <h1 className='text-[var(--color-white)] font-title text-8xl'>Principais Benefícios</h1>
            <ul className='mt-7 text-[var(--color-white)] font-text text-5xl'>
              <li className='m-8'><span className='text-[var(--color-green)]'>-</span> Auxílio na <span className='text-[var(--color-green)]'>Economia de Dinheiro</span>.</li>
              <li className='m-8'><span className='text-[var(--color-green)]'>-</span> Melhor <span className='text-[var(--color-green)]'>Organização Financeira</span>.</li>
              <li className='m-8'><span className='text-[var(--color-green)]'>-</span> Fácil ajuste, <span className='text-[var(--color-green)]'>Experiência Individualizada</span>.</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
          <div className='space-y-13 min-height-auto ml-34 pt-3 mt-19 ' >
              <h1 className='text-[var(--color-white)] font-title text-8xl'>Conheça os <span className='bg-gradient-to-r from-[var(--color-white)] to-[var(--color-green)] bg-clip-text text-transparent'>Desenvolvedores</span> <span className='text-[var(--color-green)]'>:</span></h1>
          </div>
          <CardApresentacaoDir className="rounded-bl-full rounded-tl-full ml-15" DevName="Bernardo Soares" DevStack="Front-end Developer" DevDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" DevImgSrc='./fotodevsoares.jpg'/>
          <CardApresentacaoEsq DevName="João Vitor Chaves" DevStack="Back-end Developer" DevDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" DevImgSrc='./fotoDevChaves.jpg'/>
      </section>
        <LandingFooter />
    </div>


  )
}

export default LandingPage