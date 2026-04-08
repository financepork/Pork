import { api } from '@/api/axios'
import type { SignUpPayload, SignUpResponse } from '../types/signUp'

export async function signUpService(payload: SignUpPayload): Promise<SignUpResponse> {
  const { data } = await api.post<SignUpResponse>('/user', payload)
  return data
}
