import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import CardApresentacaoDir from '../components/CardApresentacaoDir'
import CardApresentacaoEsq from '../components/CardApresentacaoEsq'
import AOS from 'aos';
import { useEffect } from 'react';
import SmallCard from '../components/SmallCard'



const LandingPage = () => {
  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);

  return (
    <div>
      <section className='h-auto bg-[url("/background.png")] bg-cover bg-center 2xl:min-h-screen'>
        <Navbar />
        <div className='m-5 flex flex-col space-y-5 xl:space-y-8 md:ml-[5%] xl:mt-9'>
          <div className='flex flex-col text-[var(--color-white)] space-y-4 xl:space-y-8'>
            <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
              className='font-title text-5xl md:text-6xl xl:text-8xl max-w-[85%] text-[var(--color-white)]'>
              Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital
            </h1>
            <div className='max-w-[75%] space-y-1 ml-[1%]'>
              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out"
                className='font-text text-md md:text-lg xl:text-3xl text-[var(--color-green)]'>
                Uma ferramenta criada para ajudar no controle de gastos.
              </p>
              <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out"
                className='font-text text-md md:text-lg xl:text-3xl  text-[var(--color-green)]'>
                Organização e praticidade com seu cofrinho digital.
              </p>
            </div>

          </div>
          <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500" data-aos-easing="ease-in-out"
            className='flex space-x-3 font-text md:ml-[1%] items-center h-auto'>
            <a href="/Register" className='bg-[var(--color-green)] border-0 p-2 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md 
          rounded-2xl transition-colors duration-400 ease-in-out w-[26%] xl:w-[15%] flex justify-center items-center text-sm md:text-md xl:text-2xl'><button>Comece Já</button></a>
            <a href="https://github.com/dev-Chaves/Pork" className='border-3 rounded-2xl p-2 sm:p-2 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text shadow-md transition-colors duration-400 ease-in-out w-[26%] xl:w-[15%] xl:h-[100%] flex justify-center items-center text-sm md:text-md xl:text-2xl '><button>Repositório</button></a>
            <img src="./github-icon.png" alt="Icone Github" className='h-12 md:h-10' />
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)] h-auto flex justify-center items-center 2xl:min-h-screen'>
        <div className='flex items-center md:justify-center flex-col h-auto'>
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
            className='font-title-alt text-[var(--color-white)] mt-5 xl:mt-0 text-3xl md:text-6xl'>Como Funciona?</h1>
          <Card text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium enim in, voluptas soluta quis veritatis, rem odio libero dolor doloremque doloribus assumenda architecto reprehenderit tempore dolore qui, officia possimus!" imgPath="" />
        </div>
      </section>
      <section className='bg-[var(--color-white)] h-auto 2xl:min-h-screen'>
        <div className='flex justify-center flex-col items-center space-y-8 md:space-y-15 xl:space-y-20  p-6'>
          <div>
            <h1 className='text-[var(--color-black)] font-title-alt text-3xl md:text-5xl xl:text-6xl xl:mt-13'>Principais Benefícios</h1>
          </div>
          <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500" data-aos-easing="ease-in-out"
            className='flex flex-col xl:flex-row space-y-8 xl:space-x-8 w-[60%] h-auto md:m-4'>
            <SmallCard imgPath='./iconEco.png' text='Economia de Dinheiro' />
            <SmallCard imgPath='./iconExp.png' text='Experiência Individual' />
            <SmallCard imgPath='./iconOrg.png' text='Organização Financeira' />
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)] max-h-auto md:h-auto 2xl:min-h-screen'>
        <div className='flex flex-col justify-center items-center space-y-8 h-auto'>
          <div className='flex flex-col justify-center items-center w-[80%] mt-8 space-y-3 xl:mt-20 '>
            <h1 className='font-title-alt text-[var(--color-white)] text-3xl md:text-6xl xl:text-8xl'>Gosta de Economizar?</h1>
            <p className='font-text-alt  text-[var(--color-white)] ml-3 text-lg md:text-2xl xl:text-4xl'>Aproveite agora o seu mais novo Porquinho Digital!</p>

          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out" className='flex justify-center items-center'>
            <img src="./fotoCofrinho.png" alt="" className='w-[70%] md:w-[50%] xl:w-[34%] rounded-3xl' />
          </div>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-in-out" className='w-auto xl:mb-36 lg:mb-36 '>
            <a href="/Register" className="border-2 border-[var(--color-green)] text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-4 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] hover:border-[var(--color-white)] transition-colors duration-400 ease-in-out font-text text-center w-[50%] text-sm md:text-lg "><button className='w-auto'>Venha Economizar uma Grana</button></a>
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-black)] max-h-auto 2xl:min-h-screen'>
        <div className='flex flex-col h-auto'>
          <div className='mt-5 ml-5 flex md:justify-center items-center xl:m-10'>
            <h1 className='text-[var(--color-white)] font-title-alt text-3xl md:text-5xl xl:text-6xl'>Conheça os <span className='text-[var(--color-green)]'>Desenvolvedores</span> <span className='text-[var(--color-green)]'>:</span></h1>
          </div>
          <CardApresentacaoDir DevName="Bernardo Soares" DevStack="Front-end Developer" DevImgSrc='./fotodevsoares.jpg' devInsta='https://www.instagram.com/__soaresbernardo/' devGithub='https://github.com/Dev-Soares' devLinkedin='https://www.linkedin.com/in/bernardo-soares-150096364' />
          <CardApresentacaoEsq DevName="João Vitor Chaves" DevStack="Back-end Developer" DevImgSrc='./fotoDevChaves.jpg' devGithub='https://github.com/dev-Chaves' devInsta='https://www.instagram.com/user_joaocs/' devLinkedin='https://www.linkedin.com/in/jo%C3%A3o-vitor-chaves-silva-9412912b7' />
        </div>

      </section>
      <Footer />
    </div>


  )
}

export default LandingPage