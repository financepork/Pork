import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'

interface Props {
  totalSaved: number
  totalTarget: number
  completedCount: number
}

export default function GoalsOverview({ totalSaved, totalTarget, completedCount }: Props) {
  const pct = totalTarget > 0 ? Math.min((totalSaved / totalTarget) * 100, 100) : 0
  const remaining = totalTarget - totalSaved

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-6 relative overflow-hidden"
    >
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-brand/5 blur-3xl pointer-events-none" />

      <p className="text-xs font-medium text-neutral-600 uppercase tracking-widest mb-3">
        Progresso total
      </p>

      <p
        className="font-brand font-bold text-neutral-50 tabular-nums tracking-tight leading-none mb-1"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
      >
        {formatCurrency(totalSaved)}
      </p>
      <p className="text-sm text-neutral-500 mb-5">
        de {formatCurrency(totalTarget)} · faltam {formatCurrency(remaining)}
      </p>

      <div className="h-1.5 rounded-full bg-neutral-800 overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full bg-brand"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-bold tabular-nums text-neutral-300">{pct.toFixed(0)}%</p>
        {completedCount > 0 && (
          <p className="text-xs font-medium text-brand">
            {completedCount} {completedCount === 1 ? 'concluída' : 'concluídas'} 🎉
          </p>
        )}
      </div>
    </motion.div>
  )
}
