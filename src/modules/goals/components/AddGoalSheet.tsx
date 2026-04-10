import { useForm } from 'react-hook-form'
import Sheet from '@/shared/components/Sheet'
import type { CreateGoal } from '../types/createGoal'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (data: CreateGoal) => Promise<void>
}

export default function AddGoalSheet({ isOpen, onClose, onAdd }: Props) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<{
    name: string
    targetAmount: string
    deadline: string
  }>()

  const submit = async (data: { name: string; targetAmount: string; deadline: string }) => {
    await onAdd({
      name: data.name,
      targetAmount: parseFloat(data.targetAmount.replace(',', '.')),
      deadline: data.deadline,
    })
    reset()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title="Nova meta">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Objetivo
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ex: Viagem para Paris…"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('name', { required: 'Informe um objetivo' })}
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Valor alvo (R$)
            </label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
              {...register('targetAmount', {
                required: 'Informe o valor',
                pattern: { value: /^\d+([,\.]\d{1,2})?$/, message: 'Valor inválido' },
              })}
            />
            {errors.targetAmount && <p className="text-xs text-red-400 mt-1">{errors.targetAmount.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Prazo
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 [color-scheme:dark]"
              {...register('deadline', { required: 'Informe um prazo' })}
            />
            {errors.deadline && <p className="text-xs text-red-400 mt-1">{errors.deadline.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-1"
        >
          {isSubmitting
            ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
            : 'Criar meta'
          }
        </button>
      </form>
    </Sheet>
  )
}
