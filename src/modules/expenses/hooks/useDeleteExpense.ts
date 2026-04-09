import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteExpenseService } from '../service/deleteExpenseService'

export const useDeleteExpense = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => deleteExpenseService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}
