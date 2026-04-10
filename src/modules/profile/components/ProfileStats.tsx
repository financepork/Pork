import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import {
  PencilSimpleIcon,
  CurrencyDollarIcon,
  PiggyBankIcon,
  LeafIcon,
  ChartLineUpIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react'
import type { User } from '../types/user'

const PLAN_CONFIG = {
  basico: {
    label: 'Básico',
    description: 'Economiza o essencial',
    icon: LeafIcon,
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  intermediario: {
    label: 'Intermediário',
    description: 'Equilíbrio e consistência',
    icon: ChartLineUpIcon,
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  avancado: {
    label: 'Avançado',
    description: 'Máxima disciplina',
    icon: RocketLaunchIcon,
    accent: 'text-brand',
    bg: 'bg-brand/10',
    border: 'border-brand/20',
  },
} as const

interface Props {
  user: User
  onEdit: () => void
}

export default function ProfileStats({ user, onEdit }: Props) {
  const plan = PLAN_CONFIG[user.savingsProfile]
  const PlanIcon = plan.icon

  return (
    <motion.div variants={stagger} className="space-y-3">
      {/* Salary + Savings */}
      <div className="grid grid-cols-2 gap-3">
        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5"
        >
          <div className="w-8 h-8 rounded-xl bg-brand/10 flex items-center justify-center mb-3">
            <CurrencyDollarIcon size={16} className="text-brand" weight="duotone" />
          </div>
          <p
            className="font-brand font-bold text-neutral-50 tabular-nums tracking-tight leading-none mb-1"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
          >
            {formatCurrency(user.monthlyIncome)}
          </p>
          <p className="text-xs text-neutral-500 font-medium">Salário mensal</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5"
        >
          <div className="w-8 h-8 rounded-xl bg-purple-400/10 flex items-center justify-center mb-3">
            <PiggyBankIcon size={16} className="text-purple-400" weight="duotone" />
          </div>
          <p
            className="font-brand font-bold text-neutral-50 tabular-nums tracking-tight leading-none mb-1"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
          >
            {formatCurrency(user.monthlySavings)}
          </p>
          <p className="text-xs text-neutral-500 font-medium">A economizar</p>
        </motion.div>
      </div>

      {/* Plan — full width */}
      <motion.div
        variants={fadeUp}
        className={`rounded-2xl bg-neutral-900 border ${plan.border} p-5 flex items-center gap-4`}
      >
        <div className={`w-10 h-10 rounded-xl ${plan.bg} flex items-center justify-center shrink-0`}>
          <PlanIcon size={18} className={plan.accent} weight="duotone" />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold ${plan.accent}`}>{plan.label}</p>
          <p className="text-xs text-neutral-500 mt-0.5">{plan.description}</p>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-600">Plano</span>
      </motion.div>

      {/* Edit trigger */}
      <motion.button
        variants={fadeUp}
        onClick={onEdit}
        className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-neutral-700 hover:border-neutral-500 text-neutral-500 hover:text-neutral-300 text-xs font-semibold transition-all duration-150"
      >
        <PencilSimpleIcon size={13} />
        Editar salário ou plano
      </motion.button>
    </motion.div>
  )
}
