import { api } from '@/api/axios'

export const deleteExpenseService = async (id: string): Promise<void> => {
  await api.delete(`/expense/${id}`)
}
