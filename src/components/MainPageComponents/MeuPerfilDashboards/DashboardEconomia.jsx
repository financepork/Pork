import React from 'react'
import ChartEconomia from '../MeuPerfilCharts/ChartEconomia'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const DashboardEconomia = () => {

    const [valueRenda, setValueRenda] = useState('0,00')

    const [valuePlan, setValuePlan] = useState('Nenhum')

    const [valueEco, setValueEco] = useState('0,00')

    const [isLoading, setIsLoading] = useState(false)

    const [dataLoaded, setDataLoaded] = useState(false)

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
            setValueRenda(Number(valorRenda));
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
            setValueEco(valorEconomia);
            return valorEconomia
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
            setDataLoaded(true);
            setIsLoading(false)
            
        }
    }


    useEffect(() => {
        getInitialValues();
    }, [])

    return (
        <div className='flex flex-col p-6 md:p-10 lg:p-12 xl:p-16 xl:w-[60%] lg:w-[60%] h-full  w-full bg-[var(--color-chumbo)] max-h-[81%] rounded-xl'>
            <div className='m-2'>
                <h1 className='font-title-app text-3xl text-[var(--color-green)]'>
                    Seu Planejamento Econômico
                </h1>
            </div>
            <div className='w-full h-[260px] flex justify-between items-center bg-[var(--color-chumbo)] '>
                {dataLoaded &&
                        <ChartEconomia valueEco={valueEco} valueRenda={valueRenda}/>
                        
                } 
                <div className=' font-title-app text-md w-[60%] '>
                    <ul>
                        <li className='flex flex-row items-center text-[var(--color-green)]'><div className='h-[20px] w-[20px] bg-[var(--color-green)] rounded-sm m-2 ' /> Economia</li>
                        <li className='flex flex-row items-center text-[var(--color-dark-green)]'><div className='h-[20px] w-[20px] bg-[var(--color-dark-green)] rounded-sm m-2 text-center' /> Valor Livre</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col flex-wrap space-y-4 lg:space-y-6'>
                <div  className='flex flex-row items-center gap-3 '>
                    <h2 className='text-[var(--color-green)] font-title-app text-2xl md:text-4xl lg:text-5xl leading-relaxed'>Renda Mensal </h2>
                    <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>R${valueRenda}</p>
                </div>
                <div  className='flex flex-row items-center gap-3 '>
                    <h2 className='text-[var(--color-green)] font-title-app text-2xl leading-relaxed  md:text-4xl lg:text-5xl'>Plano  </h2>
                <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>{valuePlan}</p>
                </div>
                <div className='flex flex-row items-center gap-3 '>
                    <h2 className='text-[var(--color-green)] font-title-app text-2xl leading-relaxed  md:text-4xl lg:text-5xl'>Economia Ideal </h2>
                <p className='text-[var(--color-dark-green)] font-title-app text-2xl  md:text-3xl lg:text-4xl'>R${valueEco}/Mês</p>
                </div>
            </div>
            

        </div>
    )
}

export default DashboardEconomia