import { api } from '@/api/axios'
import type { User } from '@/modules/profile/types/user'
import type { Plan } from '@/modules/auth/types/signUp'

interface ApiUser {
  id: string
  name: string
  email: string
  salary: number
  economy: number
  plan: Plan
}

const PLAN_TO_PROFILE: Record<Plan, User['savingsProfile']> = {
  BASICO:   'basico',
  PADRAO:   'intermediario',
  AVANCADO: 'avancado',
}

export function adaptFindMeResponse(data: ApiUser): User {
  return {
    id: data.id,
    name: data.name,
    email: data.email,
    monthlyIncome: data.salary,
    monthlySavings: data.economy,
    savingsProfile: PLAN_TO_PROFILE[data.plan] ?? 'basico',
  }
}

export async function findMeService(): Promise<User | null> {
  const { data } = await api.get<ApiUser>('/user/me')
  return adaptFindMeResponse(data)
}
