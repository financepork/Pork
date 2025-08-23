import { useState } from 'react'
import Input from '../components/FormsComponents/Input'
import Navbar from '../components/GeneralComponents/Navbar'
import Footer from '../components/GeneralComponents/Footer'
import Swal from 'sweetalert2'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios'




const RegisterPage = () => {

  const [inputNome, setInputNome] = useState('')

  const [inputEmail, setInputEmail] = useState('')

  const [inputPassword, setInputPassword] = useState('')

  const [inputConfirmPassword, setInputConfirmPassword] = useState('')

  const [erroEmail, setErroEmail] = useState(false)

  const [erroNome, setErroNome] = useState(false)

  const [erroPassword, setErroPassword] = useState(false)

  const [erroConfirmPassword, setErroConfirmPassword] = useState(false)

  const [viewPassword, setViewPassword] = useState(false)
  
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false)

  
  

  const errorMessage = (error) => {
    Swal.fire({
      title: 'Ocorreu um Erro',
      text: 'Verifique as Informações digitadas ou tente novamente mais tarde',
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

  const sucessMessage = () => {
    Swal.fire({
      title: 'Registro completo!',
      text: 'Verifique seu E-mail para Prosseguir',
      icon: 'success',
      color: 'var(--color-white)',
      background: 'var(--color-green)',
      confirmButtonText: 'Concluir',
      iconColor: 'var(--color-white)',
      customClass: {
        popup: '!rounded-2xl !p-6 !shadow-xl',
        confirmButton: '!text-green-500 !bg-white !border-none  '
      }
    })
  }

  const emailIsValid = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email)
  }

  const nameIsValid = (name) => {
      const namePattern = /^[A-Za-zÀ-ÿ\s]{2,}$/;
      return namePattern.test(name)
  }

  const isEqualPassword = (password, confirmPassword) => {
    return password === confirmPassword 
  }

  const passwordIsValid = (password) => {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      return passwordPattern.test(password)
  }


  const resetInputs = () => {
    setInputEmail('')
    setInputNome('')
    setInputPassword('')
    setInputConfirmPassword('')
    setErroNome(false)
    setErroEmail(false)
    setErroPassword(false)
  }

  const sendDataRegister = async () => {
    const dataUser = {
      "nome": inputNome,
      "email": inputEmail,
      "senha": inputPassword
    }
    try {
      await axios.post('/auth/register', dataUser, {
        withCredentials: true
      });
      sucessMessage()
      resetInputs()
    } catch (error) {
      errorMessage(error.response?.data)
    }

  }

  const handleRegister = (e) => {
    e.preventDefault()
    const isEmailValid = emailIsValid(inputEmail);
    const isNameValid = nameIsValid(inputNome);
    const isPasswordValid = passwordIsValid(inputPassword);
    const passwordMatches = isEqualPassword(inputPassword, inputConfirmPassword);

    setErroConfirmPassword(!passwordMatches);
    setErroPassword(!isPasswordValid);
    setErroNome(!isNameValid);
    setErroEmail(!isEmailValid);

    const formIsValid = isEmailValid && isNameValid && isPasswordValid && passwordMatches
    if(formIsValid){
      sendDataRegister()
    } else{
      errorMessage('Campos Inválidos')
    }
    
  }

  return (
    <main>
      <Navbar />
      <div
        className=' bg-[url("/backgrounds/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center lg:p-6 py-4'>
        <form onSubmit={handleRegister}>
          <div className='flex flex-col bg-none shadow-lg 
     p-6 rounded-4xl m-4 space-y-6 xl:space-y-16 max-w-[90%] min-w-[80%]  animate-fade-up animate-duration-1000 animate-delay-100 animate-ease-in'>
            <div className='flex flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-3 w-full whitespace-nowrap '>
              <h1 className='text-5xl md:text-7xl  text-[var(--color-green)] font-title-alt'>Registre-se</h1>
              <p className='text-lg md:text-xl xl:text-3xl text-[var(--color-white)] font-text'>Insira seus Dados</p>
            </div>
            <div className='flex flex-col justify-center items-center space-y-8 '>
              <div className='flex flex-col w-full max-w-md space-y-1'>

                <label htmlFor="Nome Completo" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Nome Completo </label>
                <Input
                  name="nome"
                  value={inputNome}
                  onChange={e => setInputNome(e.target.value)}
                  onBlur={(e) => validateName(e.target.value)}
                  placeholder="Digite seu nome"
                  required
                />
                {erroNome && <p className='text-red text-sm md:text-md xl:text-lg font-text-alt ml-1 ' >Digite um Nome válido</p>}

              </div>

              <div className='flex flex-col w-full max-w-md space-y-1'>

                <label htmlFor="Email" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>E-mail </label>
                <Input
                  name="email"
                  value={inputEmail}
                  onChange={e => setInputEmail(e.target.value)}
                  onBlur={(e) => validateEmail(e.target.value)}
                  placeholder="Example@gmail.com"
                  type='email'
                  required
                />
                {erroEmail && <p className='text-red text-sm md:text-md xl:text-lg font-title-alt ml-1 ' >Digite um E-mail válido</p>}
              </div>

              <div className='flex flex-col w-full max-w-md space-y-1'>

                <label htmlFor="Senha" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Senha </label>
                <div className='flex flex-row justify-between'>
                  <Input
                    name="senha"
                    value={inputPassword}
                    onChange={e => setInputPassword(e.target.value)}
                    onBlur={(e) => passwordIsValid(e.target.value, inputConfirmPassword)}
                    placeholder="Digite sua senha"
                    type={ viewPassword? 'text' : 'password'}
                    required
                  />
                  <button type='button' className=' inset-y-0 right-0 pr-4 flex items-center cursor-pointer' onClick={(e) => {
                    e.preventDefault()
                    setViewPassword(!viewPassword)}
                  }>{viewPassword? (
                    <FaEyeSlash className="text-gray-400 text-xl" />
                  ) : (
                    <FaEye className="text-gray-400 text-xl" />
                  )}</button>
                </div>
                {erroPassword && <p className='text-red text-sm md:text-md xl:text-lg font-title-alt ml-1 ' >Digite uma senha válida</p>}
                <p className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 mt-6 text-[var(--color-green)] m-3'>A Senha precisa possuir 
                </p>
                 <ul className='space-y-2 m-4 text-sm  lg:text-lg list-disc font-text-app ml-1 text-[var(--color-green)]'>
                    <li>No Mínimo 8 caracteres</li>
                    <li>No Mínimo 1  letra Maiúscula e 1 letra Minúscula</li>
                    <li>No Mínimo 1  Número</li>
                    <li>No Mínimo 1  Caractere Especial (Símbolos como: @, #, !...)</li>
                  </ul>

              </div>
              <div className='flex flex-col w-full max-w-md space-y-1'>

                <label htmlFor="Confirmar Senha" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Confirmar Senha </label>
                <div className='flex flex-row justify-between'>
                <Input
                  name="Confirmar senha"
                  value={inputConfirmPassword}
                  onChange={e => setInputConfirmPassword(e.target.value)}
                  onBlur={(e) => isEqualPassword(inputPassword, e.target.value)}
                  placeholder="Digite sua senha"
                  type={ viewConfirmPassword? 'text' : 'password'}
                  required
                />
                <button type='button' className=' inset-y-0 right-0 pr-4 flex items-center cursor-pointer' onClick={(e) => {
                  e.preventDefault()
                  setViewConfirmPassword(!viewConfirmPassword)
                }}>{viewConfirmPassword? (
                    <FaEyeSlash className="text-gray-400 text-xl" />
                  ) : (
                    <FaEye className="text-gray-400 text-xl" />
                  )}</button>
                  </div>
                {erroConfirmPassword && <p className='text-red text-sm md:text-md xl:text-lg font-title-alt ml-1 ' >Digite as senhas iguais</p>}
                
              </div>
            </div>

            <button type='submit' className="border-0 text-[var(--color-white)] bg-[var(--color-green)] rounded-2xl text-md font-text md:text-xl xl:text-2xl p-3 hover:bg-[var(--color-white)] 
         hover:text-[var(--color-black)] transition-colors duration-400 ease-in-out">Enviar</button>

          </div>
        </form>
      </div>
      <Footer />
    </main>

  )
}

export default RegisterPage