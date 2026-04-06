import { useState, useEffect, useCallback } from 'react'
import type { Expense, CreateExpenseData, ExpenseCategory } from '../types/expense'
import {
  findAllExpensesService,
  createExpenseService,
  deleteExpenseService,
} from '../service/expensesService'
import { getCurrentMonthYear } from '@/shared/utils/date'
import toast from 'react-hot-toast'

export function useExpenses() {
  const now = getCurrentMonthYear()
  const [year, setYear] = useState(now.year)
  const [month, setMonth] = useState(now.month)
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<ExpenseCategory | null>(null)
  const [isAddOpen, setIsAddOpen] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const data = await findAllExpensesService(year, month)
    setExpenses(data)
    setLoading(false)
  }, [year, month])

  useEffect(() => { load() }, [load])

  const prevMonth = () => {
    if (month === 1) { setMonth(12); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    setActiveCategory(null)
  }

  const nextMonth = () => {
    const now = getCurrentMonthYear()
    if (year === now.year && month === now.month) return
    if (month === 12) { setMonth(1); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    setActiveCategory(null)
  }

  const addExpense = async (data: CreateExpenseData) => {
    const expense = await createExpenseService(data)
    const prefix = `${year}-${String(month).padStart(2, '0')}`
    if (expense.date.startsWith(prefix)) {
      setExpenses(prev => [expense, ...prev].sort((a, b) => b.date.localeCompare(a.date)))
    }
    setIsAddOpen(false)
    toast.success('Gasto registrado')
  }

  const removeExpense = async (id: string) => {
    await deleteExpenseService(id)
    setExpenses(prev => prev.filter(e => e.id !== id))
    toast.success('Gasto removido')
  }

  const filtered = activeCategory
    ? expenses.filter(e => e.category === activeCategory)
    : expenses

  const total = expenses.reduce((sum, e) => sum + e.amount, 0)

  return {
    expenses: filtered,
    allExpenses: expenses,
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
    isCurrentMonth: year === now.year && month === now.month,
  }
}
