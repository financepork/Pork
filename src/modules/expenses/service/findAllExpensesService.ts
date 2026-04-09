import type { Expense } from '../types/expense'
import { mockExpenses } from './_mock'

export const findAllExpensesService = async (): Promise<Expense[]> => {
  return [...mockExpenses].sort((a, b) => b.date.localeCompare(a.date))
}
