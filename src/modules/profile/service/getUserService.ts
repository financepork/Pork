import type { User, UpdateUserData } from '../types/user'

let mockUser: User = {
  id: '1',
  name: 'Lucas',
  email: 'lucas@email.com',
  monthlyIncome: 6000,
  savingsProfile: 'intermediario',
  createdAt: '2025-01-15',
}

export async function getUserService(): Promise<User> {
  return { ...mockUser }
}

export async function updateUserService(data: UpdateUserData): Promise<User> {
  mockUser = { ...mockUser, ...data }
  return { ...mockUser }
}
