import type { Expense } from '../types/expense'
import type { UpdateExpense } from '../types/updateExpense'
import { updateMockExpense } from './_mock'

export const updateExpenseService = async (id: string, data: UpdateExpense): Promise<Expense> => {
  return updateMockExpense(id, data)
}
