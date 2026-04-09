import type { Expense } from '../types/expense'
import type { CreateExpense } from '../types/createExpense'
import { addMockExpense, nextMockId } from './_mock'

export const createExpenseService = async (data: CreateExpense): Promise<Expense> => {
  const expense: Expense = { id: nextMockId(), ...data }
  addMockExpense(expense)
  return expense
}
