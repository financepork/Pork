import React from 'react'
import Navbar from '../components/GeneralComponents/Navbar'
import Footer from '../components/GeneralComponents/Footer'
import CardApresentacaoDir from '../components/LandingComponents/CardApresentacaoDir'
import CardApresentacaoEsq from '../components/LandingComponents/CardApresentacaoEsq'
import AOS from 'aos';
import { useEffect } from 'react';
import CarouselLanding from '../components/LandingComponents/CarouselLanding'





const LandingPage = () => {
  useEffect(() => {
    AOS.init({ once: true }); // once:true anima só uma vez
  }, []);

  return (
    <main className='scroll-smooth'>
      <section className='h-auto bg-[url("public/backgrounds/background.png")] bg-cover bg-center min-h-200 2xl:min-h-screen'>
        <Navbar />
        <div data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500" data-aos-easing="ease-in-out"
          className='m-5 p-1 flex flex-col space-y-5 xl:space-y-8 md:ml-[5%] xl:mt-9'>
          <div className='flex flex-col text-[var(--color-white)] space-y-4 xl:space-y-8 max-w-[80%]'>
            <h1
              className='font-title text-5xl md:text-6xl lg:text-7xl  xl:text-8xl max-w-[85%] text-[var(--color-white)]'>
              Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital
            </h1>
            <div className='max-w-[75%] space-y-1 '>
              <p
                className='font-text text-md md:text-lg xl:text-3xl text-[var(--color-green)]'>
                Uma ferramenta criada para ajudar no controle de gastos.
              </p>
              <p
                className='font-text text-md md:text-lg xl:text-3xl  text-[var(--color-green)]'>
                Organização e praticidade com seu cofrinho digital.
              </p>
            </div>

          </div>
          <div
            className='flex space-x-3 font-text items-center h-auto'>
            <a href="/Register" className='bg-[var(--color-green)] border-0 p-2 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md 
          rounded-2xl transition-colors duration-400 ease-in-out w-[30%] xl:w-[15%] flex justify-center items-center text-md md:text-md xl:text-2xl min-h-13 lg:min-h-16'><button>Comece Já</button></a>
            <a href="https://github.com/dev-Chaves/Pork" target="_blank" rel="noopener noreferrer" className='border-3 rounded-2xl p-2 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text shadow-md transition-colors duration-400 ease-in-out w-[30%] xl:w-[15%] xl:h-[100%] flex justify-center items-center text-md md:text-md xl:text-2xl min-h-13 lg:min-h-16 '>Repositório</a>

          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)] h-auto w-full flex flex-col items-center justify-center p-8 md:p-10 lg:p-12 '>
        <div className='flex items-center flex-col h-auto p-2'>
          <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
            className='font-title-alt text-[var(--color-white)] mt-5 xl:mt-0 text-3xl md:text-5xl lg:text-6xl text-center'>Tudo o que você precisa e muito mais. </h1>

        </div>
        <div className='w-full flex justify-center items-center'>
          <CarouselLanding />
        </div>

      </section>
      <section className='bg-[var(--color-white)] h-auto w-full p-8 lg:p-12 '>
        <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
          <div className=' md:w-[150%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
            <img src="public/svg/economia.jpg" alt="Foto Economia" loading="lazy" className='w-full max-w-[99%] h-auto object-contain mx-auto rounded-3xl shadow-2xl' />
          </div>
          <div className='text-[var(--color-green)] flex flex-col justify-center space-y-3 md:space-y-4 xl:space-y-6 md:m-4 2xl:m-12'>
            <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Economia de Dinheiro</h2>
            <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'> Com o Pork, a economia de dinheiro deixa de ser um desafio e se torna um hábito recompensador, graças aos nossos planos predefinidos</p>
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-gray-light)] h-auto w-full p-8 lg:p-12  '>
        <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>

          <div className='text-[var(--color-black)] flex flex-col justify-center space-y-3 md:space-y-4 xl:space-y-6 xl:m-8 md:m-4 2xl:m-12'>
            <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Experiência Individual</h2>
            <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'> Personalize metas de acordo com os seus sonhos, monitore seus ganhos e despesas de uma forma que faça sentido. Tudo foi pensado para se adaptar a você.</p>
          </div>
          <div className=' md:w-[150%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
            <img src="public/svg/experiencia.jpg" alt="Foto Economia" className='w-full max-w-[99%] h-auto object-contain mx-auto rounded-3xl shadow-2xl' loading="lazy" />
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-chumbo)] h-auto w-full p-8 lg:p-12 '>
        <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
          <div className=' md:w-[150%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
            <img src="public/svg/organizacao.jpg" alt="Foto Economia" className='w-full max-w-[99%] h-auto object-contain mx-auto rounded-3xl shadow-2xl' loading="lazy"/>
          </div>
          <div className='text-[var(--color-white)] flex flex-col justify-center space-y-3 md:space-y-4 xl:space-y-6 md:m-4 2xl:m-12'>
            <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Organização Financeira</h2>
            <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'> Tenha uma visão clara de onde seu dinheiro está indo, categorize despesas de forma automática e gerencie suas contas em um só lugar.</p>
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)] h-auto w-full p-8 lg:p-12 '>
        <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full'>

          <div className='text-[var(--color-white)] flex flex-col justify-center space-y-3 md:space-y-4 xl:space-y-6  md:m-4 2xl:m-6'>
            <h2 className='text-center font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>A Economia deixou de ser um desafio </h2>
            <p className='text-center font-title-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'>Apenas alguns cliques, sua vida financeira de cara nova</p>
            <a href="/register" target="_blank" rel="noopener noreferrer" className='border-3 rounded-2xl p-2 hover:bg-[var(--color-white)] hover:border-transparent hover:text-[var(--color-green)] text-[var(--color-white)] font-text shadow-md transition-all duration-500 ease-in-out w-[60%] xl:w-[50%] 2xl:w-[40%] xl:h-[100%] flex justify-center items-center text-md md:text-md xl:text-2xl md:min-h-15 lg:text-lg self-center text-center'>Venha economizar</a>
          </div>
          <div className=' md:w-[100%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
            <img src="public/svg/desafio.jpg" alt="Foto Economia" className='w-full max-w-[99%] xl:max-w-[80%] h-auto object-contain mx-auto rounded-3xl shadow-2xl' loading="lazy" />
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-black)] max-h-auto h-auto py-6 2xl:min-h-screen'>
        <div className='flex flex-col justify-center items-center h-auto'>
          <div className='mt-5 ml-5 flex md:justify-center items-center xl:m-10 max-w-[80%] self-center'>
            <h1 className='text-[var(--color-white)] font-title-alt text-3xl md:text-5xl xl:text-6xl'>Conheça os <span className='text-[var(--color-green)]'>Desenvolvedores</span></h1>
          </div>
          <CardApresentacaoDir DevName="Bernardo Soares" DevStack="Front-end Developer" DevImgSrc='public/svg/fotodevsoares.jpg' devInsta='https://www.instagram.com/__soaresbernardo/' devGithub='https://github.com/Dev-Soares' devLinkedin='https://www.linkedin.com/in/bernardo-soares-150096364' />
          <CardApresentacaoEsq DevName="João Vitor Chaves" DevStack="Back-end Developer" DevImgSrc='public/svg/fotoDevChaves.jpg' devGithub='https://github.com/dev-Chaves' devInsta='https://www.instagram.com/user_joaocs/' devLinkedin='https://www.linkedin.com/in/jo%C3%A3o-vitor-chaves-silva-9412912b7' />
        </div>

      </section>
      <Footer />
    </main>


  )
}

export default LandingPage