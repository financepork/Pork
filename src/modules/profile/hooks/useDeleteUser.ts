import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { deleteUserService } from '../service/deleteUserService'

export const useDeleteUser = (id: string) => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: () => deleteUserService(id),
    onSuccess: () => {
      queryClient.clear()
      navigate('/login')
    },
  })
}
