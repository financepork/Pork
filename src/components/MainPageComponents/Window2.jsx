import { useEffect, useState } from 'react'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/solid'
import axios from 'axios'



const Window2 = () => {

  const [inputValorGasto, setInputValorGasto] = useState('')

  const [inputDescGasto, setInputDescGasto] = useState('')

  const [gastos, setGastos] = useState([])

  const errorMessage = (errorText,error) => {
    Swal.fire({
      title: 'Ocorreu um Erro',
      text: errorText,
      icon: 'error',
      color: 'var(--color-red)',
      background: 'var(--color-white)',
      footer: error.message || String(error),
      customClass: {
        popup: '!rounded-2xl !p-6 !shadow-xl',
        confirmButton: '!text-white-500 !bg-red-500 !border-white  '
      }
    })
  }

  const fetchGastos = async () => {

    try {
      const response = await axios.get('/despesas/consultar-despesas',  {
        withCredentials: true
      })
          const gastosGerais = [...response.data.todasasDespesas]
          setGastos([...gastosGerais])
    } catch (error) {
      errorMessage( 'Erro ao enviar informações ao servidor, tente novamente' ,error.response.data);
    }

  }

  useEffect(() => {
    fetchGastos()
  }, [])

  const limpaInputs = () => {
    setInputValorGasto('')
    setInputDescGasto('')
  }


  const sendGasto = async () => {
    const gastoEnviado = {
      "valor": inputValorGasto,
      "descricao": inputDescGasto,
      "categoria": 'FIXA'
    }
    try{
      await axios.post('/despesas/anotar-despesas', gastoEnviado,  {
        withCredentials: true
      })
    } catch(error) {
      errorMessage( 'Erro ao enviar informações ao servidor, tente novamente', error.response.data);
    }
    
  }

  const listarGasto = async (e) => {
    e.preventDefault();
    await sendGasto();
    await fetchGastos();
    limpaInputs();
  }

  //const deleteGasto = () => {
    //...
  //}

  return (
    <main
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-16 overflow-y-none items-center justify-around'>
        <div className='m-8'>
          <form action="submit" onSubmit={listarGasto} className='flex flex-col space-y-6 md:space-y-8 p-2'>
            <h2 className='text-3xl lg:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-white)]'>Registrar Gasto</h2>
            <label htmlFor="descGasto" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Descrição :</label>
            <input type="text" maxLength={40} name="descGasto" id="descGasto" placeholder='Descreva seu Gasto' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl  p-2 md:p-4' value={inputDescGasto} onChange={e => setInputDescGasto(e.target.value)} required />
            <label htmlFor="valorGasto" className='text-md  text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-2'>Valor :</label>
            <input type="number" name="valorGasto" id="valorGasto" placeholder='Valor Gasto' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg md:text-xl xl:text-2xl p-2 md:p-4' value={inputValorGasto} onChange={e => setInputValorGasto(e.target.value)} required />
            <button className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[75%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4 xl:w-[60%] cursor-pointer self-center" type='submit'>Registrar</button>
          </form>

        </div>
        <div className='flex flex-col bg-[var(--color-white)] space-y-4 md:space-y-6 xl:space-y-10 bg-none p-8 xl:p-12 rounded-4xl h-fit min-w-[50%] mt-8 self-center items-center'>
          <h2 className='text-2xl md:text-4xl xl:text-6xl text-center font-title-app text-[var(--color-green)]'>Gastos Registrados</h2>
          <ul className='text-lg md:text-2xl lg:text-3xl xl:text-5xl text-[var(--color-black)] font-text-alt space-y-2 xl:space-y-12 list-disc m-4 xl:p-5' >
            {gastos.map((gasto) => (
              <div key={gasto.id} className='flex flex-col justify-center items-center space-y-4 '>
                <li className='text-[var(--color-green)] flex flex-col space-y-4 border-2 p-4 rounded-4xl' >
                  <p>Gasto: {gasto.descricao}</p>
                  <p>Valor: {gasto.valor}</p>
                </li>
                <div className='flex space-x-4 justify-center w-full'>
                  <button onClick={deleteGasto} className='bg-red-700 rounded-2xl'>
                    <XMarkIcon className="h-10 md:h-15 w-10 md:w-15  text-white cursor-pointer" />
                  </button>
                </div>
              </div>
            )
            )}
          </ul>

        </div>

      </div>
    </main>
  )
}

export default Window2