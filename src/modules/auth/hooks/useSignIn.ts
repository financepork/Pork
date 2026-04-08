import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { signInService } from '../service/signInService'
import type { SignInPayload } from '../types/signIn'

export function useSignIn() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: SignInPayload) => signInService(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['me'] })
      toast.success('Bem-vindo de volta!')
      navigate('/dashboard/home')
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message =
        error.response?.data?.message ?? 'E-mail ou senha inválidos'
      toast.error(message)
    },
  })
}
