import { findMeService } from '@/shared/services/findMeService'
import type { User } from '../types/user'

export async function getUserService(): Promise<User> {
  const user = await findMeService()
  if (!user) throw new Error('Usuário não encontrado')
  return user
}
