import { useState, useEffect } from 'react'
import type { User, UpdateUserData } from '../types/user'
import { getUserService, updateUserService } from '../service/getUserService'
import { showToast } from '@/shared/components/Toast'

export function useGetUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isEditOpen, setIsEditOpen] = useState(false)

  useEffect(() => {
    getUserService().then(data => {
      setUser(data)
      setLoading(false)
    })
  }, [])

  const updateUser = async (data: UpdateUserData) => {
    const updated = await updateUserService(data)
    setUser(updated)
    setIsEditOpen(false)
    showToast.success('Perfil atualizado', {
      description: 'Suas informações foram salvas com sucesso.',
    })
  }

  return { user, loading, updateUser, isEditOpen, setIsEditOpen }
}
