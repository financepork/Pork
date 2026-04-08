import { api } from '@/api/axios'
import type { SignInPayload, SignInResponse } from '../types/signIn'

export async function signInService(payload: SignInPayload): Promise<SignInResponse> {
  const { data } = await api.post<SignInResponse>('/auth/login', payload)
  return data
}
