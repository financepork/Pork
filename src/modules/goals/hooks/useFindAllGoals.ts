import { useQuery } from '@tanstack/react-query'
import { findAllGoalsService } from '../service/findAllGoalsService'

export const useFindAllGoals = () => {
  return useQuery({
    queryKey: ['goals'],
    queryFn: findAllGoalsService,
  })
}
