import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteGoalService } from '../service/deleteGoalService'

export const useDeleteGoal = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteGoalService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
    },
  })
}
