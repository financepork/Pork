import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateExpenseService } from '../service/updateExpenseService'
import type { UpdateExpense } from '../types/updateExpense'

export const useUpdateExpense = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateExpense) => updateExpenseService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}
