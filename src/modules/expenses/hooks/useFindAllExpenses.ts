import { useQuery } from '@tanstack/react-query'
import { findAllExpensesService } from '../service/findAllExpensesService'

export const useFindAllExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: findAllExpensesService,
  })
}
