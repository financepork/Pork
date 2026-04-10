import { api } from '@/api/axios'
import type { Expense } from '../types/expense'

export const findAllExpensesService = async (): Promise<Expense[]> => {
  const { data } = await api.get<Expense[]>('/expense')
  return data
}
