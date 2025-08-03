import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import Input from '../components/FormsComponents/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';





const Login = () => {

  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('')

  const [inputPassword, setInputPassword] = useState('')

  const [erroEmail, setErroEmail] = useState(false)

  const [erroPassword, setErroPassword] = useState(false)

  const [viewPassword, setViewPassword] = useState(false)

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

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
  }

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
  }

  const sendLogin = async () => {
    const dataUser = {
      "email": inputEmail,
      "senha": inputPassword
    }
    try {
      await axios.post('/auth/login', dataUser, {
        withCredentials: true
      });
      navigate('/mainpage')
    } catch (error) {
      errorMessage('Erro ao fazer login, tente novamente', error.response.data)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const isEmailValid = validateEmail(inputEmail)
    const isPasswordValid = validatePassword(inputPassword)

    setErroEmail(!isEmailValid)
    setErroPassword(!isPasswordValid)

    const isLoginValid = isEmailValid && isPasswordValid

    if (isLoginValid) {
      await sendLogin();
    } else {
      errorMessage('E-mail ou Senha Inválidos, tente novamente')
    }
  }


  return (
    <main>
      <Navbar />
      <div className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
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

                  <label htmlFor="Email" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>E-mail :</label>
                  <Input
                    name="email"
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                    onBlur={(e) => setErroEmail(!validateEmail(e.target.value))}
                    placeholder="Example@gmail.com"
                    type='email'
                    required
                  />
                  {erroEmail && <p className='text-red text-md md:text-xl xl:text-2xl font-title-alt ml-1 ' >Digite um E-mail válido</p>}
                </div>

                <div className='flex flex-col w-full max-w-md space-y-1'>

                  <label htmlFor="Senha" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Senha :</label>
                  <div className='flex flex-row justify-between'>
                    <Input
                      name="senha"
                      value={inputPassword}
                      onChange={e => setInputPassword(e.target.value)}
                      onBlur={(e) => setErroPassword(!validatePassword(e.target.value))}
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
                  {erroPassword && <p className='text-red text-md md:text-xl xl:text-2xl font-title-alt ml-1 ' >Digite uma senha válida</p>}

                </div>
              </div>
              <button type='submit' className="border-0 text-[var(--color-white)] bg-[var(--color-green)] rounded-2xl text-md font-text md:text-xl xl:text-2xl p-3 hover:bg-[var(--color-white)] 
         hover:text-[var(--color-black)] transition-colors duration-400 ease-in-out">Enviar</button>
            </div>
          </form>
          <a href="/Register" className='text-[var(--color-white)] text-xl underline '><p>Não se registrou?</p></a>
        </div>

      </div>
      <Footer />
    </main>
  )
}

export default Login
