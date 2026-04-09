import type { User } from '@/modules/profile/types/user'

const mockUser: User = {
  id: '1',
  name: 'Lucas Bedi',
  email: 'lucas@email.com',
  monthlyIncome: 6000,
  savingsProfile: 'intermediario',
}

export function adaptFindMeResponse(data: User): User {
  return data
}

export async function findMeService(): Promise<User | null> {
  return { ...mockUser }
}
