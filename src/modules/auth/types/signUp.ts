export interface SignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  monthlyIncome: string
  savingsProfile: 'basico' | 'intermediario' | 'avancado' | ''
}
