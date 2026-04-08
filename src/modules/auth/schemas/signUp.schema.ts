import { z } from 'zod'
import type { Plan } from '../types/signUp'

export function parseMonthlyIncome(value: string): number {
  const normalized = value
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^\d.]/g, '')
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Informe seu nome')
      .min(2, 'Nome muito curto')
      .max(100, 'Nome muito longo'),
    email: z
      .string()
      .min(1, 'Informe seu e-mail')
      .email('E-mail inválido'),
    password: z
      .string()
      .min(1, 'Informe uma senha')
      .min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmPassword: z.string().min(1, 'Confirme sua senha'),
    monthlyIncome: z
      .string()
      .min(1, 'Informe sua renda mensal')
      .refine(v => parseMonthlyIncome(v) > 0, 'Renda inválida'),
    savingsProfile: z.enum(['basico', 'intermediario', 'avancado'], {
      message: 'Selecione um perfil de economia',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export type SignUpSchema = z.infer<typeof signUpSchema>

export const PLAN_MAP: Record<SignUpSchema['savingsProfile'], Plan> = {
  basico: 'BASICO',
  intermediario: 'PADRAO',
  avancado: 'AVANCADO',
}
