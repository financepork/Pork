import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trash, PiggyBank } from '@phosphor-icons/react'
import { AnimatePresence } from 'framer-motion'
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
  const pct = Math.min((goal.savedAmount / goal.targetAmount) * 100, 100)
  const remaining = goal.targetAmount - goal.savedAmount
  const isComplete = pct >= 100

  return (
    <motion.div
      variants={fadeUp}
      layout
      className={`rounded-2xl border p-5 transition-colors duration-150 ${
        isComplete
          ? 'bg-brand/5 border-brand/20'
          : 'bg-neutral-900 border-neutral-800/60 hover:border-neutral-700/60'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl leading-none">{goal.emoji}</span>
          <div>
            <p className={`text-sm font-semibold ${isComplete ? 'text-brand' : 'text-neutral-100'}`}>
              {goal.title}
            </p>
            {goal.deadline && (
              <p className="text-xs text-neutral-500">até {formatDeadline(goal.deadline)}</p>
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
              className="flex items-center gap-1"
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
              className="cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg text-neutral-700 hover:text-red-400 hover:bg-red-400/10 transition-all duration-150"
              aria-label="Remover meta"
            >
              <Trash size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${isComplete ? 'bg-brand' : 'bg-brand'}`}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
        </div>
      </div>

      {/* Amounts + % */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-lg font-bold text-neutral-50 tabular-nums leading-tight">
            {formatCurrency(goal.savedAmount)}
          </p>
          <p className="text-xs text-neutral-500">
            de {formatCurrency(goal.targetAmount)}
          </p>
        </div>
        <p className={`text-2xl font-bold tabular-nums ${isComplete ? 'text-brand' : 'text-neutral-400'}`}>
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
          className="cursor-pointer w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-[0.98] text-neutral-100 text-sm font-semibold transition-all duration-150 border border-neutral-700/60"
        >
          <PiggyBank size={16} weight="duotone" />
          Adicionar valor · faltam {formatCurrency(remaining)}
        </button>
      )}
    </motion.div>
  )
}
