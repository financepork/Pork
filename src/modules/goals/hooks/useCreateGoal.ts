import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createGoalService } from '../service/createGoalService'
import type { CreateGoal } from '../types/createGoal'

export const useCreateGoal = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateGoal) => createGoalService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
    },
  })
}
