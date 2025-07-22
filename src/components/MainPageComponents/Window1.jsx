import React from 'react'

const Window1 = () => {
  return (
    <div
      className=' h-full w-full flex flex-col  '>
      <div data-aos="fade-right" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-col  h-[50%] xl:h-[60%] w-full p-6 xl:ml-15 rounded-b-4xl'>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-7xl '>Planejamento</h1>
        <h1 className='font-title-app text-4xl text-[var(--color-white)] md:text-5xl xl:text-8xl '>Econômico</h1>
        <p className='font-text-alt text-xl md:text-2xl xl:text-4xl text-[var(--color-white)] mt-2 xl:mt-4 '>Defina como você irá gerenciar seu dinheiro!</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
        className='flex flex-wrap h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-8 space-y-8 overflow-y-auto justify-center 2xl:justify-between '>
        <div className='flex p-7 md:p-10 lg:p-12 xl:p-16 xl:w-[70%] lg:w-[60%]  w-full bg-[var(--color-white)] min-h-[80%] rounded-4xl'>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl md:text-4xl lg:text-5xl leading-relaxed'>Renda Mensal :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>R$ 750,00</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Plano Selecionado :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>Nenhum plano selecionado</p>
            <h2 className='text-[var(--color-green)] font-title-app text-3xl leading-relaxed  md:text-4xl lg:text-5xl'>Economia Ideal :</h2>
            <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>R$ 150,00 /Mês</p>
          </div>
        </div>
        <div className='flex flex-col items-center rounded-t-2xl space-y-6 p-4 '>
          <div className='flex flex-col items-center rounded-t-2xl space-y-6 xl:space-y-10 p-4 '>
            <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl xl:text-6xl' >Renda :</h2>
            <input type="number" name="renda" id="renda" placeholder='Insira sua Renda' className='bg-[var(--color-green)] text-[var(--color-white)] font-title-alt rounded-2xl text-lg xl:text-2xl xl:h-15  xl:w-110 p-2' />
            <div className='flex flex-row items-center justify-center space-x-4'>
              <label htmlFor="rendaVariavel" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl  '>Variável</label>
              <input type="checkbox" name="rendaVariavel" id="rendaVariavel" className="w-5 md:w-6 md:h-6 lg:w-7 lg:h-7 h-5 accent-[var(--color-green)] rounded border-2 border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)]" />
              <label htmlFor="rendaFixa" className='text-md text-[var(--color-white)] font-title-alt text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Fixa</label>
              <input type="checkbox" name="rendaFixa" id="rendaFixa" className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 accent-[var(--color-green)] rounded border-2 border-[var(--color-green)] focus:ring-2 focus:ring-[var(--color-green)]" />
            </div>


          </div>
        </div>
        <div className='flex flex-col items-center rounded-t-2xl space-y-6 md:space-y-10 lg:space-y-14 p-4 '>
          <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Planejamento Escolhido:</h2>
          <select name="selectPlan" className='text-[var(--color-white)] bg-[var(--color-green)] font-text-app  p-3 text-lg md:text-xl lg:text-2xl lg:p-4' id="selectPlan">
            <option value="none">Selecione uma Opção</option>
            <option value="basico" className='font-text-app text-lg md:text-xl'>Escorpião no Bolso</option>
            <option value="intermediario" className='font-text-app text-lg md:text-xl'>Normal</option>
            <option value="avancado" className='font-text-app text-lg md:text-xl'>Mão de Vaca</option>
          </select>
          <h2 className='text-[var(--color-white)] font-title-app text-2xl md:text-4xl lg:text-5xl'>Descrição dos planos:</h2>
          <ul className='text-[var(--color-white)] font-text-app text-lg space-y-4 md:space-y-8 decoration-none list-disc md:text-xl lg:text-3xl '>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Escorpião no Bolso :</span><br /> Destinado à usuários com uma quantidade maior de renda, podendo economizar mais dinheiro sem problemas</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)]'>Normal :</span><br />Destinado à Usuários que desejam economizar uma quantidade básica, sem exagero ou falta</li>
            <li><span className='font-title-alt text-xl md:text-2xl lg:text-3xl m-2 text-[var(--color-green)] '>Mão de Vaca :</span><br />Destinados à usuários que não tem uma renda tão alta, ou que não querem economizar muito dinheiro</li>

          </ul>
        </div>
        <div>

        </div>

      </div>
    </div>

  )
}

export default Window1