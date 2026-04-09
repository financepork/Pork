import { useMutation, useQueryClient } from '@tanstack/react-query'
import { depositGoalService } from '../service/depositGoalService'

export const useDepositGoal = (id: string, currentAmount: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (depositAmount: number) => depositGoalService(id, currentAmount, depositAmount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
    },
  })
}
