import React, { useState } from 'react'
import Select from 'react-select'
import axios from 'axios'

const Window1 = () => {

  const [valueRenda, setValueRenda] = useState('Nenhum valor inserido')

  const [valuePlan, setValuePlan] = useState('Nenhum Plano Selecionado')

  const [valueEco, setValueEco] = useState('-')

  const [inputRenda, setInputRenda] = useState('')

  const [inputPlan, setInputPlan] = useState('')

  const optionsSelect = [
    { value: 'Escorpião no Bolso', label: 'Escorpião no Bolso' },
    { value: 'Normal', label: 'Normal' },
    { value: 'Mão de Vaca', label: 'Mão de Vaca' }
  ]

  const setarPlan = async () => {

    const planInput = inputPlan
    const planTyped = {
      planType: planInput
    }
    //await axios.post('url', planTyped);
    return setValuePlan(planInput);
  }

  const setarValor = async () => {
    const rendaInput = inputRenda
    const valueTyped = {
      renda: rendaInput
    }
    //await axios.post('url', valueTyped);
    return setValueRenda(`R$ ${valueTyped.renda}`);
  }

  const getEco = async (e) => {
    e.preventDefault();
    await setarValor()
    await setarPlan()
    /*await axios.get('url')
      .then((response) => {
        const planEco = response
      }).catch((error) => {
        console.log(error)
      }) */
    return setValueEco(`${planEco} /Mês`)

  }


  return (
    <main
      className=' h-full w-full flex flex-col mb-32  '>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-16 space-y-8 overflow-y-none justify-center 2xl:justify-around  '>
        <div className='flex p-7 md:p-10 lg:p-12 xl:p-16 xl:w-[60%] lg:w-[60%]  w-full bg-[var(--color-white)] max-h-[81%] rounded-4xl'>
          <div className='flex flex-col space-y-4 lg:space-y-6'>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl md:text-4xl lg:text-5xl leading-relaxed'>Renda Mensal :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valueRenda}</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Plano Selecionado :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valuePlan}</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Economia Ideal :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valueEco}</p>
          </div>
        </div>
        <form onSubmit={getEco} className='flex flex-col items-center rounded-t-2xl space-y-6 p-4 '>
          <div className='flex flex-col items-center rounded-t-2xl space-y-6 xl:space-y-10 p-4 '>
            <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl xl:text-6xl' >Renda :</h2>
            <input type="number" name="renda" id="renda" placeholder='Insira sua Renda' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg xl:text-2xl xl:h-15  xl:w-110 p-2' value={inputRenda} onChange={e => setInputRenda(e.target.value)} />
            <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Planejamento Escolhido:</h2>
            <Select
              options={optionsSelect}
              value={optionsSelect.find(opt => opt.value === inputPlan)}
              onChange={opt => setInputPlan(opt.value)}
              className="w-[70%]"
              placeholder="Selecione uma Opção"
            />
            <button type='submit' className="border-0 text-[var(--color-black)] bg-[var(--color-white)] rounded-2xl p-3 hover:bg-[var(--color-green)] hover:text-[var(--color-white)] transition-colors duration-400 ease-in-out w-[40%] md:w-[50%] text-center font-text-alt md:text-2xl xl:text-3xl xl:mb-4  cursor-pointer self-center">Registrar</button>
          </div>
        </form>
        <div
          className='flex flex-col items-center rounded-t-2xl space-y-6 md:space-y-10 lg:space-y-14 p-4 '>

          <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Descrição dos planos:</h2>
          <ul className='text-[var(--color-white)] font-text-app text-lg space-y-4 md:space-y-8 decoration-none list-disc md:text-xl lg:text-3xl '>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Escorpião no Bolso :</span><br /><br /> Destinado à usuários com uma quantidade maior de renda, podendo economizar mais dinheiro sem problemas</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Normal :</span><br /><br />Destinado à Usuários que desejam economizar uma quantidade básica, sem exagero ou falta</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)] '>Mão de Vaca :</span><br /><br />Destinados à usuários que não tem uma renda tão alta, ou que não querem economizar muito dinheiro</li>

          </ul>
        </div>
        <div>

        </div>

      </div>
    </main>

  )
}

export default Window1