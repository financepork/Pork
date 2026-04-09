import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, CurrencyDollarIcon } from '@phosphor-icons/react'
import { useQueryClient } from '@tanstack/react-query'
import { stagger, fadeUp } from '@/lib/animations'
import { useFindAllExpenses } from '@/modules/expenses/hooks/useFindAllExpenses'
import { useCreateExpense } from '@/modules/expenses/hooks/useCreateExpense'
import { deleteExpenseService } from '@/modules/expenses/service/deleteExpenseService'
import type { CreateExpense } from '@/modules/expenses/types/createExpense'
import type { ExpenseCategory } from '@/modules/expenses/types/expense'
import MonthSelector from '@/modules/expenses/components/MonthSelector'
import ExpenseSummary from '@/modules/expenses/components/ExpenseSummary'
import CategoryFilter from '@/modules/expenses/components/CategoryFilter'
import ExpenseCharts from '@/modules/expenses/components/ExpenseCharts'
import ExpenseList from '@/modules/expenses/components/ExpenseList'
import AddExpenseSheet from '@/modules/expenses/components/AddExpenseSheet'
import PageHeader from '@/shared/components/PageHeader'
import { getCurrentMonthYear } from '@/shared/utils/date'

export default function ExpensesPage() {
  const queryClient = useQueryClient()
  const now = getCurrentMonthYear()

  const [year, setYear] = useState(now.year)
  const [month, setMonth] = useState(now.month)
  const [activeCategory, setActiveCategory] = useState<ExpenseCategory | null>(null)
  const [isAddOpen, setIsAddOpen] = useState(false)

  const { data: allData = [], isLoading: loading } = useFindAllExpenses()
  const createExpense = useCreateExpense()

  const prefix = `${year}-${String(month).padStart(2, '0')}`
  const allExpenses = allData.filter(e => e.date.startsWith(prefix))
  const expenses = activeCategory ? allExpenses.filter(e => e.category === activeCategory) : allExpenses
  const total = allExpenses.reduce((s, e) => s + e.amount, 0)
  const availableCategories = [...new Set(allExpenses.map(e => e.category))] as ExpenseCategory[]
  const isCurrentMonth = year === now.year && month === now.month

  const prevMonth = () => {
    setActiveCategory(null)
    if (month === 1) { setMonth(12); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }

  const nextMonth = () => {
    if (isCurrentMonth) return
    setActiveCategory(null)
    if (month === 12) { setMonth(1); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const addExpense = async (data: CreateExpense) => {
    await createExpense.mutateAsync(data)
    setIsAddOpen(false)
  }

  const removeExpense = async (id: string) => {
    await deleteExpenseService(id)
    queryClient.invalidateQueries({ queryKey: ['expenses'] })
  }

  return (
    <>
      <div className="overflow-y-auto min-h-dvh pb-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">

          <PageHeader
            icon={CurrencyDollarIcon}
            title="Seus gastos"
            description="Acompanhe no detalhe onde seu dinheiro está indo e mantenha o controle do mês."
          />

          <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-10 lg:items-start">

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

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-6 lg:mt-0 space-y-5"
            >
              {availableCategories.length > 1 && (
                <motion.div variants={fadeUp}>
                  <CategoryFilter
                    active={activeCategory}
                    onChange={setActiveCategory}
                    available={availableCategories}
                  />
                </motion.div>
              )}

              <motion.div variants={fadeUp}>
                <ExpenseList
                  expenses={expenses}
                  loading={loading}
                  onDelete={removeExpense}
                />
              </motion.div>
            </motion.div>

          </div>

          {!loading && allExpenses.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 lg:mt-12"
            >
              <ExpenseCharts expenses={allExpenses} year={year} month={month} />
            </motion.div>
          )}
        </div>
      </div>

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
