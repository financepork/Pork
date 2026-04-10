import { useState } from 'react'
import { TrashIcon } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatCurrency } from '@/shared/utils/currency'
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_LABELS } from '../types/expense'
import type { Expense } from '../types/expense'

interface Props {
  expense: Expense
  onDelete: (id: string) => void
}

export default function ExpenseItem({ expense, onDelete }: Props) {
  const [confirming, setConfirming] = useState(false)
  const colors = CATEGORY_COLORS[expense.category]
  const Icon = CATEGORY_ICONS[expense.category]

  return (
    <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800/50 hover:border-neutral-700/50 transition-colors duration-150 group">
      {/* Category icon */}
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
        <Icon size={24} className={colors.text} weight="duotone" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-100 truncate">{expense.title}</p>
        <p className={`text-xs font-medium ${colors.text}`}>{CATEGORY_LABELS[expense.category]}</p>
      </div>

      {/* Amount + delete */}
      <div className="flex items-center gap-2 shrink-0">
        <p className="text-sm font-semibold text-neutral-100 tabular-nums">
          -{formatCurrency(expense.amount)}
        </p>

        <AnimatePresence mode="wait">
          {confirming ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1"
            >
              <button
                onClick={() => onDelete(expense.id)}
                className="cursor-pointer text-[10px] font-semibold text-red-400 hover:text-red-300 px-2 py-1 rounded-lg bg-red-400/10 transition-colors"
              >
                sim
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="cursor-pointer text-[10px] font-semibold text-neutral-500 hover:text-neutral-300 px-2 py-1 rounded-lg bg-neutral-800 transition-colors"
              >
                não
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="delete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg text-neutral-600 hover:text-red-400 hover:bg-red-400/10 transition-colors duration-150 opacity-0 group-hover:opacity-100"
              onClick={() => setConfirming(true)}
              aria-label="Remover gasto"
            >
              <TrashIcon size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
