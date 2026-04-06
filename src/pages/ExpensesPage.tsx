import { motion } from 'framer-motion'
import { Plus } from '@phosphor-icons/react'
import { stagger, fadeUp } from '@/lib/animations'
import { useExpenses } from '@/modules/expenses/hooks/useExpenses'
import MonthSelector from '@/modules/expenses/components/MonthSelector'
import ExpenseSummary from '@/modules/expenses/components/ExpenseSummary'
import CategoryFilter from '@/modules/expenses/components/CategoryFilter'
import ExpenseList from '@/modules/expenses/components/ExpenseList'
import AddExpenseSheet from '@/modules/expenses/components/AddExpenseSheet'
import type { ExpenseCategory } from '@/modules/expenses/types/expense'

export default function ExpensesPage() {
  const {
    expenses,
    allExpenses,
    loading,
    year,
    month,
    prevMonth,
    nextMonth,
    activeCategory,
    setActiveCategory,
    total,
    addExpense,
    removeExpense,
    isAddOpen,
    setIsAddOpen,
    isCurrentMonth,
  } = useExpenses()

  const availableCategories = [...new Set(allExpenses.map(e => e.category))] as ExpenseCategory[]

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-8 lg:pt-12">

          <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-10 lg:items-start">

            {/* LEFT — controls (sticky on desktop) */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-5 lg:sticky lg:top-8"
            >
              <motion.div variants={fadeUp}>
                <MonthSelector
                  year={year}
                  month={month}
                  onPrev={prevMonth}
                  onNext={nextMonth}
                  isCurrentMonth={isCurrentMonth}
                />
              </motion.div>

              {!loading && allExpenses.length > 0 && (
                <motion.div variants={fadeUp}>
                  <ExpenseSummary expenses={allExpenses} total={total} />
                </motion.div>
              )}

              {availableCategories.length > 1 && (
                <motion.div variants={fadeUp}>
                  <CategoryFilter
                    active={activeCategory}
                    onChange={setActiveCategory}
                    available={availableCategories}
                  />
                </motion.div>
              )}

              {/* Add button inline on desktop */}
              <motion.div variants={fadeUp} className="hidden lg:block">
                <button
                  onClick={() => setIsAddOpen(true)}
                  className="cursor-pointer w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.98] text-neutral-950 font-semibold py-3 rounded-xl text-sm transition-all duration-150"
                >
                  <Plus size={16} weight="bold" />
                  Novo gasto
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT — list */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 lg:mt-0"
            >
              <ExpenseList
                expenses={expenses}
                loading={loading}
                onDelete={removeExpense}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* FAB — mobile only */}
      <button
        onClick={() => setIsAddOpen(true)}
        className="lg:hidden cursor-pointer fixed bottom-24 right-5 w-14 h-14 rounded-2xl bg-brand hover:bg-brand-light active:scale-95 text-neutral-950 shadow-lg shadow-brand/20 flex items-center justify-center transition-all duration-150 z-20"
        aria-label="Adicionar gasto"
      >
        <Plus size={22} weight="bold" />
      </button>

      <AddExpenseSheet
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={addExpense}
      />
    </>
  )
}
