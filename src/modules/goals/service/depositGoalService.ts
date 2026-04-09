import type { Goal } from '../types/goal'
import { updateMockGoal } from './_mock'

export const depositGoalService = async (id: string, currentAmount: number, depositAmount: number): Promise<Goal> => {
  const newAmount = currentAmount + depositAmount
  return updateMockGoal(id, { currentAmount: newAmount })
}
