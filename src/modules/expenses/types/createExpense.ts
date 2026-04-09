import type { ExpenseCategory } from './expense'

export interface CreateExpense {
  title: string
  category: ExpenseCategory
  amount: number
  date: string
  note?: string
}
