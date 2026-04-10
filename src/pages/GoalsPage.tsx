import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, TargetIcon } from '@phosphor-icons/react'
import { useQueryClient } from '@tanstack/react-query'
import { stagger, fadeUp } from '@/lib/animations'
import { useFindAllGoals } from '@/modules/goals/hooks/useFindAllGoals'
import { useCreateGoal } from '@/modules/goals/hooks/useCreateGoal'
import { deleteGoalService } from '@/modules/goals/service/deleteGoalService'
import { depositGoalService } from '@/modules/goals/service/depositGoalService'
import type { Goal } from '@/modules/goals/types/goal'
import type { CreateGoal } from '@/modules/goals/types/createGoal'
import GoalCard from '@/modules/goals/components/GoalCard'
import GoalsOverview from '@/modules/goals/components/GoalsOverview'
import AddGoalSheet from '@/modules/goals/components/AddGoalSheet'
import DepositSheet from '@/modules/goals/components/DepositSheet'
import PageHeader from '@/shared/components/PageHeader'
import GoalsSkeleton from '@/modules/goals/skeletons/GoalsSkeleton'

export default function GoalsPage() {
  const queryClient = useQueryClient()
  const { data: goals = [], isLoading: loading } = useFindAllGoals()
  const createGoal = useCreateGoal()

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [depositTarget, setDepositTarget] = useState<Goal | null>(null)

  const totalSaved = goals.reduce((s, g) => s + g.currentAmount, 0)
  const totalTarget = goals.reduce((s, g) => s + g.targetAmount, 0)
  const completedCount = goals.filter(g => g.achieved).length

  const addGoal = async (data: CreateGoal) => {
    await createGoal.mutateAsync(data)
    setIsAddOpen(false)
  }

  const deposit = async (goalId: string, amount: number) => {
    const goal = goals.find(g => g.id === goalId)
    if (!goal) return
    await depositGoalService(goalId, goal.currentAmount, amount)
    queryClient.invalidateQueries({ queryKey: ['goals'] })
    setDepositTarget(null)
  }

  const removeGoal = async (id: string) => {
    await deleteGoalService(id)
    queryClient.invalidateQueries({ queryKey: ['goals'] })
  }

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">

          <PageHeader
            icon={TargetIcon}
            title="Seus objetivos"
            description="Transforme sonhos em planos. Defina metas e veja seu progresso crescer a cada depósito."
          />

          <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-10 lg:items-start">

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-4 lg:sticky lg:top-8"
            >
              {goals.length > 0 && (
                <GoalsOverview
                  totalSaved={totalSaved}
                  totalTarget={totalTarget}
                  completedCount={completedCount}
                />
              )}

              <motion.div variants={fadeUp}>
                <button
                  onClick={() => setIsAddOpen(true)}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.98] text-neutral-950 font-semibold py-3 rounded-xl text-sm transition-all duration-150"
                >
                  <PlusIcon size={16} weight="bold" />
                  Nova meta
                </button>
              </motion.div>
            </motion.div>

            <div className="mt-6 lg:mt-0">
              {loading ? (
                <GoalsSkeleton />
              ) : goals.length === 0 ? (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-3">
                    <TargetIcon size={24} className="text-neutral-500" weight="duotone" />
                  </div>
                  <p className="text-sm font-medium text-neutral-300">Nenhuma meta ainda</p>
                  <p className="text-xs text-neutral-600 mt-1">Crie sua primeira meta de economia</p>
                </motion.div>
              ) : (
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 xl:grid-cols-2 gap-4"
                >
                  <AnimatePresence>
                    {goals.map(goal => (
                      <GoalCard
                        key={goal.id}
                        goal={goal}
                        onDeposit={setDepositTarget}
                        onDelete={removeGoal}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

          </div>
        </div>
      </div>

      <button
        onClick={() => setIsAddOpen(true)}
        className="lg:hidden cursor-pointer fixed bottom-24 right-5 w-14 h-14 rounded-2xl bg-brand hover:bg-brand-light active:scale-95 text-neutral-950 shadow-lg shadow-brand/20 flex items-center justify-center transition-all duration-150 z-20"
        aria-label="Nova meta"
      >
        <PlusIcon size={22} weight="bold" />
      </button>

      <AddGoalSheet
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={addGoal}
      />
      <DepositSheet
        goal={depositTarget}
        onClose={() => setDepositTarget(null)}
        onDeposit={deposit}
      />
    </>
  )
}
