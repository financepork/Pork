import React from 'react'

const CardWindow = ({titleText, imgSrc, windowOpen, setOpenWindow}) => {
  return (
    <button className='flex flex-col h-[30%] md:min-h-[90%]  w-[47%] max-w-100 md:max-w-80 xl:max-w-100 bg-[var(--color-green)] text-[var(--color-white)]  rounded-2xl justify-between  items-center p-4 shadow-2xl hover:scale-105 transition-all duration-500 ease-in space-y-2 md:space-y-4 cursor-pointer hover:bg-[var(--color-white)] hover:text-[var(--color-green)]
    '
     onClick={() => setOpenWindow(windowOpen)}>
      <img src={imgSrc} alt="Foto da Função" className=' h-[75%] w-[90%] md:w-[90%] rounded-2xl ' />
      <h2 className=' font-title-app text-center text-xl md:text-4xl  m-2'>{titleText}</h2>
    </button>
    
  )
}

export default CardWindow