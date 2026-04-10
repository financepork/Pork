import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Sheet from '@/shared/components/Sheet'
import type { ExpenseCategory } from '../types/expense'
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_LABELS } from '../types/expense'
import type { CreateExpense } from '../types/createExpense'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (data: CreateExpense) => Promise<void>
}

const CATEGORIES = Object.keys(CATEGORY_LABELS) as ExpenseCategory[]

export default function AddExpenseSheet({ isOpen, onClose, onAdd }: Props) {
  const [selectedCat, setSelectedCat] = useState<ExpenseCategory>('outros')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<{
    title: string
    amount: string
    date: string
    note?: string
  }>({
    defaultValues: {
      date: new Date().toISOString().split('T')[0],
    },
  })

  const submit = async (data: { title: string; amount: string; date: string; note?: string }) => {
    await onAdd({
      title: data.title,
      category: selectedCat,
      amount: parseFloat(data.amount.replace(',', '.')),
      date: data.date,
      note: data.note,
    })
    reset()
    setSelectedCat('outros')
  }

  const handleClose = () => {
    reset()
    setSelectedCat('outros')
    onClose()
  }

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title="Novo gasto">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        {/* Title */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Descrição
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ex: Supermercado, iFood…"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('title', { required: 'Informe uma descrição' })}
          />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title.message}</p>}
        </div>

        {/* Amount + Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Valor (R$)
            </label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
              {...register('amount', {
                required: 'Informe o valor',
                pattern: { value: /^\d+([,\.]\d{1,2})?$/, message: 'Valor inválido' },
              })}
            />
            {errors.amount && <p className="text-xs text-red-400 mt-1">{errors.amount.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Data
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 [color-scheme:dark]"
              {...register('date', { required: 'Informe a data' })}
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2.5">
            Categoria
          </label>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => {
              const c = CATEGORY_COLORS[cat]
              const Icon = CATEGORY_ICONS[cat]
              const isSelected = selectedCat === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCat(cat)}
                  className={`cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 border
                    ${isSelected
                      ? `${c.bg} ${c.text} border-transparent`
                      : 'bg-transparent text-neutral-500 border-neutral-800 hover:border-neutral-600'
                    }`}
                >
                  <Icon size={12} weight="duotone" />
                  {CATEGORY_LABELS[cat]}
                </button>
              )
            })}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-1"
        >
          {isSubmitting
            ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
            : 'Registrar gasto'
          }
        </button>
      </form>
    </Sheet>
  )
}
