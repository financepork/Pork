import React from 'react'
import ChartGastos from '../MeuPerfilCharts/ChartGastos'

const DashboardGastos = () => {
    return (
        <div className='bg-[var(--color-chumbo)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-8 xl:p-12 min-h-[70%] rounded-xl gap-4 xl:gap-16 '>


            <div>
                <div className='m-2'>
                    <h1 className='font-title-app text-3xl md:text-4xl text-[var(--color-green)] md:mb-4'>
                    Seus Gastos
                </h1>
                </div>
                
                <div className='flex flex-row justify-between items-center w-full h-full space-x-4 '>
                    <div className='w-full h-[280px] flex justify-center items-center '>
                        <ChartGastos />
                    </div>
                    <div className=' font-title-app text-md w-[35%] '>
                        <ul className='space-y-2 flex flex-col justify-center items-start h-full w-full mr-6'>
                            <li className='flex flex-row font-text-app h-full w-full  items-center gap-2 color-alimentacao text-md md:text-lg xl:text-xl'><img src="/icons/iconAlimentacao.png" alt="Icone Alimentacao" className='h-6 md:h-8 xl:h-10' /> Alimentação</li>
                            <li className='flex flex-row font-text-app h-full w-full  items-center gap-2 color-transporte text-md md:text-lg xl:text-xl'><img src="/icons/iconTransporte.png" alt="Icone Alimentacao" className='h-6 md:h-8 xl:h-10' /> Transporte</li>
                            <li className='flex flex-row font-text-app h-full w-full  items-center gap-2 color-lazer text-md md:text-lg xl:text-xl '><img src="/icons/iconLazer.png" alt="Icone Alimentacao" className='h-6 md:h-8 xl:h-10' /> Lazer</li>
                            <li className='flex flex-row font-text-app h-full w-full  items-center gap-2 color-contas text-md md:text-lg xl:text-xl '><img src="/icons/iconContas.png" alt="Icone Alimentacao" className='h-6 md:h-8 xl:h-10' /> Contas Básicas</li>
                            <li className='flex flex-row font-text-app h-full w-full  items-center gap-2 color-outros text-md md:text-lg xl:text-xl '><img src="/icons/iconOutros.png" alt="Icone Alimentacao" className='h-6 md:h-8 xl:h-10' /> Outras</li>
                        </ul>
                    </div>
                </div>

               

            </div>
            <div className='space-y-4 md:space-y-5 md:mt-4'>
                <div className='space-y-2 flex flex-row items-center gap-3 lg:gap-5 '>
                    <h2 className='text-3xl md:text-4xl font-title-app text-[var(--color-green)]'>Maior Gasto </h2>
                    <p className='text-2xl md:text-3xl font-title-app text-[var(--color-dark-green)]'>R$100,00</p>
                </div>
                <div className='space-y-2 flex flex-row items-center gap-3 lg:gap-5 '>
                    <h2 className='text-3xl md:text-4xl font-title-app text-[var(--color-green)]'>Valor Gasto esse Mês </h2>
                    <p className='text-2xl md:text-3xl font-title-app text-[var(--color-dark-green)]'>R$900,00</p>
                </div>
            </div>
             

        </div>
    )
}

export default DashboardGastos