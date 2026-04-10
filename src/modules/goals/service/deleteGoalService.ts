import { api } from '@/api/axios'

export const deleteGoalService = async (id: string): Promise<void> => {
  await api.delete(`/goal/${id}`)
}
