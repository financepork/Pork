import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { showToast } from '@/shared/components/Toast'
import { signUpService } from '../service/signUpService'
import { signInService } from '../service/signInService'
import type { SignUpPayload } from '../types/signUp'
import {
  PLAN_MAP,
  parseMonthlyIncome,
  type SignUpSchema,
} from '../schemas/signUp.schema'

function buildPayload(data: SignUpSchema): SignUpPayload {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    password: data.password,
    salary: parseMonthlyIncome(data.monthlyIncome),
    plan: PLAN_MAP[data.savingsProfile],
  }
}

export function useSignUp() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: SignUpSchema) => {
      const payload = buildPayload(data)
      await signUpService(payload)
      await signInService({ email: payload.email, password: payload.password })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['me'] })
      showToast.success('Conta criada com sucesso!', {
        description: 'Bem-vindo ao Pork. Vamos começar a economizar!',
      })
      navigate('/dashboard/home')
    },
    onError: (error: AxiosError<{ message?: string | string[] }>) => {
      const raw = error.response?.data?.message
      const message = Array.isArray(raw) ? raw[0] : raw ?? 'Erro ao criar conta'
      showToast.error('Erro ao criar conta', { description: message })
    },
  })
}
