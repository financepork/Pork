import Navbar from '../components/Navbar'
import { useState } from 'react'
import Footer from '../components/Footer'
import Input from '../components/FormsComponents/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChangePassword = () => {

const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('')

  const [inputPassword, setInputPassword] = useState('')

  const [viewPassword, setViewPassword] = useState(false)
    return (
        <main>
            <Navbar />
            <div className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <form>
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
                                        placeholder="Example@gmail.com"
                                        type='email'
                                        required
                                    />
                                </div>

                                <div className='flex flex-col w-full max-w-md space-y-1'>

                                    <label htmlFor="Senha" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Senha :</label>
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
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default ChangePassword