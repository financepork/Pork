import Navbar from '../components/GeneralComponents/Navbar'
import { useState } from 'react'
import Footer from '../components/GeneralComponents/Footer'
import Input from '../components/FormsComponents/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ChangePasswordPage = () => {

    const [searchParams] = useSearchParams();
    
    const token = searchParams.get('token');

    const navigate = useNavigate();

    const [inputPassword, setInputPassword] = useState('')
    const [inputConfirmPassword, setInputConfirmPassword] = useState('')
    const [viewPassword, setViewPassword] = useState(false)
    const [viewConfirmPassword, setViewConfirmPassword] = useState(false)
    const [erroPassword, setErroPassword] = useState(false)
    const [erroConfirmPassword, setErroConfirmPassword] = useState(false)

    const passwordIsValid = (password) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordPattern.test(password)
    }

    const isEqualPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    const handlePasswordBlur = (value) => {
        setErroPassword(!passwordIsValid(value))
    }

    const handleConfirmPasswordBlur = (value) => {
        setErroConfirmPassword(!isEqualPassword(inputPassword, value))
    }

    const errorMessage = (error) => {
        Swal.fire({
            title: 'Erro!',
            text: error,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

    const successMessage = () => {
        Swal.fire({
            title: 'Sucesso!',
            text: 'Senha redefinida com sucesso!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/fazer-login');
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            errorMessage('Token não encontrado na URL');
            return;
        }

        const isPasswordValid = passwordIsValid(inputPassword);
        const isConfirmPasswordValid = isEqualPassword(inputPassword, inputConfirmPassword);

        setErroPassword(!isPasswordValid);
        setErroConfirmPassword(!isConfirmPasswordValid);

        if (!isPasswordValid || !isConfirmPasswordValid) return;

        try {
            await axios.post(`/auth/redefinir-senha?token=${token}`, {
                password: inputPassword,
                secondPassword: inputConfirmPassword
            });
            successMessage();
        } catch (error) {
            console.error(error);
            const errorMsg = error.response?.data?.message || 'Erro ao redefinir senha. Tente novamente.';
            errorMessage(errorMsg);
        }
    }

    return (
        <main>
            <Navbar />
            <div className=' bg-[url("/bg-cofrinho.png")] bg-no-repeat bg-[length:cover] bg-[position:80%_80%]  min-h-screen flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col bg-none shadow-lg p-6 rounded-4xl m-4 space-y-6 xl:space-y-16 max-w-[90%] min-w-[80%]  animate-fade-up animate-duration-1000 animate-delay-100 animate-ease-in'>
                            <div className='flex flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-3 w-full whitespace-nowrap '>
                                <h1 className='text-5xl md:text-7xl xl:text-8xl text-[var(--color-green)] font-title-alt'>Redefinir senha</h1>
                                <p className='text-lg md:text-xl xl:text-3xl text-[var(--color-white)] font-text'>Insira sua nova senha abaixo</p>
                            </div>

                            <div className='flex flex-col justify-center items-center space-y-8 '>
                                <div className='flex flex-col w-full max-w-md space-y-1'>
                                    <label htmlFor="password" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Nova senha:</label>
                                    <div className='flex flex-row justify-between'>
                                        <Input
                                            name="password"
                                            value={inputPassword}
                                            onChange={e => setInputPassword(e.target.value)}
                                            onBlur={e => handlePasswordBlur(e.target.value)}
                                            placeholder="Digite sua nova senha"
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
                                    {erroPassword && <p className='text-red text-sm md:text-md xl:text-lg font-title-alt ml-1'>Digite uma senha válida</p>}
                                </div>

                                <div className='flex flex-col w-full max-w-md space-y-1'>
                                    <label htmlFor="confirmPassword" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Confirmar nova senha:</label>
                                    <div className='flex flex-row justify-between'>
                                        <Input
                                            name="confirmPassword"
                                            value={inputConfirmPassword}
                                            onChange={e => setInputConfirmPassword(e.target.value)}
                                            onBlur={e => handleConfirmPasswordBlur(e.target.value)}
                                            placeholder="Confirme sua nova senha"
                                            type={viewConfirmPassword ? 'text' : 'password'}
                                            required
                                        />
                                        <button type='button' className=' inset-y-0 right-0 pr-4 flex items-center cursor-pointer' onClick={(e) => {
                                            e.preventDefault()
                                            setViewConfirmPassword(!viewConfirmPassword)
                                        }
                                        }>{viewConfirmPassword ? (
                                            <FaEyeSlash className="text-gray-400 text-xl" />
                                        ) : (
                                            <FaEye className="text-gray-400 text-xl" />
                                        )}</button>
                                    </div>
                                    {erroConfirmPassword && <p className='text-red text-sm md:text-md xl:text-lg font-title-alt ml-1'>As senhas não coincidem</p>}
                                </div>

                                <div className='flex flex-col w-full max-w-md'>
                                    <p className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 mt-6 text-[var(--color-green)] m-3'>A Senha precisa possuir :</p>
                                    <ul className='space-y-2 m-4 text-sm lg:text-lg list-disc font-title-alt ml-1 text-[var(--color-green)]'>
                                        <li>No Mínimo 8 caracteres</li>
                                        <li>No Mínimo 1  letra Maiúscula e 1 letra Minúscula</li>
                                        <li>No Mínimo 1  Número</li>
                                        <li>No Mínimo 1  Caractere Especial (Símbolos como: @, #, !...)</li>
                                    </ul>
                                </div>
                            </div>
                            <button type='submit' className="border-0 text-[var(--color-white)] bg-[var(--color-green)] rounded-2xl text-md font-text md:text-xl xl:text-2xl p-3 hover:bg-[var(--color-white)] hover:text-[var(--color-black)] transition-colors duration-400 ease-in-out">Redefinir Senha</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default ChangePasswordPage