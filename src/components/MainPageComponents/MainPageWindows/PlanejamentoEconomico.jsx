import { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'


const PlanejamentoEconomico = () => {

  const [valueRenda, setValueRenda] = useState('Nenhum valor inserido')

  const [valuePlan, setValuePlan] = useState('Nenhum Plano Selecionado')

  const [valueEco, setValueEco] = useState('-')

  const [inputRenda, setInputRenda] = useState('')

  const [inputPlan, setInputPlan] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const loadingMessage = () => {
    Swal.fire({
      title: 'Carregando...',
      text: 'Por favor, aguarde.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: 'loading-swal' 
      }
    });
  }

  useEffect(() => {
    if (isLoading) {
      loadingMessage()
    } else {
      Swal.getPopup() && Swal.getPopup().classList.contains('loading-swal')? Swal.close() : ''
    }

  }, [isLoading])

  const optionsSelect = [
    { value: 'HARD', label: 'Mão de Vaca' },
    { value: 'MID', label: 'Normal' },
    { value: 'EASY', label: 'Escorpião no Bolso' }
  ]

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

  const convertePlan = (plan) => {
    switch (plan) {
      case 'HARD':
        return 'Mão de Vaca'

      case 'MID':
        return 'Normal'

      case 'EASY':
        return 'Escorpião no Bolso'
    }
  }

  const getRenda = async () => {
    try {
      const response = await axios.get('/despesas/consultar-receita', {
        withCredentials: true
      })
      const valorRenda = response.data.valor;
      setValueRenda(`R$${valorRenda}`);
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao receber informações do servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const getPlan = async () => {
    try {
      const response = await axios.get('/investimento/consultar-investimento', {
        withCredentials: true
      })
      const valorPlan = convertePlan(response.data.categoria);
      const valorEconomia = response.data.valor;
      setValuePlan(valorPlan);
      setValueEco(`R$${valorEconomia}`);
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao receber informações do servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const getInitialValues = async () => {
    try {
      setIsLoading(true);
      await getRenda();
      await getPlan();
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    getInitialValues();
  }, [])

  const setarPlan = async () => {
    if (inputPlan === null || inputPlan === '') return
    const planTyped = {
      "tipo": inputPlan
    }
    try {
      await axios.put('/investimento/alterar-investimento', planTyped, {
        withCredentials: true
      });
      const valuePlan = convertePlan(inputPlan)
      return setValuePlan(valuePlan);
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao receber informações do servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const setarValor = async () => {
    if(inputRenda === null || inputRenda === '') return
    const valueTyped = {
      "receita": inputRenda
    }
    try {
      await axios.put('/despesas/atualizar-receita', valueTyped, {
        withCredentials: true
      });
      return setValueRenda(`${valueTyped.receita}`);
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
    }

  }

  const geraEconomia = async () => {
    try {
      const response = await axios.get('/investimento/consultar-investimento', {
        withCredentials: true
      })
      const planEco = response.data.valor
      setValueEco(`${planEco}`)
    }
    catch (error) {
      isLoading(false)
      errorMessage('Erro ao enviar informações ao servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const formaEconomia = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      await setarValor();
      await setarPlan();
      await geraEconomia();
    } finally {
      setIsLoading(false)
    }


  }


  return (
    
    <main
      className=' h-full w-full flex flex-col mb-32  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-16 space-y-8 overflow-y-none justify-center 2xl:justify-around  '>
        <div className='flex p-5 md:p-10 lg:p-12 xl:p-16 xl:w-[60%] lg:w-[60%]  w-full bg-[var(--color-white)] max-h-[81%] rounded-4xl'>
          <div className='flex flex-col space-y-4 lg:space-y-6'>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl md:text-4xl lg:text-5xl leading-relaxed'>Renda Mensal </h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valueRenda}</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Plano Selecionado </h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valuePlan}</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Economia Ideal </h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valueEco} /Mês</p>
          </div>
        </div>
        <form onSubmit={formaEconomia} className='flex flex-col items-center rounded-t-2xl space-y-6 p-4 '>
          <div className='flex flex-col items-center rounded-t-2xl space-y-6 xl:space-y-10 p-4 '>
            <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl xl:text-6xl' >Renda </h2>
            <input type="number" name="renda" id="renda" placeholder='Insira sua Renda' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg xl:text-2xl xl:h-15  xl:w-110 p-2' value={inputRenda} onChange={e => setInputRenda(e.target.value)} />
            <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Planejamento Escolhido</h2>
            <Select
              options={optionsSelect}
              value={optionsSelect.find(opt => opt.value === inputPlan)}
              onChange={opt => setInputPlan(opt.value)}
              placeholder="Selecione um Plano"
              required
              className="w-[70%]"
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
            <button type='submit' className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[40%] md:w-[50%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4  cursor-pointer self-center">Registrar</button>
          </div>
        </form>
        <div
          className='flex flex-col items-center rounded-t-2xl space-y-6 md:space-y-10 lg:space-y-14 p-4 '>

          <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Descrição dos planos:</h2>
          <ul className='text-[var(--color-white)] font-text-app text-lg space-y-4 md:space-y-8 decoration-none list-disc md:text-xl lg:text-3xl '>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Mão de Vaca </span><br /><br /> Destinado à usuários que desejam o máximo de economia possível</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Normal </span><br /><br />Destinado à Usuários que desejam economizar uma quantidade básica, sem exagero ou falta</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)] '>Escorpião no Bolso</span><br /><br />Destinados à usuários que preferem gastar mais e economizar menos</li>

          </ul>
        </div>
        <div>

        </div>

      </div>
    </main>

  )
}

export default PlanejamentoEconomico