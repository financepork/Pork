import type { Goal } from '../types/goal'
import type { CreateGoal } from '../types/createGoal'
import { addMockGoal, nextMockId } from './_mock'

export const createGoalService = async (data: CreateGoal): Promise<Goal> => {
  const goal: Goal = {
    id: nextMockId(),
    name: data.name,
    targetAmount: data.targetAmount,
    currentAmount: 0,
    deadline: data.deadline,
    achieved: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  addMockGoal(goal)
  return goal
}
