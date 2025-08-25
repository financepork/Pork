import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'



const RegistroGastos = () => {

  const [inputValorGasto, setInputValorGasto] = useState('')

  const [inputDescGasto, setInputDescGasto] = useState('')

  const [gastos, setGastos] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const loadingMessage = () => {
    Swal.fire({
      title: 'Carregando Dados...',
      text: 'Por favor, aguarde.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: 'custom-swal'
      }
    });
  }

  useEffect(() => {
    if (isLoading) {
      loadingMessage()
    } else {
      Swal.getPopup() && Swal.getPopup().classList.contains('custom-swal') ? Swal.close() : ''
    }

  }, [isLoading])

  const errorMessage = (errorText, error) => {
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

  const fetchGastos = async () => {

    try {
      const response = await axios.get('/despesas/consultar-despesas', {
        withCredentials: true
      })
      const gastosGerais = [...response.data.list]
      setGastos([...gastosGerais])
      return gastosGerais
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
      return [];
    }

  }


  const getInitialValues = async () => {
    setIsLoading(true)
    await fetchGastos()
    setIsLoading(false)
  }

  useEffect(() => {
    getInitialValues()
  }, [])

  const limpaInputs = () => {
    setInputValorGasto('')
    setInputDescGasto('')
  }


  const sendGasto = async () => {
    const gastoEnviado = [
      {
        "valor": inputValorGasto,
        "descricao": inputDescGasto,
        "categoria": 'FIXA'
      }
    ]
    try {
      await axios.post('/despesas/anotar-despesas', gastoEnviado, {
        withCredentials: true
      })
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
    }

  }

  const listarGasto = async (e) => {
    e.preventDefault();
    try {
      if (inputDescGasto === '' || inputValorGasto === '') return errorMessage('Por favor, preencha todos os campos', 'informações incompletas')
      setIsLoading(true)
      await sendGasto();
      await fetchGastos();
      limpaInputs();
    } finally {
      setIsLoading(false)
      
    }

  }

  const deleteGasto = async (id) => {
    setIsLoading(true)
    try {
      await axios.delete(`/despesas/apagar-despesa/${id}`, {
        withCredentials: true
      })
     await fetchGastos()
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao remover gasto, tente novamente', error.response?.data || error?.message || String(error));
    } finally {
      
      setIsLoading(false)

    }
  }

  return (
    <main
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 xl:p-16 overflow-y-none items-center justify-around'>
        
        <div className='bg-[var(--color-white)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-7 xl:p-12 min-h-[70%] rounded-xl gap-8 xl:gap-16'>
          <div className='flex items-center w-full h-full space-x-1.5 md:space-x-2 xl:space-x-4'>
            <img src="/icons/registroGastos.png" alt="Icone registro de gastos" className='w-[17%] md:w-[15%] xl:w-[12%] 2xl:w-[10%]' />
            <h1 className='font-text-app text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--color-dark-green)]'>Registro de Gastos</h1>
          </div>
          <form action="submit" onSubmit={listarGasto} className='flex flex-col gap-4 md:gap-6'>
            <div className='flex flex-col gap-2 md:gap-3 justify-center items-center'>
              <input type="text" maxLength={40} name="descGasto" id="descGasto" placeholder='Descreva o Gasto' value={inputDescGasto} onChange={e => setInputDescGasto(e.target.value)} required className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' />
              <input type="number" name="valorGasto" id="valorGasto" placeholder='Valor do seu Gasto' value={inputValorGasto} onChange={e => setInputValorGasto(e.target.value)} step={0.01} className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' required  />
            </div>
            <div className="flex justify-center">
              <button type='submit' className='h-auto p-2 bg-[var(--color-dark-green)] text-[var(--color-black)] rounded-4xl cursor-pointer font-title-alt text-lg w-full md:w-[75%] 2xl:w-[50%] xl:text-xl xl:p-4'>Enviar</button>
            </div>
            
          </form>
          <div>
            <ul>
               {gastos.map((gasto) => (
              <li key={gasto.id} className='flex flex-row justify-between items-center h-[10%] w-full my-8 md:my-12'>
                <div className='text-[var(--color-dark-green)] font-text text-xl xl:space-y-2.5 md:text-3xl xl:text-4xl'>
                  <div>
                    <p className='font-title-alt'>{gasto.descricao}</p> 
                  </div>
                  <div>
                    <p className='text-[var(--color-green)]'>R$ {gasto.valor}</p>
                  </div>       
                </div>
                <div className='w-[10%] md:w-[8%] xl:w-[5%]'>
                  <button onClick={() => deleteGasto(gasto.id)} className='w-full h-full cursor-pointer'>
                  <img src="icons/lixeira.png" alt="Icone Lixeira" className='h-[100%] w-[100%] ' />
                  </button>
                </div>
              </li>
            )
            )}

            </ul>
          </div>
        </div>

      </div>
    </main>
  )
}

export default RegistroGastos