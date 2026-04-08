import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { logoutService } from '../service/logoutService'

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['me'] })
      queryClient.clear()
      navigate('/login')
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message ?? 'Erro ao sair'
      toast.error(message)
    },
  })
}
