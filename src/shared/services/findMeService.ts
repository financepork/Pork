import { api } from '@/api/axios'
import type { User } from '@/modules/profile/types/user'
import type { Plan } from '@/modules/auth/types/signUp'

interface FindMeResponse {
  id: string
  name: string
  email: string
  salary: number
  economy: number
  plan: Plan
}

const PROFILE_MAP: Record<Plan, User['savingsProfile']> = {
  BASICO: 'basico',
  PADRAO: 'intermediario',
  AVANCADO: 'avancado',
}

export function adaptFindMeResponse(data: FindMeResponse): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    monthlyIncome: data.salary,
    savingsProfile: PROFILE_MAP[data.plan],
  }
}

export async function findMeService(): Promise<User | null> {
  const { data } = await api.get<FindMeResponse | null>('/user/me')
  if (!data) return null
  return adaptFindMeResponse(data)
}
