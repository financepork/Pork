import { api } from '@/api/axios'
import type { Expense } from '../types/expense'
import type { CreateExpense } from '../types/createExpense'

export const createExpenseService = async (data: CreateExpense): Promise<Expense> => {
  const { data: created } = await api.post<Expense>('/expense', data)
  return created
}
