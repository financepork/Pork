import React, {useState} from 'react'
import Forms from '../components/Forms'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import Swal from 'sweetalert2'


const Register = () => {

  const [inputNome, setInputNome] = useState('')

  const [inputEmail, setInputEmail] = useState('')

  const [inputPassword, setInputPassword] = useState('')

  const resetInputs = () => {
    setInputEmail('')
    setInputNome('')
    setInputPassword('')
  }

  const sendDataRegister = async (e) => {
    e.preventDefault()
    const dataUser = {
      nome: inputNome,
      email: inputEmail,
      password: inputPassword
    }
    try {
      //await axios.post('url', dataUser);
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
          confirmButton: '!text-green-500 !bg-white !border-white  '
        }
      })
     

    } catch (error) {
      Swal.fire({
        title: 'Ocorreu um Erro',
        text: 'Verifique as Informações digitadas ou tente novamente mais tarde',
        icon: 'error',
        color: 'var(--color-red)',
        background: 'var(--color-white)',
        footer: error.message || String(error),
        customClass: {
          popup: '!rounded-2xl !p-6 !shadow-xl',
          confirmButton: '!text-white-500 !bg-red-500 !border-white  '
        }
      })
    } finally {
      resetInputs()
    }

  }

  return (
    <main>
      <Navbar />
      <div
        className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
        <Forms
          mainText='Registre-se'
          altText='Insira seus dados'
          nomeCompleto={true}
          functionForm={sendDataRegister}
          inputNome={inputNome}
          setInputNome={setInputNome}
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          inputPassword={inputPassword}
          setInputPassword={setInputPassword} />
      </div>
      <Footer />
    </main>

  )
}

export default Register