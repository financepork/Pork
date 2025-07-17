import React, { useState } from 'react';
import Input from './FormsComponents/Input';

const Forms = ({mainText, altText}) => {

  const [form, setForm] = useState({ nome: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome digitado!: ${form.nome}`)
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className='flex flex-col bg-none shadow-lg 
     p-6 rounded-4xl m-4 space-y-6 xl:space-y-10 max-w-[90%] min-w-[80%]  animate-fade-up animate-duration-1000 animate-delay-100 animate-ease-in'>
        <div className='flex flex-col justify-center items-center space-y-1 md:space-y-2 xl:space-y-3 w-full whitespace-nowrap '>
          <h1 className='text-5xl md:text-7xl xl:text-8xl text-[var(--color-green)] font-title-alt'>{mainText}</h1>
          <p className='text-lg md:text-xl xl:text-3xl text-[var(--color-white)] font-text'>{altText}</p>
        </div>
        <div className='flex flex-col justify-center items-center space-y-4 '>
          <div className='flex flex-col w-full max-w-md space-y-1'>
            <label htmlFor="nomeCompleto" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Nome Completo:</label>
            <Input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </div>
          <div className='flex flex-col w-full max-w-md space-y-1'>
            <label htmlFor="nomeCompleto" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>E-mail:</label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              type='email'
            />
          </div>
          <div className='flex flex-col w-full max-w-md space-y-1'>
            <label htmlFor="nomeCompleto" className='text-lg md:text-2xl xl:text-3xl font-title-alt ml-1 text-[var(--color-green)]'>Senha:</label>
            <Input
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="Digite sua senha"
              type='password'
            />
          </div>
        </div>
        <button type='submit' className="border-0 text-[var(--color-white)] bg-[var(--color-green)] rounded-2xl text-md font-text md:text-xl xl:text-2xl p-3 hover:bg-[var(--color-white)] 
         hover:text-[var(--color-black)] transition-colors duration-400 ease-in-out">Enviar</button>
      </div>
    </form>


  )
}

export default Forms