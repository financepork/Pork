import { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import Swal from 'sweetalert2'


const PlanejamentoEconomico = () => {

  const [inputRenda, setInputRenda] = useState('')

  const [inputPlan, setInputPlan] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const sucessMessage = () => {
      Swal.fire({
        title: 'Planejamento feito!',
        text: 'Verifique seu Perfil para ver sua Economia',
        icon: 'success',
        color: 'var(--color-white)',
        background: 'var(--color-green)',
        confirmButtonText: 'Concluir',
        iconColor: 'var(--color-white)',
        customClass: {
          popup: '!rounded-2xl !p-6 !shadow-xl',
          confirmButton: '!text-green-500 !bg-white !border-none  '
        }
      })
    }

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
      Swal.getPopup() && Swal.getPopup().classList.contains('loading-swal') ? Swal.close() : ''
    }

  }, [isLoading])

  const optionsSelect = [
    { value: 'HARD', label: 'Mão de Vaca' },
    { value: 'MID', label: 'Normal' },
    { value: 'EASY', label: 'Escorpião no Bolso' }
  ]


  const setarPlan = async () => {
    if (inputPlan === null || inputPlan === '') return
    const planTyped = {
      "tipo": inputPlan
    }
    try {
      await axios.put('/investimento/alterar-investimento', planTyped, {
        withCredentials: true
      });
    } catch (error) {
      isLoading(false)
      errorMessage('Erro ao receber informações do servidor, tente novamente', error.response?.data || error?.message || String(error));
    }
  }

  const setarValor = async () => {
    if (inputRenda === null || inputRenda === '') return
    const valueTyped = {
      "receita": inputRenda
    }
    try {
      await axios.put('/despesas/atualizar-receita', valueTyped, {
        withCredentials: true
      });
    } catch (error) {
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
      sucessMessage()
    } finally {
      setIsLoading(false)
    }


  }


  return (

    <main
      className=' h-full w-full flex flex-col mb-32  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 space-y-8 overflow-y-none justify-center 2xl:justify-around  '>
        <div className='bg-[var(--color-chumbo)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-7 xl:p-12 min-h-[70%] rounded-xl gap-8 xl:gap-16'>
          <div className='flex items-center w-full h-full space-x-2 md:space-x-2 xl:space-x-4'>
            <img src="/icons/3dIcons/planEco3d.png" alt="Icone Planejamento Economico" className='w-[17%] md:w-[15%] xl:w-[12%] 2xl:w-[10%]' />
            <h1 className='font-text-app text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-[var(--color-dark-green)]'>Definição de Renda</h1>
          </div>
          <form action="submit" onSubmit={formaEconomia} className='flex flex-col gap-4 md:gap-6'>
            <div className='flex flex-col gap-2 md:gap-3 justify-center items-center'>
              <input type="text" maxLength={40} name="valorRenda" id="ValorRenda" placeholder='Insira sua Renda' value={inputRenda} onChange={e => setInputRenda(e.target.value)} required className='bg-[var(--color-dark-green)] text-white rounded-2xl w-full md:w-[80%] p-2 md:text-lg xl:text-2xl xl:p-4' />
              <h2 className='text-[var(--color-dark-green)] font-title-app text-2xl md:text-4xl lg:text-4xl xl:text-5xl my-4 lg:my-8'>Planejamento Escolhido</h2>
            <Select
              options={optionsSelect}
              value={optionsSelect.find(opt => opt.value === inputPlan)}
              onChange={opt => setInputPlan(opt.value)}
              placeholder="Selecione um Plano"
              required
              className="w-[100%] md:w-[80%] shadow-2xl "
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
              
            </div>
            <div className="flex justify-center">
              <button type='submit' className='h-auto p-2 bg-[var(--color-dark-green)] text-[var(--color-white)] rounded-xl cursor-pointer font-text-app text-lg w-full md:w-[75%] 2xl:w-[50%] xl:text-xl xl:p-4'>Enviar</button>
            </div>

          </form>
        </div>

      </div>
    </main>

  )
}

export default PlanejamentoEconomico