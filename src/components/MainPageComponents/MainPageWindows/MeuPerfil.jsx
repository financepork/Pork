import React from 'react'
import ChartGastos from '../MainPageCharts/ChartGastos'

const MeuPerfil = () => {
    return (
        <main
            className=' h-full w-full flex flex-col  '>
            <div //data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
                className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-5 overflow-y-none items-center justify-around'>
                <div className='bg-[var(--color-white)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-7 xl:p-12 min-h-[70%] rounded-xl gap-8 xl:gap-16'>

                    <div className='space-y-2'>
                        <h2 className='text-2xl font-title-app text-[var(--color-green)]'>Valor Gasto esse Mês </h2>
                        <p className='text-3xl font-title-app text-[var(--color-green)]'>R$900,00</p>
                    </div>
                    <div>
                        <h1 className='font-title-app text-3xl text-[var(--color-green)]'>
                            Seus Gastos
                        </h1>
                        <div className='flex flex-row justify-between items-center w-full h-full space-x-4 '>
                            <div className='w-full h-[260px] flex justify-center items-center '>
                                <ChartGastos />
                            </div>
                            <div className=' font-title-app text-md w-[35%] '>
                                <ul className='space-y-2 flex flex-col justify-center items-start h-full w-full mr-6'>
                                    <li className='flex flex-row h-full w-full  items-center gap-2'><img src="/icons/iconAlimentacao.png" alt="Icone Alimentacao" className='h-7' /> Alimentação</li>
                                    <li className='flex flex-row h-full w-full  items-center gap-2'><img src="/icons/iconTransporte.png" alt="Icone Alimentacao" className='h-7' /> Transporte</li>
                                    <li className='flex flex-row h-full w-full  items-center gap-2'><img src="/icons/iconLazer.png" alt="Icone Alimentacao" className='h-7' /> Lazer</li>
                                    <li className='flex flex-row h-full w-full  items-center gap-2'><img src="/icons/iconContas.png" alt="Icone Alimentacao" className='h-7' /> Contas Básicas</li>
                                    <li className='flex flex-row h-full w-full  items-center gap-2'><img src="/icons/iconOutros.png" alt="Icone Alimentacao" className='h-7' /> Outras</li>
                                </ul>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-3xl font-title-app text-[var(--color-green)]'>Maior Gasto </h2>
                            <p className='text-3xl font-title-app text-[var(--color-green)]'>R$100,00</p>
                        </div>

                    </div>



                </div>
            </div>
        </main>
    )
}

export default MeuPerfil