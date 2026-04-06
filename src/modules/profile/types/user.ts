export interface User {
  id: string
  name: string
  email: string
  monthlyIncome: number
  savingsProfile: 'basico' | 'intermediario' | 'avancado'
  createdAt: string
}

export interface UpdateUserData {
  name?: string
  email?: string
  monthlyIncome?: number
}
