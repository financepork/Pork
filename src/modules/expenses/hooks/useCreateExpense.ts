import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createExpenseService } from '../service/createExpenseService'
import type { CreateExpense } from '../types/createExpense'

export const useCreateExpense = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: CreateExpense) => createExpenseService(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['expenses'] })
    },
  })
}
