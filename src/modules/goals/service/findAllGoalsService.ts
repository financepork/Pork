import { api } from '@/api/axios'
import type { Goal } from '../types/goal'

export const findAllGoalsService = async (): Promise<Goal[]> => {
  const { data } = await api.get<Goal[]>('/goal')
  return data
}
