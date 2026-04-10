import { api } from '@/api/axios'
import type { Plan } from '@/modules/auth/types/signUp'
import type { User, UpdateUserData } from '../types/user'
import { adaptFindMeResponse } from '@/shared/services/findMeService'

interface UpdateUserPayload {
  name?: string
  email?: string
  salary?: number
  plan?: Plan
}

const PLAN_MAP: Record<NonNullable<UpdateUserData['savingsProfile']>, Plan> = {
  basico:       'BASICO',
  intermediario: 'PADRAO',
  avancado:     'AVANCADO',
}

export async function updateUserService(id: string, data: UpdateUserData): Promise<User> {
  const payload: UpdateUserPayload = {
    name:   data.name,
    email:  data.email,
    salary: data.monthlyIncome,
    plan:   data.savingsProfile ? PLAN_MAP[data.savingsProfile] : undefined,
  }

  const { data: updated } = await api.patch<{
    id: string; name: string; email: string; salary: number; economy: number; plan: Plan
  }>(`/user/${id}`, payload)

  return adaptFindMeResponse(updated)
}
