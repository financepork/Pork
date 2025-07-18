import React from 'react'
import { useState } from 'react'
import MainWindow from '../components/MainPageComponents/MainWindow.jsx'
import Window1 from '../components/MainPageComponents/Window1.jsx'
import Window2 from '../components/MainPageComponents/Window2.jsx'
import Window3 from '../components/MainPageComponents/Window3.jsx'
import AOS from 'aos';
import { useEffect } from 'react';

const MainPage = () => {
  const [openWindow, setOpenWindow] = useState('mainWindow')
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: false }); // once:true anima só uma vez
  }, []);

  return (
    <div className='h-max-screen overflow-hidden bg-gradient-to-tr from-[var(--color-green)] to-[var(--color-dark-green)] '>
      <div className={`${isOpen ? 'left-5.5' : 'left-1'} md:hidden h-15 w-15 justify-center items-center bg-[var(--color-black)] rounded-full fixed top-1  z-50 p-1`}>
        <button onClick={()=> setIsOpen(!isOpen)} className='flex justify-center items-center h-full w-full'>
          <img src="./icon.png" alt="" className='h-[100%]' />
        </button>
      </div>
      <aside className='hidden md:block xl:w-[13%] md:w-[18%] bg-[var(--color-gray)] h-full fixed top-0 left-0 border-aside p-4 '>
        <div className='flex flex-col h-full space-y-20 justify-around '>
          <div className='flex justify-center items-center'>
            <img src="./icon.png" alt="" className=' md:h-23 xl:h-28 object-cover' />
          </div>
          <div className='flex flex-col items-center space-y-10 font-text-alt'>

            <button onClick={() => setOpenWindow('Window1')}
              className='xl:text-2xl md:text-xl text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4'>Plano Econômico</button>

            <button onClick={() => setOpenWindow('Window2')}
              className='xl:text-2xl md:text-xl text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4'>Registro de Gastos</button>

            <button onClick={() => setOpenWindow('Window3')}
              className='xl:text-2xl md:text-xl text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4 '>Metas de Economia </button>



          </div>

          <div className='flex flex-col items-center w-full'>
            <a href="/" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out xl:w-[50%] md:w-[75%] text-center font-text-alt"><button>Sair</button></a>
          </div>


        </div>
        
      </aside>
      {isOpen && (
        <aside className='md:hidden absolute w-[25%] h-full bg-[var(--color-gray)] text-white font-title-alt flex flex-col items-center space-y-3 py-4 shadow-md z-1  transition-all duration-300 ease-out justify-around'>
          <div className='flex flex-col items-center  space-y-5 font-text-alt'>

            <button onClick={() =>{
              setOpenWindow('Window1');
             setIsOpen(false);
            }}
              className='text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4'>Plano Econômico</button>

            <button onClick={() => {
             setOpenWindow('Window2');
             setIsOpen(false);
            }

            }
              className=' text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4'>Registro de Gastos</button>

            <button onClick={() => {
              setOpenWindow('Window3');
             setIsOpen(false);
            }}
              className=' text-[var(--color-white)]  hover:text-[var(--color-green)] hover:bg-[var(--color-chumbo)] transition-colors duration-800 ease-in-out rounded-2xl p-4 '>Metas de Economia </button>

          </div>
          <div className='flex flex-col items-center w-full'>
            <a href="/" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[75%] text-center font-text-alt"><button>Sair</button></a>
          </div>
        </aside>
         )}
      
      <main className='xs:ml-[0%] xl:ml-[13%] md:ml-[18%] h-screen'>
        {openWindow == 'mainWindow' && <MainWindow setOpenWindow={setOpenWindow} />
          || openWindow == 'Window1' && <Window1 />
          || openWindow == 'Window2' && <Window2 />
          || openWindow == 'Window3' && <Window3 />}
      </main>

    </div>
  )
}

export default MainPage