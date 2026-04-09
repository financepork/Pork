import { useQuery } from '@tanstack/react-query'
import { getUserService } from '../service/getUserService'

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUserService,
  })
}
