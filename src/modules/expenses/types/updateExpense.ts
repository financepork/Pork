import type { ExpenseCategory } from './expense'

export interface UpdateExpense {
  title?: string
  category?: ExpenseCategory
  amount?: number
  date?: string
  note?: string
}
