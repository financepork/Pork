import { z } from 'zod'

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Informe seu e-mail')
    .email('E-mail inválido'),
  password: z
    .string()
    .min(1, 'Informe sua senha')
    .min(6, 'Mínimo 6 caracteres'),
})

export type SignInSchema = z.infer<typeof signInSchema>
