import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HandWavingIcon } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { useUser } from '@/shared/contexts/userContext'
import BalanceCard from '@/modules/home/components/BalanceCard'
import QuickActions from '@/modules/home/components/QuickActions'
import RecentExpenses from '@/modules/home/components/RecentExpenses'
import ActiveGoals from '@/modules/home/components/ActiveGoals'
import AddExpenseSheet from '@/modules/expenses/components/AddExpenseSheet'
import AddGoalSheet from '@/modules/goals/components/AddGoalSheet'
import PageHeader from '@/shared/components/PageHeader'
import { findRecentExpensesService, createExpenseService, findAllExpensesService } from '@/modules/expenses/service/expensesService'
import { findAllGoalsService, createGoalService } from '@/modules/goals/service/goalsService'
import type { Expense } from '@/modules/expenses/types/expense'
import type { Goal } from '@/modules/goals/types/goal'
import type { CreateExpenseData } from '@/modules/expenses/types/expense'
import type { CreateGoalData } from '@/modules/goals/types/goal'
import { getCurrentMonthYear, getGreeting } from '@/shared/utils/date'
import { showToast } from '@/shared/components/Toast'

export default function HomePage() {
  const { user } = useUser()
  const [recentExpenses, setRecentExpenses] = useState<Expense[]>([])
  const [goals, setGoals] = useState<Goal[]>([])
  const [monthlyExpenses, setMonthlyExpenses] = useState(0)
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false)
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false)

  useEffect(() => {
    const { year, month } = getCurrentMonthYear()
    Promise.all([
      findRecentExpensesService(4),
      findAllGoalsService(),
      findAllExpensesService(year, month),
    ]).then(([recent, allGoals, monthly]) => {
      setRecentExpenses(recent)
      setGoals(allGoals)
      setMonthlyExpenses(monthly.reduce((s, e) => s + e.amount, 0))
    })
  }, [])

  const handleAddExpense = async (data: CreateExpenseData) => {
    await createExpenseService(data)
    const { year, month } = getCurrentMonthYear()
    const [recent, monthly] = await Promise.all([
      findRecentExpensesService(4),
      findAllExpensesService(year, month),
    ])
    setRecentExpenses(recent)
    setMonthlyExpenses(monthly.reduce((s, e) => s + e.amount, 0))
    setIsAddExpenseOpen(false)
    showToast.success('Gasto registrado', {
      description: 'Seu gasto foi adicionado ao mês.',
    })
  }

  const handleAddGoal = async (data: CreateGoalData) => {
    const goal = await createGoalService(data)
    setGoals(prev => [...prev, goal])
    setIsAddGoalOpen(false)
    showToast.success('Meta criada', {
      description: 'Sua nova meta está pronta para receber depósitos.',
    })
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

          {/* Content grid */}
          <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:items-start">

            {/* LEFT — financial summary */}
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

            {/* RIGHT — feed */}
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
