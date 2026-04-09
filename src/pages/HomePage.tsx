import { useState } from 'react'
import { motion } from 'framer-motion'
import { HandWavingIcon } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { useUser } from '@/shared/contexts/userContext'
import { useFindAllExpenses } from '@/modules/expenses/hooks/useFindAllExpenses'
import { useCreateExpense } from '@/modules/expenses/hooks/useCreateExpense'
import { useFindAllGoals } from '@/modules/goals/hooks/useFindAllGoals'
import { useCreateGoal } from '@/modules/goals/hooks/useCreateGoal'
import type { CreateExpense } from '@/modules/expenses/types/createExpense'
import type { CreateGoal } from '@/modules/goals/types/createGoal'
import BalanceCard from '@/modules/home/components/BalanceCard'
import QuickActions from '@/modules/home/components/QuickActions'
import RecentExpenses from '@/modules/home/components/RecentExpenses'
import ActiveGoals from '@/modules/home/components/ActiveGoals'
import AddExpenseSheet from '@/modules/expenses/components/AddExpenseSheet'
import AddGoalSheet from '@/modules/goals/components/AddGoalSheet'
import PageHeader from '@/shared/components/PageHeader'
import { getCurrentMonthYear, getGreeting } from '@/shared/utils/date'
import { showToast } from '@/shared/components/Toast'

export default function HomePage() {
  const { user } = useUser()
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)

  const { year, month } = getCurrentMonthYear()
  const prefix = `${year}-${String(month).padStart(2, '0')}`

  const { data: allExpenses = [] } = useFindAllExpenses()
  const { data: goals = [] } = useFindAllGoals()
  const createExpense = useCreateExpense()
  const createGoal = useCreateGoal()

  const recentExpenses = [...allExpenses].slice(0, 4)
  const monthlyExpenses = allExpenses
    .filter(e => e.date.startsWith(prefix))
    .reduce((s, e) => s + e.amount, 0)

  const handleAddExpense = async (data: CreateExpense) => {
    await createExpense.mutateAsync(data)
    setIsAddExpenseOpen(false)
    showToast.success('Gasto registrado', { description: 'Seu gasto foi adicionado ao mês.' })
  }

  const handleAddGoal = async (data: CreateGoal) => {
    await createGoal.mutateAsync(data)
    setIsAddGoalOpen(false)
    showToast.success('Meta criada', { description: 'Sua nova meta está pronta para receber depósitos.' })
  }

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">

          <PageHeader
            icon={HandWavingIcon}
            title={`${getGreeting()}, ${user?.name?.split(' ')[0] ?? 'convidado'}`}
            description={`Hoje é ${new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}. Veja como estão suas finanças.`}
          />

          <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:items-start">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-4 lg:sticky lg:top-8"
            >
              <BalanceCard
                monthlyIncome={user?.monthlyIncome ?? 0}
                monthlyExpenses={monthlyExpenses}
              />
              <QuickActions
                onAddExpense={() => setIsAddExpenseOpen(true)}
                onAddGoal={() => setIsAddGoalOpen(true)}
              />
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-8 mt-8 lg:mt-0"
            >
              <motion.div variants={fadeUp}>
                <RecentExpenses expenses={recentExpenses} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ActiveGoals goals={goals} />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      <AddExpenseSheet
        isOpen={isAddExpenseOpen}
        onClose={() => setIsAddExpenseOpen(false)}
        onAdd={handleAddExpense}
      />
      <AddGoalSheet
        isOpen={isAddGoalOpen}
        onClose={() => setIsAddGoalOpen(false)}
        onAdd={handleAddGoal}
      />
    </>
  )
}
