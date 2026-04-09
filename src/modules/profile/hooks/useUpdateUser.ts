import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { UpdateUserData } from '../types/user'
import { updateUserService } from '../service/updateUserService'

export const useUpdateUser = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateUserData) => updateUserService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}
