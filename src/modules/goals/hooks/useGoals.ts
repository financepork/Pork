import { useState, useEffect } from 'react'
import type { Goal, CreateGoalData } from '../types/goal'
import {
  findAllGoalsService,
  createGoalService,
  depositGoalService,
  deleteGoalService,
} from '../service/goalsService'
import toast from 'react-hot-toast'

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
    toast.success('Meta criada')
  }

  const deposit = async (goalId: string, amount: number) => {
    const updated = await depositGoalService(goalId, amount)
    setGoals(prev => prev.map(g => (g.id === goalId ? updated : g)))
    setDepositTarget(null)
    const goal = goals.find(g => g.id === goalId)
    if (goal && updated.savedAmount >= updated.targetAmount) {
      toast.success(`🎉 Meta "${updated.title}" concluída!`)
    } else {
      toast.success('Valor adicionado')
    }
  }

  const removeGoal = async (id: string) => {
    await deleteGoalService(id)
    setGoals(prev => prev.filter(g => g.id !== id))
    toast.success('Meta removida')
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
