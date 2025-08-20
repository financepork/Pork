import { useState, useEffect } from 'react'
import Navbar from '../components/GeneralComponents/Navbar'
import Footer from '../components/GeneralComponents/Footer'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';

const VerifyPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const loadingMessage = () => {
        Swal.fire({
          title: 'Carregando Dados...',
          text: 'Por favor, aguarde.',
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
          customClass: {
            popup: 'custom-swal'
          }
        });
      }
    
      useEffect(() => {
        if (isLoading) {
          loadingMessage()
        } else {
          Swal.getPopup() && Swal.getPopup().classList.contains('custom-swal') ? Swal.close() : ''
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
    
      const token = searchParams.get('token')
    
    const handleVerify = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await axios.get(`/auth/verificar/${token}`, {
                withCredentials: true
            })
            navigate('/FazerLogin')
        } catch (error) {
            setIsLoading(false)
            errorMessage('Não foi possível enviar o E-mail de verificação', error)
        } finally {
            setIsLoading(false)
        }

    }


    return (
        
        <div>
            <Navbar />
            <div
                className=' bg-[url("/backgrounds/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%] h-screen flex justify-center items-center '>
                <div className='flex flex-col justify-center items-center w-[90%] h-auto space-y-4 md:space-y-6'>
                    <h1 className='text-[var(--color-white)] text-center font-title-alt text-4xl md:text-6xl xl:text-7xl'>Você está quase lá!</h1>
                    <p className='text-[var(--color-green)] font-text-app text-center text-lg md:text-2xl lg:text-4xl'>
                        Só precisamos verificar seu E-mail
                    </p>
                    <button onClick={ (e) => handleVerify()} className='bg-[var(--color-green)] border-0 p-2 lg:p-4 font-text-app hover:text-[var(--color-green)] hover:bg-[var(--color-white)] shadow-md 
                    rounded-2xl transition-colors duration-400 ease-in-out w-[50%] xl:w-[25%] flex justify-center items-center text-md md:text-3xl xl:text-3xl text-[var(--color-white)] '>Verificar</button>

                </div>


            </div>
            <Footer />
        </div>
    )
}

export default VerifyPage