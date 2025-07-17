import React from 'react'

const Input = ({name, value, onChange, placeholder, type = "text"}) => {
  return (
    <input className='p-2 bg-transparent border-none rounded-4xl text-[var(--color-white)] text-xs md:text-lg xl:text-xl font-text-small focus:outline-none focus:ring-0'
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