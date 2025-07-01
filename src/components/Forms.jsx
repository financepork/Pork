import React, { useState } from 'react';
import Input from './FormsComponents/Input';

const Forms = () => {

  const [form, setForm] = useState({nome: ''});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome digitado!: ${form.nome}`)
  }

  return (
    <div className='flex flex-col bg-gray-200 w-min h-min
     p-8 rounded-4xl gap-4'>
      <form onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <Input
          name="nome" 
          value={form.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>

  )
}

export default Forms