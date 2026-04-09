import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateGoalService } from '../service/updateGoalService'
import type { UpdateGoal } from '../types/updateGoal'

export const useUpdateGoal = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateGoal) => updateGoalService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
    },
  })
}
