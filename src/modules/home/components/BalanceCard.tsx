import { motion } from 'framer-motion'
import { TrendUp, TrendDown } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'

interface Props {
  monthlyIncome: number
  monthlyExpenses: number
}

export default function BalanceCard({ monthlyIncome, monthlyExpenses }: Props) {
  const balance = monthlyIncome - monthlyExpenses
  const pct = Math.min((monthlyExpenses / monthlyIncome) * 100, 100)
  const isOver = monthlyExpenses > monthlyIncome

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-7 overflow-hidden relative"
    >
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      {/* Label */}
      <p className="text-xs font-medium text-neutral-600 uppercase tracking-widest mb-4">
        Disponível este mês
      </p>

      {/* Hero number */}
      <p
        className="font-brand font-bold text-neutral-50 tabular-nums leading-none tracking-tight mb-1"
        style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
      >
        {formatCurrency(balance < 0 ? 0 : balance)}
      </p>

      {/* Progress bar */}
      <div className="mt-6 mb-6">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-neutral-600">Gastos do mês</span>
          <span className={`font-medium ${isOver ? 'text-red-400' : 'text-neutral-400'}`}>
            {pct.toFixed(0)}% do salário
          </span>
        </div>
        <div className="h-1 rounded-full bg-neutral-800 overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${isOver ? 'bg-red-400' : 'bg-brand'}`}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-800/60 mb-5" />

      {/* Income / Expenses */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
            <TrendUp size={15} weight="bold" className="text-brand" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-600 font-medium uppercase tracking-wider mb-0.5">Entrada</p>
            <p className="text-sm font-semibold text-neutral-200 tabular-nums leading-tight">
              {formatCurrency(monthlyIncome)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-red-400/10 flex items-center justify-center shrink-0">
            <TrendDown size={15} weight="bold" className="text-red-400" />
          </div>
          <div>
            <p className="text-[10px] text-neutral-600 font-medium uppercase tracking-wider mb-0.5">Saídas</p>
            <p className="text-sm font-semibold text-neutral-200 tabular-nums leading-tight">
              {formatCurrency(monthlyExpenses)}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
