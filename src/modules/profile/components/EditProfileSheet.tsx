import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Sheet from '@/shared/components/Sheet'
import type { User, UpdateUserData } from '../types/user'

interface Props {
  isOpen: boolean
  user: User | null
  onClose: () => void
  onUpdate: (data: UpdateUserData) => Promise<void>
}

export default function EditProfileSheet({ isOpen, user, onClose, onUpdate }: Props) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<UpdateUserData>()

  useEffect(() => {
    if (user) reset({ name: user.name, email: user.email, monthlyIncome: user.monthlyIncome })
  }, [user, reset])

  const submit = async (data: UpdateUserData) => {
    await onUpdate(data)
  }

  return (
    <Sheet isOpen={isOpen} onClose={onClose} title="Editar perfil">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Nome
          </label>
          <input
            type="text"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('name', { required: 'Informe seu nome' })}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            E-mail
          </label>
          <input
            type="email"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('email', { required: 'Informe seu e-mail' })}
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Salário mensal (R$)
          </label>
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('monthlyIncome', {
              required: 'Informe o valor',
              valueAsNumber: true,
              min: { value: 0, message: 'Valor inválido' },
            })}
          />
          {errors.monthlyIncome && <p className="text-xs text-red-400 mt-1">{errors.monthlyIncome.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-1"
        >
          {isSubmitting
            ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
            : 'Salvar alterações'
          }
        </button>
      </form>
    </Sheet>
  )
}
