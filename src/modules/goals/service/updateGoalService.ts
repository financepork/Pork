import { api } from '@/api/axios'
import type { Goal } from '../types/goal'
import type { UpdateGoal } from '../types/updateGoal'

export const updateGoalService = async (id: string, data: UpdateGoal): Promise<Goal> => {
  const { data: updated } = await api.patch<Goal>(`/goal/${id}`, data)
  return updated
}
