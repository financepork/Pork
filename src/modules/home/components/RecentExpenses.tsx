import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import { formatRelativeDate } from '@/shared/utils/date'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '@/modules/expenses/types/expense'
import type { Expense } from '@/modules/expenses/types/expense'
import { useNavigate } from 'react-router-dom'

interface Props {
  expenses: Expense[]
}

export default function RecentExpenses({ expenses }: Props) {
  const navigate = useNavigate()

  if (expenses.length === 0) return null

  return (
    <div>
      {/* Section header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-base font-semibold text-neutral-100">Últimos gastos</p>
          <p className="text-xs text-neutral-500 mt-0.5">{expenses.length} transações recentes</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/expenses')}
          className="cursor-pointer flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-brand transition-colors duration-150 mb-0.5"
        >
          ver todos
          <ArrowRight size={13} weight="bold" />
        </button>
      </div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-1.5"
      >
        {expenses.map(expense => {
          const colors = CATEGORY_COLORS[expense.category]
          return (
            <motion.li
              key={expense.id}
              variants={fadeUp}
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800/40 hover:border-neutral-700/60 transition-colors duration-150"
            >
              <div className={`w-9 h-9 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-100 truncate">{expense.title}</p>
                <p className={`text-xs font-medium mt-0.5 ${colors.text}`}>
                  {CATEGORY_LABELS[expense.category]}
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm font-semibold text-neutral-100 tabular-nums">
                  -{formatCurrency(expense.amount)}
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">{formatRelativeDate(expense.date)}</p>
              </div>
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}
