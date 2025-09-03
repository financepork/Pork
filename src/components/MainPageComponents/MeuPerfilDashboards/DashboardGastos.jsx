import React, { useState, useEffect } from 'react'
import ChartGastos from '../MeuPerfilCharts/ChartGastos'
import axios from 'axios'
import Swal from 'sweetalert2'
import Gasto from '../Gasto'

const DashboardGastos = ({ mesEscolhido }) => {

    const [maioresGastosMes, setMaioresGastosMes] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const [dataLoaded, setDataLoaded] = useState(false)

    const [valueAlimentacao, setValueAlimentacao] = useState(0)

    const [valueTransporte, setValueTransporte] = useState(0)

    const [valueLazer, setValueLazer] = useState(0)

    const [valueContas, setValueContas] = useState(0)

    const [valueOutras, setValueOutras] = useState(0)

    const [gastoTotalMes, setGastoTotalMes] = useState(0)

    const errorMessage = (errorText, error) => {
        Swal.fire({
            title: 'Ocorreu um Erro',
            text: errorText,
            icon: 'error',
            color: 'var(--color-red)',
            background: 'var(--color-white)',
            footer: error.message || String(error),
            customClass: {
                popup: '!rounded-2xl !p-6 !shadow-xl',
                confirmButton: '!text-white-500 !bg-red-500 !border-white  '
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

    const rotulaGastos = (gasto) => {
        switch (gasto.categoria) {
            case 'ALIMENTACAO':
                return <Gasto gasto={gasto} imgPath='icons/iconAlimentacao.png' />

            case 'TRANSPORTE':
                return <Gasto gasto={gasto} imgPath='icons/iconTransporte.png' />

            case 'LAZER':
                return <Gasto gasto={gasto} imgPath='icons/iconLazer.png' />

            case 'CONTAS':
                return <Gasto gasto={gasto} imgPath='icons/iconContas.png' />

            case 'OUTROS':
                return <Gasto gasto={gasto} imgPath='icons/iconOutros.png' />
        }
    }

    const getMaiorGasto = async () => {

        try {
            const response = await axios.get(`/despesas/consultar-maiores-gastos-no-mes?mes=${mesEscolhido}`, {
                withCredentials: true
            });
            setMaioresGastosMes([...response.data]);
        } catch (error) {
            setIsLoading(false)
            errorMessage('Erro ao receber informações do servidor, tente novamente', error);
        };

    }

    const getGastosPorCategoria = async (categoria) => {

        const response = await axios.get(`/despesas/consultar-despesas-total-por-categoria-mes?categoria=${categoria}&mes=${mesEscolhido}`, {
            withCredentials: true
        }
        )
        return response.data

    }

    const setGastosTodasCategorias = async () => {
    try {
        const [
            resAlimentacao,
            resTransporte,
            resLazer,
            resContas,
            resOutras,
        ] = await Promise.all([
            getGastosPorCategoria("ALIMENTACAO"),
            getGastosPorCategoria("TRANSPORTE"),
            getGastosPorCategoria("LAZER"),
            getGastosPorCategoria("CONTAS"),
            getGastosPorCategoria("OUTROS"),
        ]);
        
        setValueAlimentacao(resAlimentacao);
        setValueTransporte(resTransporte);
        setValueLazer(resLazer);
        setValueContas(resContas);
        setValueOutras(resOutras);

    } catch (error) {
        setIsLoading(false);
        errorMessage('Erro ao buscar gastos por categoria', error);
    }
};


    const setarGastoTotalMes = async () => {
        try {
            const response = await axios.get(`/despesas/consultar-despesa-total-por-mes?mes=${mesEscolhido}`, {
                withCredentials: true
            })
            setGastoTotalMes(response.data)
        } catch (error) {
            setIsLoading(false)
            errorMessage('Erro ao receber informações do servidor, tente novamente', error);
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getMaiorGasto()
        setGastosTodasCategorias()
        setarGastoTotalMes()
        setDataLoaded(true)
        setIsLoading(false)
    },[mesEscolhido])


    return (
        <div className='bg-[var(--color-chumbo)] w-full md:w-[80%] xl:w-[60%] h-full flex items place-self-auto flex-col p-10 xl:p-12 min-h-[70%] rounded-xl gap-4 xl:gap-16 '>


            <div>
                <div className='m-2'>
                    <h1 className='font-title-app text-3xl md:text-4xl lg:text-5xl text-[var(--color-green)] md:mb-4'>
                        Seus Gastos
                    </h1>
                </div>

                <div className='flex flex-row justify-between items-center w-full h-full space-x-4 '>
                    <div className='w-full h-[280px] flex justify-center items-center '>
                        {dataLoaded && <ChartGastos valueAlimentacao={valueAlimentacao} valueContas={valueContas} valueLazer={valueLazer} valueTransporte={valueTransporte} valueOutros={valueOutras} />}

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
            <div className='space-y-4 md:space-y-8 md:mt-4'>
                <div className=' flex flex-col w-full mb-3  gap-3 lg:gap-6 m-2 '>
                    <h2 className='text-3xl md:text-4xl font-title-app text-[var(--color-green)]'>Maior Gasto </h2>
                    {dataLoaded &&
                        <ul className='m-4 mb-8 items-center justify-center'>
                            {maioresGastosMes.map((gasto) => (
                                <li key={gasto.id} className='flex flex-row justify-between items-center h-[10%] w-full '>
                                    {rotulaGastos(gasto)}
                                </li>
                            )
                            )}
                        </ul>
                    }

                </div>
                <div className='space-y-2 flex flex-col  gap-3 lg:gap-5 m-2'>
                    <h2 className='text-3xl md:text-4xl font-title-app text-[var(--color-green)]'>Total Gasto</h2>
                    <p className='text-3xl md:text-4xl font-title-app text-[var(--color-dark-green)]'>R$ {gastoTotalMes}</p>
                </div>
            </div>


        </div>
    )
}

export default DashboardGastos