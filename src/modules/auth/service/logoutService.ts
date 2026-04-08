import { api } from '@/api/axios'

export async function logoutService(): Promise<{ message: string }> {
  const { data } = await api.post<{ message: string }>('/auth/logout')
  return data
}
