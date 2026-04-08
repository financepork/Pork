import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import type { User } from '../types/user'

interface Props {
  user: User
  totalGoals: number
  completedGoals: number
}

export default function ProfileStats({ user, totalGoals, completedGoals }: Props) {
  const stats = [
    { label: 'Salário mensal', value: formatCurrency(user.monthlyIncome) },
    { label: 'Metas ativas',   value: String(totalGoals - completedGoals) },
    { label: 'Metas concluídas', value: String(completedGoals) },
  ]

  return (
    <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="rounded-xl bg-neutral-900 border border-neutral-800/60 p-4"
        >
          <p className="text-xs text-neutral-500 font-medium mb-1">{label}</p>
          <p className="text-sm font-semibold text-neutral-100 tabular-nums">{value}</p>
        </div>
      ))}
    </motion.div>
  )
}
