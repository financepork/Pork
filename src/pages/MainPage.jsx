import React from 'react'
import { useState } from 'react'
import MainWindow from '../components/MainPageComponents/MainWindow.jsx'
import Window1 from '../components/MainPageComponents/Window1.jsx'  
import Window2 from '../components/MainPageComponents/Window2.jsx'
import Window3 from '../components/MainPageComponents/Window3.jsx'

const MainPage = () => {
  const [ openWindow, setOpenWindow ] = useState('mainWindow')

  return (
    <div className='h-max-screen '>
      <aside className='hidden md:block xl:w-[13%] md:w-[18%] bg-[var(--color-gray)] h-full fixed top-0 left-0 border-aside p-4 '>
        <div className='flex flex-col h-full space-y-20 justify-around '>
          <div className='flex justify-center items-center'>
            <img src="./icon.png" alt="" className=' md:h-23 xl:h-28 object-cover' />
          </div>
          <div className='flex flex-col items-center space-y-10 font-text-alt'>

            <button onClick={() => setOpenWindow('Window1')}
             className='xl:text-2xl md:text-xl text-[var(--color-white)]'>Plano Econômico</button>

            <button onClick={() => setOpenWindow('Window2')}
             className='xl:text-2xl md:text-xl text-[var(--color-white)]'>Registro de Gastos</button>

            <button onClick={() => setOpenWindow('Window3')}
             className='xl:text-2xl md:text-xl text-[var(--color-white)]'>Metas </button>

             

          </div>

          <div className='flex flex-col items-center w-full'>
              <a href="/Register" className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out xl:w-[50%] md:w-[75%] text-center font-text-alt"><button>Sair</button></a>
          </div>
          

        </div>
      </aside>
      <main className='xs:ml-[0%] xl:ml-[13%] md:ml-[18%] h-screen'>
        { openWindow == 'mainWindow' && <MainWindow setOpenWindow={setOpenWindow} />
          || openWindow == 'Window1' && <Window1 />
          || openWindow == 'Window2' && <Window2 />
          || openWindow == 'Window3' && <Window3 /> }
      </main>

    </div>
  )
}

export default MainPage