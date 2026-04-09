import { removeMockExpense } from './_mock'

export const deleteExpenseService = async (id: string): Promise<void> => {
  removeMockExpense(id)
}
