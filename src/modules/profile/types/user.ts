export interface User {
  id: string
  name: string
  email: string
  monthlyIncome: number
  savingsProfile: 'basico' | 'intermediario' | 'avancado'
}

export interface UpdateUserData {
  name?: string
  email?: string
  monthlyIncome?: number
}
