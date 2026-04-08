import { motion } from 'framer-motion'
import { Plus, Target, ArrowRight } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'
import { useNavigate } from 'react-router-dom'

interface Props {
  onAddExpense: () => void
  onAddGoal: () => void
}

export default function QuickActions({ onAddExpense, onAddGoal }: Props) {
  const navigate = useNavigate()

  return (
    <motion.div variants={fadeUp} className="flex gap-3">
      <button
        onClick={onAddExpense}
        className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3 rounded-xl text-sm transition-all duration-150"
      >
        <Plus size={16} weight="bold" />
        Novo gasto
      </button>

      <button
        onClick={onAddGoal}
        className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 active:scale-[0.97] text-neutral-100 font-semibold py-3 rounded-xl text-sm transition-all duration-150 border border-neutral-700/60"
      >
        <Target size={16} weight="bold" />
        Nova meta
      </button>

      <button
        onClick={() => navigate('/dashboard/expenses')}
        className="cursor-pointer w-12 flex items-center justify-center bg-neutral-800/60 hover:bg-neutral-800 active:scale-[0.97] text-neutral-400 hover:text-neutral-100 rounded-xl transition-all duration-150 border border-neutral-800"
        aria-label="Ver todos os gastos"
      >
        <ArrowRight size={18} />
      </button>
    </motion.div>
  )
}
