import { useQuery } from '@tanstack/react-query'
import { findMeService } from '../services/findMeService'

export const meQueryKey = ['me'] as const

export function useFindMe() {
  return useQuery({
    queryKey: meQueryKey,
    queryFn: findMeService,
    staleTime: 1000 * 60 * 5,  // depois desses 5 min, refetch em background para atualizar os dados 
    retry: false,
  })
}
