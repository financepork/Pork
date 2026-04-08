import { useState, useEffect } from 'react'
import type { Goal, CreateGoalData } from '../types/goal'
import {
  findAllGoalsService,
  createGoalService,
  depositGoalService,
  deleteGoalService,
} from '../service/goalsService'
import { showToast } from '@/shared/components/Toast'

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([])
  const [loading, setLoading] = useState(true)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [depositTarget, setDepositTarget] = useState<Goal | null>(null)

  useEffect(() => {
    findAllGoalsService().then(data => {
      setGoals(data)
      setLoading(false)
    })
  }, [])

  const addGoal = async (data: CreateGoalData) => {
    const goal = await createGoalService(data)
    setGoals(prev => [...prev, goal])
    setIsAddOpen(false)
    showToast.success('Meta criada', {
      description: 'Sua nova meta está pronta para receber depósitos.',
    })
  }

  const deposit = async (goalId: string, amount: number) => {
    const updated = await depositGoalService(goalId, amount)
    setGoals(prev => prev.map(g => (g.id === goalId ? updated : g)))
    setDepositTarget(null)
    const goal = goals.find(g => g.id === goalId)
    if (goal && updated.savedAmount >= updated.targetAmount) {
      showToast.success('Meta concluída!', {
        description: `Parabéns! Você atingiu 100% de "${updated.title}".`,
      })
    } else {
      showToast.success('Valor adicionado', {
        description: 'Seu depósito foi registrado na meta.',
      })
    }
  }

  const removeGoal = async (id: string) => {
    await deleteGoalService(id)
    setGoals(prev => prev.filter(g => g.id !== id))
    showToast.success('Meta removida')
  }

  const totalSaved = goals.reduce((s, g) => s + g.savedAmount, 0)
  const totalTarget = goals.reduce((s, g) => s + g.targetAmount, 0)

  return {
    goals,
    loading,
    totalSaved,
    totalTarget,
    addGoal,
    deposit,
    removeGoal,
    isAddOpen,
    setIsAddOpen,
    depositTarget,
    setDepositTarget,
  }
}
