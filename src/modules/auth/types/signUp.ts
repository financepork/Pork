export type Plan = 'BASICO' | 'PADRAO' | 'AVANCADO'

export interface SignUpPayload {
  name: string
  email: string
  password: string
  salary: number
  plan: Plan
}

export interface SignUpResponse {
  id: string
  name: string
  email: string
  salary: number
  economy: number
  plan: Plan
}
