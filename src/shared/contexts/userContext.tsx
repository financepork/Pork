import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import type { User } from '@/modules/profile/types/user'
import { useFindMe, meQueryKey } from '@/shared/hooks/useFindMe'

interface UserContextValue {
  user: User | null
  loading: boolean
  refreshUser: () => Promise<void>
}

const UserContext = createContext<UserContextValue | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient()
  const { data, isLoading } = useFindMe()

  const refreshUser = async () => {
    await queryClient.invalidateQueries({ queryKey: meQueryKey })
  }

  return (
    <UserContext.Provider value={{ user: data ?? null, loading: isLoading, refreshUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
