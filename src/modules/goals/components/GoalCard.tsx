import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrashIcon, PiggyBankIcon, TargetIcon } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import { formatDeadline } from '@/shared/utils/date'
import type { Goal } from '../types/goal'

interface Props {
  goal: Goal
  onDeposit: (goal: Goal) => void
  onDelete: (id: string) => void
}

export default function GoalCard({ goal, onDeposit, onDelete }: Props) {
  const [confirming, setConfirming] = useState(false)
  const pct = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)
  const remaining = goal.targetAmount - goal.currentAmount
  const isComplete = pct >= 100

  return (
    <motion.div
      variants={fadeUp}
      layout
      className={`rounded-2xl border p-5 transition-colors duration-150 ${
        isComplete
          ? 'bg-brand/5 border-brand/30'
          : 'bg-neutral-900 border-brand/15 hover:border-brand/30'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isComplete ? 'bg-brand/20' : 'bg-brand/10'}`}>
            <TargetIcon size={16} className="text-brand" weight="duotone" />
          </div>
          <div className="min-w-0">
            <p className={`text-sm font-semibold truncate ${isComplete ? 'text-brand' : 'text-neutral-100'}`}>
              {goal.name}
            </p>
            {goal.deadline && (
              <p className="text-xs text-neutral-500 mt-0.5">até {formatDeadline(goal.deadline)}</p>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {confirming ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 shrink-0"
            >
              <button
                onClick={() => onDelete(goal.id)}
                className="cursor-pointer text-[10px] font-semibold text-red-400 hover:text-red-300 px-2 py-1 rounded-lg bg-red-400/10 transition-colors"
              >
                remover
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="cursor-pointer text-[10px] font-semibold text-neutral-500 hover:text-neutral-300 px-2 py-1 rounded-lg bg-neutral-800 transition-colors"
              >
                cancelar
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="icon"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setConfirming(true)}
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg text-neutral-700 hover:text-red-400 hover:bg-red-400/10 transition-all duration-150 shrink-0"
              aria-label="Remover meta"
            >
              <TrashIcon size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-brand"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </div>
      </div>

      {/* Amounts + % */}
      <div className="flex items-end justify-between gap-3 mb-4">
        <div className="min-w-0">
          <p className="text-base font-bold text-neutral-50 tabular-nums leading-tight truncate">
            {formatCurrency(goal.currentAmount)}
          </p>
          <p className="text-xs text-neutral-500 truncate">
            de {formatCurrency(goal.targetAmount)}
          </p>
        </div>
        <p className={`text-xl font-bold tabular-nums shrink-0 ${isComplete ? 'text-brand' : 'text-brand/60'}`}>
          {pct.toFixed(0)}%
        </p>
      </div>

      {/* Action */}
      {isComplete ? (
        <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand/10 border border-brand/20">
          <span className="text-sm font-semibold text-brand">🎉 Meta concluída!</span>
        </div>
      ) : (
        <button
          onClick={() => onDeposit(goal)}
          className="cursor-pointer w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 border active:scale-[0.98] bg-brand/10 hover:bg-brand/20 text-brand border-brand/20"
        >
          <PiggyBankIcon size={15} weight="duotone" />
          <span className="truncate">Adicionar · faltam {formatCurrency(remaining)}</span>
        </button>
      )}
    </motion.div>
  )
}
