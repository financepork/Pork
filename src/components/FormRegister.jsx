import React from 'react'

const FormRegister = () => {
  return (
    <div>
        <h1>Registrar</h1>
        <label htmlFor="nomeCompleto">Nome Completo:</label>
        <input type="text" name='nomeCompleto' placeholder='Ex: Fulano da Silva'/>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" placeholder='Ex: example@example.com'/>
        <input type="text" placeholder='Ex: (24) 9996-6778'/>
        <label htmlFor="password">Senha:</label>
        <input type="password" name="password"/>
        <label htmlFor="repetirSenha">Repetir Senha:</label>
        <input type="password" name="repetirSenha" />
        <button type="submit">Enviar</button>

    </div>
  )
}

export default FormRegister