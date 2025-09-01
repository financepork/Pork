import React from 'react'
import DashboardGastos from '../MeuPerfilDashboards/DashboardGastos'
import DashboardEconomia from '../MeuPerfilDashboards/DashboardEconomia'


const MeuPerfil = () => {


    return (
        <main
            className=' h-full w-full flex flex-col  '>
            <div //data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
                className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-5 py-8 overflow-y-none items-center justify-around xl:items-start gap-4 xl:p-12'>
                <DashboardEconomia />
                <DashboardGastos />
            </div>
        </main>
    )
}

export default MeuPerfil