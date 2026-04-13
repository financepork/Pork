import { useEffect, useRef, useState } from 'react'
import { DotsThreeVertical, TrashIcon } from '@phosphor-icons/react'
import { formatCurrency } from '@/shared/utils/currency'
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_LABELS } from '../types/expense'
import type { Expense } from '../types/expense'

interface Props {
  expense: Expense
  onDelete: (id: string) => void
}

export default function ExpenseItem({ expense, onDelete }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const colors = CATEGORY_COLORS[expense.category]
  const Icon = CATEGORY_ICONS[expense.category]

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800/50 hover:border-neutral-700/50 transition-colors duration-150">
      {/* Category icon */}
      <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
        <Icon size={20} className={colors.text} weight="duotone" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-100 truncate">{expense.title}</p>
        <p className={`text-xs font-medium ${colors.text}`}>{CATEGORY_LABELS[expense.category]}</p>
      </div>

      {/* Amount */}
      <p className="text-sm font-semibold text-neutral-100 tabular-nums shrink-0">
        -{formatCurrency(expense.amount)}
      </p>

      {/* Three dots */}
      <div className="relative shrink-0" ref={ref}>
        <button
          onClick={() => setOpen(v => !v)}
          className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg text-neutral-600 hover:text-neutral-300 hover:bg-neutral-800 transition-colors duration-150"
          aria-label="Opções"
        >
          <DotsThreeVertical size={16} weight="bold" />
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-1 z-20 min-w-35 bg-neutral-800 border border-neutral-700/60 rounded-xl shadow-xl overflow-hidden">
            <button
              onClick={() => { onDelete(expense.id); setOpen(false) }}
              className="cursor-pointer w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors duration-150"
            >
              <TrashIcon size={14} />
              Excluir gasto
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
