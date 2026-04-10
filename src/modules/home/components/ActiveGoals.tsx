import { motion } from 'framer-motion'
import { ArrowRightIcon, TargetIcon } from '@phosphor-icons/react'
import { fadeUp, stagger } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import type { Goal } from '@/modules/goals/types/goal'
import { useNavigate } from 'react-router-dom'

interface Props {
  goals: Goal[]
}

export default function ActiveGoals({ goals }: Props) {
  const navigate = useNavigate()
  const active = goals.filter(g => g.currentAmount < g.targetAmount).slice(0, 3)

  if (active.length === 0) return null

  return (
    <div>
      {/* Section header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <p className="text-base font-semibold text-neutral-100">Metas ativas</p>
          <p className="text-xs text-neutral-500 mt-0.5">{active.length} em andamento</p>
        </div>
        <button
          onClick={() => navigate('/dashboard/goals')}
          className="cursor-pointer flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-brand transition-colors duration-150 mb-0.5"
        >
          ver todas
          <ArrowRightIcon size={13} weight="bold" />
        </button>
      </div>

      <motion.ul variants={stagger} initial="hidden" animate="show" className="space-y-2">
        {active.map(goal => {
          const pct = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100)
          const remaining = goal.targetAmount - goal.currentAmount
          return (
            <motion.li
              key={goal.id}
              variants={fadeUp}
              onClick={() => navigate('/dashboard/goals')}
              className="cursor-pointer px-4 py-4 rounded-xl bg-neutral-900 border border-neutral-800/40 hover:border-neutral-700/60 transition-colors duration-150"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                    <TargetIcon size={14} className="text-neutral-400" weight="duotone" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-neutral-100 truncate">{goal.name}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      faltam {formatCurrency(remaining)}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-bold text-neutral-300 tabular-nums shrink-0 ml-3">
                  {pct.toFixed(0)}%
                </span>
              </div>

              <div className="h-1 rounded-full bg-neutral-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-brand"
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
              </div>
            </motion.li>
          )
        })}
      </motion.ul>
    </div>
  )
}
