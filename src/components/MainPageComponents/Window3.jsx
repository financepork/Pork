import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Window3 = () => {

  const [inputMeta, setInputMeta] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputData, setInputData] = useState('')
  const [metas, setMetas] = useState([])

  const fetchMetas = async () => {
    try {
       const response = axios.get('/metas/consultar-metas',  {
        withCredentials: true
      })
          const metasUser = [...response.data.metas]
          setMetas([...metasUser])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMetas();
  }, [])

  const limpaInputs = () => {
    setInputData('')
    setInputMeta('')
    setInputValue('')
  }

  const sendMeta = async () => {
    try {
      const metaEnviada = {
       "meta": inputMeta,
        "valor": inputValue,
        "data": inputData
      }
      await axios.post('/metas/cadastrar-metas', metaEnviada,  {
        withCredentials: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  const registraMeta = async (e) => {
    e.preventDefault()
    await sendMeta()
    await fetchMetas()
    limpaInputs()
  }

  const deleteMeta = (id) => {
    //preciso ver como essa porra vai funcionar 
  }

  return (
    <main
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-16 overflow-y-none items-center justify-around'>
        <div className='m-8'>
          <form onSubmit={registraMeta} action='submit' className='flex flex-col space-y-6 md:space-y-8 p-2'>
            <h2 className='text-3xl lg:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-white)]'>Definir Meta</h2>
            <label htmlFor="descMeta" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Objetivo :</label>
            <input type="text" maxLength={40} name="descMeta" id="descMeta" placeholder='Coloque sua meta' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl  p-2 md:p-4' value={inputMeta} onChange={e => setInputMeta(e.target.value)} />
            <label htmlFor="valorMeta" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Objetivo :</label>
            <input type="text" maxLength={40} name="valorMeta" id="valorMeta" placeholder='Insira o Valor' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl  p-2 md:p-4' value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <label htmlFor="dataMeta" className='text-md  text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Data limite :</label>
            <input type="date" name="dataMeta" id="dataMeta" className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl p-2 md:p-4' value={inputData} onChange={e => setInputData(e.target.value)} />
            <button type='submit' className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[75%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4 xl:w-[60%] cursor-pointer self-center">Enviar</button>
          </form>

        </div>
        <div className='flex flex-col bg-[var(--color-white)] space-y-4 md:space-y-6 xl:space-y-10 bg-none p-8 xl:p-12 rounded-4xl h-fit min-w-[50%] mt-8'>
          <h2 className='text-2xl md:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-green)]'>Metas Pendentes</h2>
          <ul className='text-lg md:text-2xl lg:text-3xl xl:text-5xl text-[var(--color-black)] font-text-alt space-y-2 xl:space-y-12 list-disc m-4 xl:p-5'>
            {metas.map((meta) => (
              <div key={meta.id} className='flex flex-col justify-center items-center space-y-4 '>
                <li className='text-[var(--color-green)] flex flex-col space-y-4 border-2 p-4 rounded-4xl' >
                  <p>Meta: {meta.meta}</p>
                  <p>Valor: {meta.valor}</p>
                  <p>Data Limite: {meta.data}</p>
                </li>
                <div className='flex space-x-4 justify-center w-full'>
                  <button onClick={deleteMeta} className='bg-red-700 rounded-2xl'>
                    <XMarkIcon className="h-10 md:h-15 w-10 md:w-15  text-white cursor-pointer" />
                  </button>
                  <button className='bg-[var(--color-green)] rounded-2xl'>
                    <CheckIcon className="h-10 md:h-15 w-10 md:w-15  text-white cursor-pointer" />
                  </button>

                </div>
              </div>
            ))

            }
          </ul>

        </div>

      </div>
    </main>
  )
}

export default Window3