import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Select from 'react-select'
import Gasto from '../Gasto'



const RegistroGastos = () => {

  const [inputValorGasto, setInputValorGasto] = useState('')

  const [inputDescGasto, setInputDescGasto] = useState('')

  const [gastos, setGastos] = useState([])

  const [inputMesGastos, setInputMesGastos] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [inputCategoria, setInputCategoria] = useState('')

  const [pageOpen, setPageOpen] = useState(0)

  const optionsSelect = [
    { value: 'ALIMENTACAO', label: 'Alimentação' },
    { value: 'TRANSPORTE', label: 'Transporte' },
    { value: 'LAZER', label: 'Lazer' },
    { value: 'CONTAS', label: 'Contas Básicas' },
    { value: 'OUTROS', label: 'Outras' }
  ]

  const optionsMeses = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Maio' },
    { value: 6, label: 'Junho' },
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' },
    { value: 10, label: 'Outubro' },
    { value: 11, label: 'Novembro' },
    { value: 12, label: 'Dezembro' },
  ]

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

  const fetchGastos = async ({ pageNumber }) => {

    try {
      const response = await axios.get(`/despesas/consultar-despesas-paginada?page=${pageNumber}&size=5&sort=criadoEm,desc`, {
        withCredentials: true
      })

      setGastos([...response.data.content])
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
      return [];
    }

  }


  const getInitialValues = async () => {
    setIsLoading(true)
    await fetchGastos(0)
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
        "categoria": inputCategoria
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
      await fetchGastos(0);
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
      await fetchGastos(0)
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao remover gasto, tente novamente', error.response?.data || error?.message || String(error));
    } finally {

      setIsLoading(false)

    }
  }

  const buscaGastoMes = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (inputMesGastos === '' || inputMesGastos === null) return errorMessage('Por favor, selecione um mês', 'informações incompletas')
    try {
      const response = await axios.get(`/despesas/consultar-despesas-mes?mes=${inputMesGastos}`, {
        withCredentials: true
      })
      setGastos([...response.data.list])
    } catch (error) {
      setIsLoading(false)
      errorMessage('Erro ao buscar gastos do mês, tente novamente', error.response?.data || error?.message || String(error));
    } finally {
      setIsLoading(false)
    }
  }

  const changePageMetas = async (pageNumber) => {
    setPageOpen(pageNumber)
    setIsLoading(true)
    await fetchGastos(pageNumber)
    setIsLoading(false)
  }

  const rotulaGastos = (gasto) => {
    switch (gasto.categoria) {
      case 'ALIMENTACAO':
        return <Gasto gasto={gasto} imgPath='icons/iconAlimentacao.png'  />

      case 'TRANSPORTE':
        return <Gasto gasto={gasto} imgPath='icons/iconTransporte.png'  />

      case 'LAZER':
        return <Gasto gasto={gasto} imgPath='icons/iconLazer.png'   />

      case 'CONTAS':
        return <Gasto gasto={gasto} imgPath='icons/iconContas.png'   />

      case 'OUTROS': 
        return <Gasto gasto={gasto} imgPath='icons/iconOutros.png' />
    }
  }


  return (
    <main
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 xl:p-16 overflow-y-none items-center  justify-around xl:items-start gap-4'>

        <div className='bg-[var(--color-chumbo)] w-full md:w-[70%] xl:w-[60%] h-full flex  flex-col p-7 xl:p-12 min-h-[70%] rounded-xl gap-8 xl:gap-16'>
          <div className='flex items-center w-full h-full space-x-1.5 md:space-x-2 xl:space-x-4'>
            <img src="/icons/3dIcons/registroGastos3d.png" alt="Icone registro de gastos" className='w-[17%] md:w-[15%] xl:w-[12%] 2xl:w-[10%]' />
            <h1 className='font-title-app text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--color-dark-green)]'>Registro de Gastos</h1>
          </div>
          <form action="submit" onSubmit={listarGasto} className='flex flex-col gap-4 md:gap-6'>
            <div className='flex flex-col gap-4 md:gap-3 justify-center items-center'>
              <input type="text" maxLength={40} name="descGasto" id="descGasto" placeholder='Descreva o Gasto' value={inputDescGasto} onChange={e => setInputDescGasto(e.target.value)} required className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4 shadow-2xl' />
              <input type="number" name="valorGasto" id="valorGasto" placeholder='Valor do seu Gasto' value={inputValorGasto} onChange={e => setInputValorGasto(e.target.value)} step={0.01} className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4 shadow-2xl' required />
              <Select
                options={optionsSelect}
                value={optionsSelect.find(opt => opt.value === inputCategoria)}
                onChange={opt => setInputCategoria(opt.value)}
                placeholder="Categoria Do Gasto"
                required
                className="w-[100%] md:w-[80%] shadow-2xl "
                classNames={{
                  control: () => 'bg-[var(--color-dark-green)] text-white rounded-2xl border-none min-h-[48px] focus:ring-2 focus:ring-[var(--color-green)]',
                  singleValue: () => 'text-white font-bold',
                  menu: () => 'bg-[var(--color-dark-green)] rounded-2xl',
                  option: ({ isSelected, isFocused }) =>
                    `text-white cursor-pointer ${isSelected ? 'bg-[var(--color-green)]' : isFocused ? 'bg-[var(--color-dark-green)]' : ''}`,
                  placeholder: () => 'text-white opacity-70',
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    borderRadius: '1rem',
                    border: 'none',
                    color: 'white',
                    minHeight: '48px',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: 'white',
                    fontWeight: 'bold',
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    color: 'white',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? 'var(--color-green)'
                      : state.isFocused
                        ? 'var(--color-dark-green)'
                        : 'var(--color-dark-green)',
                    color: 'white',
                    cursor: 'pointer',
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: 'white',
                    opacity: 0.7,
                  }),
                }}
              />
            </div>

            <div className="flex justify-center">
              <button type='submit' className='h-auto p-2 bg-[var(--color-dark-green)] text-[var(--color-white)] rounded-4xl cursor-pointer font-text-app text-lg w-full md:w-[75%] 2xl:w-[50%] xl:text-xl xl:p-4'>Listar</button>
            </div>

          </form>
          <form onSubmit={buscaGastoMes} className='flex flex-col w-full h-full p-4 space-y-6 md:mt-5 lg:space-y-10'>
            <h1 className='font-title-app text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--color-dark-green)]'>Buscar Gasto</h1>
            <div className='flex flex-row w-full h-full justify-start items-center space-x-2 md:space-x-4'>
              <Select
                options={optionsMeses}
                value={optionsMeses.find(opt => opt.value === inputMesGastos)}
                onChange={opt => setInputMesGastos(opt.value)}
                placeholder="Selecione o Mês"
                required
                className='w-[140%] md:w-[60%] shadow-2xl'
                classNames={{
                  control: () => 'bg-[var(--color-dark-green)] text-white rounded-2xl border-none min-h-[48px]  focus:ring-2 focus:ring-[var(--color-green)]',
                  singleValue: () => 'text-white font-bold',
                  menu: () => 'bg-[var(--color-dark-green)] rounded-2xl',
                  option: ({ isSelected, isFocused }) =>
                    `text-white cursor-pointer ${isSelected ? 'bg-[var(--color-green)]' : isFocused ? 'bg-[var(--color-dark-green)]' : ''}`,
                  placeholder: () => 'text-white opacity-70',
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    borderRadius: '1rem',
                    border: 'none',
                    color: 'white',
                    minHeight: '48px',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: 'white',
                    fontWeight: 'bold',
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    color: 'white',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? 'var(--color-green)'
                      : state.isFocused
                        ? 'var(--color-dark-green)'
                        : 'var(--color-dark-green)',
                    color: 'white',
                    cursor: 'pointer',
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: 'white',
                    opacity: 0.7,
                  }),
                }}
              />
              <button type="submit" className='w-[30%]'>
                <img src="/icons/iconLupa.png" alt="Icone Lupa de busca" className='w-[80%] md:w-[30%] lg:w-[20%] xl:w-[20%]' />
              </button>


            </div>
          </form>
        </div>
        <div className='bg-[var(--color-chumbo)] w-full md:w-[70%] xl:w-[40%] h-full flex  flex-col p-7 xl:p-12 min-h-[100%] rounded-xl gap-8 xl:gap-16'>
          <div className='flex items-center justify-center w-full h-full '>
            <h1 className='font-title-app text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-[var(--color-dark-green)]'>Lista de Gastos</h1>
          </div>
          <div className='flex items-center w-full h-full space-x-1.5 md:space-x-2 xl:space-x-4'>
            <ul>
              {gastos.map((gasto) => (
                <li key={gasto.id} className='flex flex-row justify-between items-center h-[10%] w-full my-8 md:my-12'>
                  {rotulaGastos(gasto)}
                  <div className='w-[20%] md:w-[16%] xl:w-[10%]'>
                    <button onClick={() => deleteGasto(gasto.id)} className='w-full h-full cursor-pointer'>
                      <img src="icons/lixeira.png" alt="Icone Lixeira" className='h-[100%] w-[100%] ' />
                    </button>
                  </div>
                </li>
              )
              )}
            </ul>

          </div>
          <div className='flex flex-row w-full h-full justify-center items-center text-[var(--color-green)] font-text-app text-lg gap-4'>
            <button className={`${pageOpen === 0 ? 'bg-[var(--color-light-black)]' : 'bg-none'} w-auto h-auto p-1 px-2 rounded-lg`}
              onClick={() => changePageMetas(0)}>
              1
            </button>
            <button className={`${pageOpen === 1 ? 'bg-[var(--color-light-black)]' : 'bg-none'} w-auto h-auto  p-1 px-2 rounded-lg`}
              onClick={() => changePageMetas(1)}>
              2
            </button>
            <button className={`${pageOpen === 2 ? 'bg-[var(--color-light-black)]' : 'bg-none'} w-auto h-auto  p-1 px-2 rounded-lg`}
              onClick={() => changePageMetas(2)}>
              3
            </button>
            <button className={`${pageOpen === 3 ? 'bg-[var(--color-light-black)]' : 'bg-none'} w-auto h-auto  p-1 px-2 rounded-lg`}
              onClick={() => changePageMetas(3)}>
              4
            </button>
            <button className={`${pageOpen === 4 ? 'bg-[var(--color-light-black)]' : 'bg-none'} w-auto h-auto  p-1 px-2 rounded-lg`}
              onClick={() => changePageMetas(4)}>
              5
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}

export default RegistroGastos