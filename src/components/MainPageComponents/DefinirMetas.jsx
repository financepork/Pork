import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const DefinirMetas = () => {

  const [inputMeta, setInputMeta] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [inputData, setInputData] = useState('')
  const [metas, setMetas] = useState([])

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

  const fetchMetas = async () => {
    try {
      const response = await axios.get('/metas/consultar-metas', {
        withCredentials: true
      })
      setMetas(response.data)
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao receber informações do servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const getInitialValues = async () => {
    try {
      setIsLoading(true)
      await fetchMetas()
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getInitialValues()
  }, [])

  const limpaInputs = () => {
    setInputData('')
    setInputMeta('')
    setInputValue('')
  }

  const sendMeta = async () => {
    try {

      const [year, month, day] = inputData.split('-');
      const dataFormatada = `${day}/${month}/${year}`;

      const metaEnviada = [
        {
          "meta": inputMeta,
          "valor": Number(inputValue),
          "data": dataFormatada
        }
      ]
      await axios.post('/metas/cadastrar-metas', metaEnviada, {
        withCredentials: true
      })
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const registraMeta = async (e) => {
    e.preventDefault()
    try {
      if (inputData === '' || inputMeta === '' || inputValue === '') return errorMessage('Por favor, preencha todos os campos', 'informações incompletas')
      setIsLoading(true)
      await sendMeta()
      await fetchMetas()
      limpaInputs()

    } finally {
      setIsLoading(false)
    }
  }

  const deleteMeta = async (id) => {
    setIsLoading(true)
    try {
      await axios.delete(`/metas/deletar-meta/${id}`, {
        withCredentials: true
      })
      await fetchMetas()
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao enviar remover meta, tente novamente', error.response?.data || error?.message || String(error));
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-16 overflow-y-none items-center justify-around'>
        
       <div className='bg-[var(--color-white)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-7 xl:p-12 min-h-[70%] rounded-xl gap-8 xl:gap-16'>
          <div className='flex items-center w-full h-full space-x-2 md:space-x-2 xl:space-x-4'>
            <img src="../metas.png" alt="Icone registro de gastos" className='w-[17%] md:w-[15%] xl:w-[12%] 2xl:w-[10%]' />
            <h1 className='font-text-app text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--color-dark-green)]'>Definição de Metas</h1>
          </div>
          <form action="submit" onSubmit={registraMeta} className='flex flex-col gap-4 md:gap-6'>
            <div className='flex flex-col gap-2 md:gap-3 justify-center items-center'>
              <input type="text" maxLength={40} name="descMeta" id="descMeta" placeholder='Descreva a Meta' value={inputMeta} onChange={e => setInputMeta(e.target.value)} required className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' />
              <input type="number" name="valorMeta" id="valorMeta" placeholder='Valor do seu Objetivo' value={inputValue} onChange={e => setInputValue(e.target.value)} className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' required />
              <input type="date" name="dataMeta" id="dataMeta" value={inputData} onChange={e => setInputData(e.target.value)} className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' required />
            </div>
            <div className="flex justify-center">
              <button type='submit' className='h-auto p-2 bg-[var(--color-dark-green)] text-[var(--color-lgray)] rounded-4xl cursor-pointer font-title-app text-lg w-full md:w-[75%] 2xl:w-[50%] xl:text-xl xl:p-4'>Enviar</button>
            </div>
            
          </form>
          <div>
            <ul>
               {metas.map((meta) => (
              <li key={meta.id} className='flex flex-row justify-between items-center h-[12%] w-full my-6 md:my-12'>
                <div className='text-[var(--color-dark-green)] font-text text-lg xl:space-y-2 md:text-2xl xl:text-4xl'>
                  <div>
                    <p>{meta.meta}</p> 
                  </div>
                  <div>
                    <p>R$ {meta.valor},00 ({meta.data})</p>
                  </div>       
                </div>
                <div className='w-[13%] md:w-[10%] lg:w-[8%] xl:w-[5%]'>
                  <button onClick={() => deleteMeta(meta.id)} className='w-full h-full cursor-pointer'>
                  <img src="../lixeira.png" alt="Icone Lixeira" className='h-[100%] w-[100%]' />
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

export default DefinirMetas