import { useForm } from 'react-hook-form'
import { TargetIcon } from '@phosphor-icons/react'
import Sheet from '@/shared/components/Sheet'
import { formatCurrency } from '@/shared/utils/currency'
import type { Goal } from '../types/goal'

interface Props {
  goal: Goal | null
  onClose: () => void
  onDeposit: (goalId: string, amount: number) => Promise<void>
}

export default function DepositSheet({ goal, onClose, onDeposit }: Props) {
  const remaining = goal ? goal.targetAmount - goal.currentAmount : 0
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<{ amount: string }>()

  const submit = async (data: { amount: string }) => {
    if (!goal) return
    await onDeposit(goal.id, parseFloat(data.amount.replace(',', '.')))
    reset()
  }

  const handleClose = () => {
    reset()
    onClose()
  }

  return (
    <Sheet isOpen={!!goal} onClose={handleClose} title="Adicionar valor">
      {goal && (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-800/60 border border-neutral-700/50">
            <div className="w-9 h-9 rounded-xl bg-neutral-700 flex items-center justify-center shrink-0">
              <TargetIcon size={16} className="text-neutral-400" weight="duotone" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-100">{goal.name}</p>
              <p className="text-xs text-neutral-500">
                Faltam {formatCurrency(remaining)} para concluir
              </p>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Valor (R$)
            </label>
            <div className="flex items-baseline gap-2">
              <span className="text-lg text-neutral-600 font-semibold">R$</span>
              <input
                type="text"
                inputMode="decimal"
                autoFocus
                placeholder="0,00"
                className="flex-1 bg-transparent text-neutral-100 text-2xl font-bold pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700 tabular-nums"
                {...register('amount', {
                  required: 'Informe o valor',
                  pattern: { value: /^\d+([,\.]\d{1,2})?$/, message: 'Valor inválido' },
                  validate: v => parseFloat(v.replace(',', '.')) > 0 || 'Valor deve ser maior que zero',
                })}
              />
            </div>
            {errors.amount && <p className="text-xs text-red-400 mt-1.5">{errors.amount.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {isSubmitting
              ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
              : 'Confirmar depósito'
            }
          </button>
        </form>
      )}
    </Sheet>
  )
}
