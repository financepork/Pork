import type { Goal } from '../types/goal'
import type { UpdateGoal } from '../types/updateGoal'
import { updateMockGoal } from './_mock'

export const updateGoalService = async (id: string, data: UpdateGoal): Promise<Goal> => {
  return updateMockGoal(id, data)
}
