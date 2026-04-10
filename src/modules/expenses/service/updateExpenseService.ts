import { api } from '@/api/axios'
import type { Expense } from '../types/expense'
import type { UpdateExpense } from '../types/updateExpense'

export const updateExpenseService = async (id: string, data: UpdateExpense): Promise<Expense> => {
  const { data: updated } = await api.patch<Expense>(`/expense/${id}`, data)
  return updated
}
