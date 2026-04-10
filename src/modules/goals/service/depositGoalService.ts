import { api } from '@/api/axios'
import type { Goal } from '../types/goal'

export const depositGoalService = async (id: string, currentAmount: number, depositAmount: number): Promise<Goal> => {
  const { data } = await api.patch<Goal>(`/goal/${id}`, { currentAmount: currentAmount + depositAmount })
  return data
}
