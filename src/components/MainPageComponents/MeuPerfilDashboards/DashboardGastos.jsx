import React from 'react'
import ChartGastos from '../MeuPerfilCharts/ChartGastos'

const DashboardGastos = () => {
    return (
        <div className='bg-[var(--color-chumbo)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-8 xl:p-12 min-h-[70%] rounded-xl gap-4 xl:gap-16'>


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
                            <li className='flex flex-row h-full w-full  items-center gap-2 color-alimentacao text-md '><img src="/icons/iconAlimentacao.png" alt="Icone Alimentacao" className='h-6' /> Alimentação</li>
                            <li className='flex flex-row h-full w-full  items-center gap-2 color-transporte text-md '><img src="/icons/iconTransporte.png" alt="Icone Alimentacao" className='h-6' /> Transporte</li>
                            <li className='flex flex-row h-full w-full  items-center gap-2 color-lazer text-md '><img src="/icons/iconLazer.png" alt="Icone Alimentacao" className='h-6' /> Lazer</li>
                            <li className='flex flex-row h-full w-full  items-center gap-2 color-contas text-md '><img src="/icons/iconContas.png" alt="Icone Alimentacao" className='h-6' /> Contas Básicas</li>
                            <li className='flex flex-row h-full w-full  items-center gap-2 color-outros text-md '><img src="/icons/iconOutros.png" alt="Icone Alimentacao" className='h-6' /> Outras</li>
                        </ul>
                    </div>
                </div>

               

            </div>
             <div className='space-y-2'>
                    <h2 className='text-3xl font-title-app text-[var(--color-green)]'>Maior Gasto </h2>
                    <p className='text-2xl font-title-app text-[var(--color-dark-green)]'>R$100,00</p>
                </div>
                <div className='space-y-2'>
                    <h2 className='text-3xl font-title-app text-[var(--color-green)]'>Valor Gasto esse Mês </h2>
                    <p className='text-2xl font-title-app text-[var(--color-dark-green)]'>R$900,00</p>
                </div>

        </div>
    )
}

export default DashboardGastos