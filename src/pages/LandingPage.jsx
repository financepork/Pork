import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardApresentacaoDir from '../components/CardApresentacaoDir'
import CardApresentacaoEsq from '../components/CardApresentacaoEsq'
import AOS from 'aos';
import { useEffect } from 'react';
import CarouselLanding from '../components/CarouselLanding'




const LandingPage = () => {
  useEffect(() => {
    AOS.init({ once: true }); // once:true anima só uma vez
  }, []);

  return (
    <main className='scroll-smooth'>
      <section className='h-auto bg-[url("/background.png")] bg-cover bg-center min-h-200 2xl:min-h-screen'>
        <Navbar />
        <div className='m-5 p-1 flex flex-col space-y-5 xl:space-y-8 md:ml-[5%] xl:mt-9'>
          <div className='flex flex-col text-[var(--color-white)] space-y-4 xl:space-y-8 max-w-[80%]'>
            <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
              className='font-title text-5xl md:text-6xl lg:text-7xl  xl:text-8xl max-w-[85%] text-[var(--color-white)]'>
              Conheça o <span className='text-[var(--color-green)]'>Pork</span>, seu auxiliar financeiro digital
            </h1>
            <div className='max-w-[75%] space-y-1 '>
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
            className='flex space-x-3 font-text items-center h-auto'>
            <a href="/Register" className='bg-[var(--color-green)] border-0 p-2 font-text hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md 
          rounded-2xl transition-colors duration-400 ease-in-out w-[26%] xl:w-[15%] flex justify-center items-center text-sm md:text-md xl:text-2xl min-h-15'><button>Comece Já</button></a>
            <a href="https://github.com/dev-Chaves/Pork" target="_blank" rel="noopener noreferrer" className='border-3 rounded-2xl p-2 hover:bg-[var(--color-green)] hover:border-[var(--color-green)] text-[var(--color-white)] font-text shadow-md transition-colors duration-400 ease-in-out w-[26%] xl:w-[15%] xl:h-[100%] flex justify-center items-center text-sm md:text-md xl:text-2xl min-h-15 '>Repositório</a>
            
          </div>
        </div>
      </section>
      <section className='bg-[var(--color-green)] h-auto w-full flex flex-col items-center justify-center p-8 md:p-10 lg:p-12 '>
        <div className='flex items-center flex-col h-auto p-2'>
          <h1 data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-in-out"
            className='font-title-alt text-[var(--color-white)] mt-5 xl:mt-0 text-3xl md:text-6xl lg:text-6xl text-center'>Tudo o que você precisa e muito mais. </h1>
            
        </div>  
        <div className='w-full flex justify-center items-center'>
          <CarouselLanding />    
        </div>     
          
      </section>
        <section className='bg-[var(--color-white)] h-auto w-full p-8 lg:p-12 '>
          <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
            <div className=' md:w-[170%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
                <img src="../economia.jpg" alt="Foto Economia" className='h-[80%] w-[100%] md:w-[190%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  md:h-60 lg:h-60 xl:h-75 2xl:h-85 rounded-3xl shadow-2xl' />
            </div>
            <div className='text-[var(--color-green)] flex flex-col justify-center space-y-3 md:m-4 2xl:m-12'>
              <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
              <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum in pariatur voluptatem maxime possimus sequi eveniet modi aliquam, sit, aperiam inventore incidunt id ad hic nesciunt, ipsam iusto neque. Similique.</p>
            </div>
          </div>
      </section>
      <section className='bg-[var(--color-gray-light)] h-auto w-full p-8 lg:p-12  '>
          <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
           
            <div className='text-[var(--color-black)] flex flex-col justify-center space-y-3 md:m-4 2xl:m-12'>
              <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
              <p className='text-left font-text text-lg md:text-xl lg:text-2xl xl:text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum in pariatur voluptatem maxime possimus sequi eveniet modi aliquam, sit, aperiam inventore incidunt id ad hic nesciunt, ipsam iusto neque. Similique.</p>
            </div>
             <div className=' md:w-[170%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
                <img src="../experiencia.jpg" alt="Foto Economia" className='h-[80%] w-[100%] md:w-[190%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  md:h-60 lg:h-60 xl:h-75 2xl:h-85 rounded-3xl shadow-2xl' />
            </div>
          </div>
      </section>
      <section className='bg-[var(--color-chumbo)] h-auto w-full p-8 lg:p-12 '>
          <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
            <div className=' md:w-[170%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
                <img src="../organizacao.jpg" alt="Foto Economia" className='h-[80%] w-[100%] md:w-[190%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  md:h-60 lg:h-60 xl:h-75 2xl:h-85 rounded-3xl shadow-2xl' />
            </div>
            <div className='text-[var(--color-white)] flex flex-col justify-center space-y-3 md:m-4 2xl:m-12'>
              <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
              <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum in pariatur voluptatem maxime possimus sequi eveniet modi aliquam, sit, aperiam inventore incidunt id ad hic nesciunt, ipsam iusto neque. Similique.</p>
            </div>
          </div>
      </section>
      <section className='bg-[var(--color-green)] h-auto w-full p-8 lg:p-12 '>
          <div className='flex flex-col md:flex-row justify-center 2xl:justify-around gap-3 lg:gap-4 xl:gap-5 2xl:gap-5  items-center h-auto w-full md:'>
            <div className=' md:w-[170%] xl:w-[100%] 2xl:w-[50%] h-full  m-4 flex justify-center items-center '>
                <img src="../desafio.jpg" alt="Foto Economia" className='h-[80%] w-[100%] md:w-[190%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]  md:h-60 lg:h-60 xl:h-75 2xl:h-85 rounded-3xl shadow-2xl' />
            </div>
            <div className='text-[var(--color-white)] flex flex-col justify-center space-y-3 md:m-4 2xl:m-12'>
              <h2 className='text-left font-title-alt text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing </h2>
              <p className='text-left font-text-alt text-lg md:text-xl lg:text-2xl xl:text-3xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum in pariatur voluptatem maxime possimus sequi eveniet modi aliquam, sit, aperiam inventore incidunt id ad hic nesciunt, ipsam iusto neque. Similique.</p>
              <a href="/register" target="_blank" rel="noopener noreferrer" className='border-3 rounded-2xl p-2 hover:bg-[var(--color-white)] hover:border-none hover:text-[var(--color-green)] text-[var(--color-white)] font-text shadow-md transition-colors duration-400 ease-in-out w-[60%] xl:w-[50%] 2xl:w-[30%] xl:h-[100%] flex justify-center items-center text-sm md:text-md xl:text-2xl min-h-15 '>Venha economizar uma grana</a>
            </div>
          </div>
      </section>
      <section className='bg-[var(--color-green)] min-h-fit w-full h-full p-5 py-10'>
       
      </section>
      <section className='bg-[var(--color-black)] max-h-auto h-auto py-6 2xl:min-h-screen'>
        <div className='flex flex-col justify-center items-center h-auto'>
          <div className='mt-5 ml-5 flex md:justify-center items-center xl:m-10 max-w-[80%] self-center'>
            <h1 className='text-[var(--color-white)] font-title-alt text-3xl md:text-5xl xl:text-6xl'>Conheça os <span className='text-[var(--color-green)]'>Desenvolvedores</span></h1>
          </div>
          <CardApresentacaoDir DevName="Bernardo Soares" DevStack="Front-end Developer" DevImgSrc='./fotodevsoares.jpg' devInsta='https://www.instagram.com/__soaresbernardo/' devGithub='https://github.com/Dev-Soares' devLinkedin='https://www.linkedin.com/in/bernardo-soares-150096364' />
          <CardApresentacaoEsq DevName="João Vitor Chaves" DevStack="Back-end Developer" DevImgSrc='./fotoDevChaves.jpg' devGithub='https://github.com/dev-Chaves' devInsta='https://www.instagram.com/user_joaocs/' devLinkedin='https://www.linkedin.com/in/jo%C3%A3o-vitor-chaves-silva-9412912b7' />
        </div>

      </section>
      <Footer />
    </main>


  )
}

export default LandingPage