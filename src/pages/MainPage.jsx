
import { useState } from 'react'
import MainWindow from '../components/MainPageComponents/MainWindow.jsx'
import PlanejamentoEconomico from '../components/MainPageComponents/PlanejamentoEconomico.jsx'
import RegistroGastos from '../components/MainPageComponents/RegistroGastos.jsx'
import DefinirMetas from '../components/MainPageComponents/DefinirMetas.jsx'
import AOS from 'aos';
import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import axios from 'axios'
import HeaderPages from '../components/MainPageComponents/headerPages.jsx'
import Swal from 'sweetalert2'




const MainPage = () => {
  const [openWindow, setOpenWindow] = useState('mainWindow');

  const [isOpen, setIsOpen] = useState(false);

  const [userName, setUserName] = useState('Usuário')

  const errorMessage = (errorText,error) => {
    Swal.fire({
      title: 'Ocorreu um Erro',
      text: errorText,
      icon: 'error',
      color: 'var(--color-red)',
      background: 'var(--color-white)',
      footer: error || String(error),
      customClass: {
        popup: '!rounded-2xl !p-6 !shadow-xl',
        confirmButton: '!text-white-500 !bg-red-500 !border-white  '
      }
    })
  }

  const fetchUsername = async () => {
    try{
        const response = await axios.get('/usuario/info', {
        withCredentials: true
      })
        setUserName(response.data.nome)
      } catch (error){
        errorMessage('Erro ao contatar o servidor', error.response?.data)
      }
  }

  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);

  useEffect(()=> {
    fetchUsername()
  }, []);

  return (
    <main>
      <header className='h-max-screen overflow-x-hidden bg-gradient-to-tr from-[var(--color-green)] to-[var(--color-dark-green)] rounded-b-2xl '>
        <aside className=''>
          <div className='flex justify-between items-center h-auto p-2 ml-2 bg-none'>
            <div>
              <button className={`${isOpen ? 'hidden' : ''} text-[var(--color-white)] flex flex-col justify-center items-center cursor-pointer`} onClick={() => setIsOpen(true)}>
                <span className='h-1 md:h-1.5 xl:h-2 w-6 md:w-8 xl:w-12 bg-[var(--color-white)] transition-all duration-300 rounded-4xl'></span>
                <span className='h-1 md:h-1.5 xl:h-2 w-6 md:w-8 xl:w-12 bg-[var(--color-white)] my-1 transition-all duration-300 rounded-4xl'></span>
                <span className='h-1 md:h-1.5 xl:h-2 w-6 md:w-8 xl:w-12 bg-[var(--color-white)] transition-all duration-300 rounded-4xl'></span>
              </button>

            </div>
            <div className='h-15 justify-center items-center flex'>
              <button className='h-15 md:h-18 xl:h-28 xl:mt-7 cursor-pointer' onClick={() => setOpenWindow('mainWindow')}>
                <img src="./iconBranco.png" alt="Logo Pork" className='h-[90%]' />
              </button>
            </div>
          </div>

          {isOpen && (
            <aside data-aos="fade-right" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-in-out" className='top-0 fixed w-[45%] md:w-[30%] h-full bg-nav-app text-white font-title-alt flex flex-col items-center space-y-3 py-4 shadow-md z-1  transition-all duration-300 ease-out justify-between'>
              <div className='flex flex-col items-center justify-center mt-3.5'>
                <button className={`${isOpen ? '' : 'hidden'} text-[var(--color-white)] flex flex-col justify-center items-center`} onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="h-10 md:h-15 w-10 md:w-15  text-white cursor-pointer" />
                </button>
              </div>

              <div className='flex flex-col items-center  space-y-5 xl:space-y-10 font-text-alt'>

                <button onClick={() => {
                  setOpenWindow('PlanejamentoEconomico');
                  setIsOpen(false);
                }}
                  className='text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4 text-xl md:text-2xl xl:text-4xl cursor-pointer'>Plano Econômico</button>

                <button onClick={() => {
                  setOpenWindow('RegistroGastos');
                  setIsOpen(false);
                }

                }
                  className=' text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4 text-xl md:text-2xl xl:text-4xl cursor-pointer'>Registro de Gastos</button>

                <button onClick={() => {
                  setOpenWindow('DefinirMetas');
                  setIsOpen(false);
                }}
                  className=' text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4 text-xl md:text-2xl xl:text-4xl cursor-pointer'>Metas de Economia </button>

              </div>
              <div className='flex flex-col items-center w-full '>
                <a href="/" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[75%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4 xl:w-[60%] cursor-pointer"><button>Sair</button></a>
              </div>
            </aside>
          )}

        </aside>
        <div  data-aos="fade-right" data-aos-delay="300" data-aos-duration="900" data-aos-easing="ease-in">
          {openWindow == 'mainWindow' && <HeaderPages firstLineText={"Bem Vindo,"} secLineText={userName} altText={"Seja bem-vindo ao Pork, seu Cofrinho Digital!"}/>
          || openWindow == 'PlanejamentoEconomico' && <HeaderPages firstLineText={"Planejamento"} secLineText={"Econômico"} altText={"Defina como você vai gerenciar seu dinheiro!"}/>
          || openWindow == 'RegistroGastos' && <HeaderPages firstLineText={"Registro de"} secLineText={"Gastos"} altText={"Organize suas despesas como ninguém!"}/>
          || openWindow == 'DefinirMetas' && <HeaderPages firstLineText={"Metas"} secLineText={"e Objetivos"} altText={"Defina objetivos que incentivem a Economia de dinheiro!"}/> }
        </div>
            
        
      </header>
      <main className=' min-h-screen h-auto '>
        {openWindow == 'mainWindow' && <MainWindow setOpenWindow={setOpenWindow} />
          || openWindow == 'PlanejamentoEconomico' && <PlanejamentoEconomico />
          || openWindow == 'RegistroGastos' && <RegistroGastos />
          || openWindow == 'DefinirMetas' && <DefinirMetas />}
      </main>
    </main>
  )
}

export default MainPage