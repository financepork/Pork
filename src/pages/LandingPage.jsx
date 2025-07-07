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
          <div className='space-y-13 flex flex-col items-start min-height-auto ml-19 pt-3' >
            <h1 className='text-[var(--color-white)] font-title text-8xl animate-fade-right animate-delay-200 animate-ease-in'>Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital</h1>
            <p className='text-4xl font-text text-[var(--color-green)] ml-1 animate-fade-right animate-delay-300 animate-ease-in'>Uma ferramenta criada para ajudar no controle de gastos.<br /> Organização e praticidade com seu cofrinho digital.</p>
            <div className='space-x-4 text-2xl flex items-center animate-fade-right animate-delay-400 animate-ease-in'>
              <a href="#" className='bg-[var(--color-green)] rounded-2xl p-4 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md transition-colors duration-400 ease-in-out'><button>Comece Já</button></a>
              <a href="#" className="border-3 rounded-2xl p-4 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text space-x-4 shadow-md transition-colors duration-400 ease-in-out"><button>Repositório</button></a>
              <img src="./github-icon.png" alt="Icone Github" className='h-10' />
            </div>

          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)]'>
        <div className=' flex items-center flex-col'>
          <h1 className='text-8xl font-title-alt text-[var(--color-white)] m-9 mt-18 animate-fade-up animate-delay-200 animate-ease-in'>Como Funciona?</h1>
          <Card text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus! 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
        </div>
      </section>
      <section className='bg-[var(--color-white)]'>
        <div className='flex flex-col space-y-20 pt-15'>
          <div>
            <h1 className='text-[var(--color-black)] font-title-alt text-7xl ml-20'>Principais Benefícios</h1>
          </div>
          <div className='flex justify-around'>
            <div  className='flex flex-col p-7 border-4 border-[var(--color-green)] rounded-3xl justify-center items-center w-100 animate-fade-right animate-delay-300 animate-ease-in'>
              <img src="./iconEco.png" alt="Icone Economia" className='h-80'/>
              <p className='font-title-alt text-3xl text-[var(--color-green)]'>Economia de Dinheiro</p>
            </div>
            <div className='flex flex-col justify-center items-center p-7 border-4 border-[var(--color-green)] rounded-3xl w-100 animate-fade-up animate-delay-300 animate-ease-in'>
              <img src="./iconOrg.png" alt="Icone Organização" className='h-80'/>
              <p className='font-title-alt text-3xl text-[var(--color-green)]'>Organização Financeira</p>
            </div>
            <div  className='flex flex-col justify-center items-center p-7 border-4 border-[var(--color-green)] rounded-3xl w-100 animate-fade-left animate-delay-300 animate-ease-in'>
              <img src="./iconExp.png" alt="Icone Pincel" className='h-80'/>
              <p className='font-title-alt text-3xl text-[var(--color-green)]'>Experiência Individual</p>
            </div>
          </div>
        </div>

      </section>
      <section className='bg-[var(--color-green)] flex justify-center items-center p-7 h-100 mb-25'>
        <div className=' flex flex-col ml-15 space-y-9'>
          <h1 className='text-9xl font-title-alt text-[var(--color-white)]'>Gosta de Economizar?</h1>
          <h2 className=' text-5xl font-title-alt text-[var(--color-white)] ml-3'>Então aproveite agora o seu mais novo Porquinho Digital!</h2>
          <a href="$" className="border-2 border-[var(--color-green)] text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] hover:border-[var(--color-white)] transition-colors duration-400 ease-in-out font-text w-70 text-2xl text-center animate-fade-up animate-delay-[200ms] animate-ease-out"><button>Registre-se</button></a>
        </div>
        <div className='h-full flex justify-center items-center p-5 animate-fade-up animate-delay-[400ms] animate-ease-out'>
          <aside>
            <img src="./fotoCofrinho.png" alt="Foto Atrativa" className='h-110 w-160 rounded-4xl ' />
          </aside>
        </div>

      </section>
      <section >
        <div className='space-y-13 min-height-auto ml-34 pt-3 mt-19 ' >
          <h1 className='text-[var(--color-white)] font-title-alt text-7xl'>Conheça os <span className='text-[var(--color-green)]'>Desenvolvedores</span> <span className='text-[var(--color-green)]'>:</span></h1>
        </div>
        <CardApresentacaoDir className="rounded-bl-full rounded-tl-full ml-15" DevName="Bernardo Soares" DevStack="Front-end Developer" DevDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" DevImgSrc='./fotodevsoares.jpg' />
        <CardApresentacaoEsq DevName="João Vitor Chaves" DevStack="Back-end Developer" DevDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" DevImgSrc='./fotoDevChaves.jpg' />
      </section>
      <LandingFooter />
    </div>


  )
}

export default LandingPage