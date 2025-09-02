import React from 'react'

const Gasto = ({gasto, imgPath}) => {
    return (
        <div className={`text-white font-text flex flex-row text-xl gap-5 lg:gap-6 md:text-3xl xl:text-4xl max-w-[70%]`}>
            <div className='w-[15%] flex items-center justify-center'>
                <img src={imgPath} alt="Icon da Categoria de gasto" className='w-[100%]'/>
            </div>
                
            <div className=''>
                <p >{gasto.descricao}</p>
                <p >R$ {gasto.valor}</p>
            </div>
            
        </div>
    )
}

export default Gasto