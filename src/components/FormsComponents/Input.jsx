import React from 'react'

const Input = ({name, value, onChange, placeholder, type = "text"}) => {
  return (
    <input className='p-2 bg-gray-400 rounded-4xl'
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
    />
  )
}

export default Input