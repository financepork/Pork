import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Spinner, TargetIcon } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { useGoals } from '@/modules/goals/hooks/useGoals'
import GoalCard from '@/modules/goals/components/GoalCard'
import GoalsOverview from '@/modules/goals/components/GoalsOverview'
import AddGoalSheet from '@/modules/goals/components/AddGoalSheet'
import DepositSheet from '@/modules/goals/components/DepositSheet'
import PageHeader from '@/shared/components/PageHeader'

export default function GoalsPage() {
  const {
    goals,
    loading,
    totalSaved,
    totalTarget,
    addGoal,
    deposit,
    removeGoal,
    isAddOpen,
    setIsAddOpen,
    depositTarget,
    setDepositTarget,
  } = useGoals()

  const completedCount = goals.filter(g => g.savedAmount >= g.targetAmount).length

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

            {/* LEFT — overview + add (sticky) */}
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
                  <Plus size={16} weight="bold" />
                  Nova meta
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT — cards grid */}
            <div className="mt-6 lg:mt-0">
              {loading ? (
                <div className="flex justify-center py-16">
                  <Spinner size={24} className="text-neutral-600 animate-spin" />
                </div>
              ) : goals.length === 0 ? (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <p className="text-5xl mb-3">🎯</p>
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

      {/* FAB — mobile only */}
      <button
        onClick={() => setIsAddOpen(true)}
        className="lg:hidden cursor-pointer fixed bottom-24 right-5 w-14 h-14 rounded-2xl bg-brand hover:bg-brand-light active:scale-95 text-neutral-950 shadow-lg shadow-brand/20 flex items-center justify-center transition-all duration-150 z-20"
        aria-label="Nova meta"
      >
        <Plus size={22} weight="bold" />
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
