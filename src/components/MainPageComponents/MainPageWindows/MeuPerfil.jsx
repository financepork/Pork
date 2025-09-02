import React from 'react'
import DashboardGastos from '../MeuPerfilDashboards/DashboardGastos'
import DashboardEconomia from '../MeuPerfilDashboards/DashboardEconomia'
import Select from 'react-select/dist/declarations/src/Select'


const MeuPerfil = () => {

    const [inputMes, setInputMes] = useState(mesAtual)

    const diaAtual = new Date();

    const mesAtual = diaAtual.toLocaleString('pt-BR', { month: 'long'})


    return (
        <main
            className=' h-full w-full flex flex-col  '>
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="900" data-aos-easing="ease-in"
                className='flex flex-col xl:flex-row h-[100%] w-full bg-[var(--color-black)] rounded-t-2xl xl:rounded-t-4xl p-5 py-8 overflow-y-none items-center justify-around xl:items-start gap-4 xl:p-12'>
                <Select
                options={optionsSelect}
                value={optionsSelect.find(opt => opt.value === inputMes)}
                onChange={opt => setInputMes(opt.value)}
                placeholder={mesAtual}
                required
                className="w-[100%] md:w-[80%] shadow-2xl "
                classNames={{
                  control: () => 'bg-[var(--color-dark-green)] text-white rounded-2xl border-none min-h-[48px] focus:ring-2 focus:ring-[var(--color-green)]',
                  singleValue: () => 'text-white font-bold',
                  menu: () => 'bg-[var(--color-dark-green)] rounded-2xl',
                  option: ({ isSelected, isFocused }) =>
                    `text-white cursor-pointer ${isSelected ? 'bg-[var(--color-green)]' : isFocused ? 'bg-[var(--color-dark-green)]' : ''}`,
                  placeholder: () => 'text-white opacity-70',
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    borderRadius: '1rem',
                    border: 'none',
                    color: 'white',
                    minHeight: '48px',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: 'white',
                    fontWeight: 'bold',
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: 'var(--color-dark-green)',
                    color: 'white',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? 'var(--color-green)'
                      : state.isFocused
                        ? 'var(--color-dark-green)'
                        : 'var(--color-dark-green)',
                    color: 'white',
                    cursor: 'pointer',
                  }),
                  placeholder: (base) => ({
                    ...base,
                    color: 'white',
                    opacity: 0.7,
                  }),
                }}
              />
                <DashboardEconomia />
                <DashboardGastos />
            </div>
        </main>
    )
}

export default MeuPerfil