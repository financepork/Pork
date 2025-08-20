import Navbar from '../components/GeneralComponents/Navbar'
import { useState, useEffect } from 'react'
import Footer from '../components/GeneralComponents/Footer'
import Input from '../components/FormsComponents/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../contexts/AuthContext';



const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [inputEmail, setInputEmail] = useState('')

  const [inputPassword, setInputPassword] = useState('')

  const [viewPassword, setViewPassword] = useState(false)

  const [isLoading, setIsLoading] = useState(false);

  const loadingMessage = () => {
      Swal.fire({
        title: 'Verificando Login...',
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
  
  const msgRedefinePassword = () => {

        Swal.fire({
      title: "Digite o E-mail para redefinir a senha",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Enviar E-mail",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      customClass: {
        popup: '!rounded-2xl !p-6 !shadow-xl',
        confirmButton: '!text-white-500 !bg-green-400 !border-white  ',
        cancelButton: '!text-white-500 !bg-red-500 !border-white  ',

      },

      preConfirm: async (email) => {
        try {
          const emailUser = {
            "email": email
          }

          await axios.post('/auth/redefinir-email-senha', emailUser, {
            withCredentials: true
          });

        } catch (error) {
          
          Swal.showValidationMessage(`
    ${error.response?.data || error.message}
      `);
        }
      },

      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Pronto! Agora cheque o seu E-mail (Verificação expira em 10min)`,
        });
      }
    });
  }

  const msgResendEmail = () => {

    Swal.fire({
      title: "Digite o E-mail que deseja Verificar",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Reenviar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      customClass: {
        popup: '!rounded-2xl !p-6 !shadow-xl',
        confirmButton: '!text-white-500 !bg-green-400 !border-white  ',
        cancelButton: '!text-white-500 !bg-red-500 !border-white  ',
      },
      preConfirm: async (email) => {
        try {
          const emailResent = {
            "email": email
          }
          await axios.post('/auth/reenviar-email', emailResent, {
            withCredentials: true
          })
        } catch (error) {
          Swal.showValidationMessage(`
    ${error.response?.data}
      `);
        }
      },

      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Pronto! Agora cheque o seu E-mail (Verificação expira em 10min)`,
        });
      }

    });
  }

  const redefinePassword = () => {
    msgRedefinePassword()
  }
  const resendEmail = () => {
    msgResendEmail()
  }


  const errorMessage = (errorText, error) => {
    Swal.fire({
      title: 'Erro!',
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



  const handleLogin = async (e) => {
    e.preventDefault()

    setIsLoading(true);

    if (!inputEmail || !inputPassword) {
      errorMessage('Por favor, preencha todos os campos');
      return;
    }
    
    const result = await login(inputEmail, inputPassword);

    if (result.success) {
      setIsLoading(false);
      navigate('/PaginaPrincipal');
    } else {
      setIsLoading(false)
      errorMessage('Erro ao fazer login, tente novamente', result.error);
    }
  }


  return (
    <main>
      <Navbar />
      <div className=' bg-[url("/backgrounds/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <form onSubmit={handleLogin}>
            <div className='flex flex-col bg-none shadow-lg 
     p-6 rounded-4xl m-4 space-y-6 xl:space-y-16 max-w-[90%] min-w-[80%]  animate-fade-up animate-duration-1000 animate-delay-100 animate-ease-in'>
              <div className='flex flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-3 w-full whitespace-nowrap '>
                <h1 className='text-5xl md:text-7xl xl:text-8xl text-[var(--color-green)] font-title-alt'>Login</h1>
                <p className='text-lg md:text-xl xl:text-3xl text-[var(--color-white)] font-text'>Insira seus Dados</p>
              </div>

              <div className='flex flex-col justify-center items-center space-y-8 '>
                <div className='flex flex-col w-full max-w-md space-y-1'>

                  <label htmlFor="Email" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>E-mail </label>
                  <Input
                    name="email"
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                    placeholder="Example@gmail.com"
                    type='email'
                    required
                  />
                </div>

                <div className='flex flex-col w-full max-w-md space-y-1'>

                  <label htmlFor="Senha" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Senha </label>
                  <div className='flex flex-row justify-between'>
                    <Input
                      name="senha"
                      value={inputPassword}
                      onChange={e => setInputPassword(e.target.value)}
                      placeholder="Digite sua senha"
                      type={viewPassword ? 'text' : 'password'}
                      required
                    />
                    <button type='button' className=' inset-y-0 right-0 pr-4 flex items-center cursor-pointer' onClick={(e) => {
                      e.preventDefault()
                      setViewPassword(!viewPassword)
                    }
                    }>{viewPassword ? (
                      <FaEyeSlash className="text-gray-400 text-xl" />
                    ) : (
                      <FaEye className="text-gray-400 text-xl" />
                    )}</button>
                  </div>
                </div>
              </div>
              <button type='submit' className="border-0 text-[var(--color-white)] bg-[var(--color-green)] rounded-2xl text-md font-text md:text-xl xl:text-2xl p-3 hover:bg-[var(--color-white)] 
         hover:text-[var(--color-black)] transition-colors duration-400 ease-in-out">Enviar</button>
            </div>
          </form>
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row justify-center items-center'>
              <button type='button' onClick={() => resendEmail()} className="border-0 text-center text-[var(--color-white)] rounded-2xl text-sm font-text md:text-lg xl:text-xl p-3 bg-none underline cursor-pointer ">Verificar E-mail</button>
              <button type='button' onClick={()=> redefinePassword()} className="border-0 text-center text-[var(--color-white)] rounded-2xl text-sm font-text md:text-lg xl:text-xl p-3 bg-none underline cursor-pointer ">Redefinir Senha</button>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </main>
  )
}

export default LoginPage
