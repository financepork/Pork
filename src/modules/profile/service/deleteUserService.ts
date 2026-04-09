import { api } from '@/api/axios'

export async function deleteUserService(id: string): Promise<void> {
  await api.delete(`/user/${id}`)
}
