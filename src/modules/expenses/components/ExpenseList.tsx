import { motion, AnimatePresence } from 'framer-motion'
import { Spinner } from '@phosphor-icons/react'
import { staggerFast, fadeUp } from '@/lib/animations'
import ExpenseItem from './ExpenseItem'
import type { Expense } from '../types/expense'
import { formatShortDate } from '@/shared/utils/date'

interface Props {
  expenses: Expense[]
  loading: boolean
  onDelete: (id: string) => void
}

function groupByDate(expenses: Expense[]): [string, Expense[]][] {
  const map = new Map<string, Expense[]>()
  for (const e of expenses) {
    const list = map.get(e.date) ?? []
    list.push(e)
    map.set(e.date, list)
  }
  return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]))
}

export default function ExpenseList({ expenses, loading, onDelete }: Props) {
  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner size={24} className="text-neutral-600 animate-spin" />
      </div>
    )
  }

  if (expenses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="text-4xl mb-3">🧾</p>
        <p className="text-sm font-medium text-neutral-300">Nenhum gasto registrado</p>
        <p className="text-xs text-neutral-600 mt-1">Adicione seu primeiro gasto do mês</p>
      </div>
    )
  }

  const groups = groupByDate(expenses)

  return (
    <motion.div variants={staggerFast} initial="hidden" animate="show" className="space-y-5">
      <AnimatePresence>
        {groups.map(([date, items]) => (
          <motion.div key={date} variants={fadeUp} layout>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 px-1">
              {formatShortDate(date)}
            </p>
            <div className="space-y-1.5">
              {items.map(expense => (
                <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
              ))}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
