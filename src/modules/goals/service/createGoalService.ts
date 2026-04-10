import { api } from '@/api/axios'
import type { Goal } from '../types/goal'
import type { CreateGoal } from '../types/createGoal'

export const createGoalService = async (data: CreateGoal): Promise<Goal> => {
  const { data: created } = await api.post<Goal>('/goal', data)
  return created
}
