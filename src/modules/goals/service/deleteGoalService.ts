import { removeMockGoal } from './_mock'

export const deleteGoalService = async (id: string): Promise<void> => {
  removeMockGoal(id)
}
