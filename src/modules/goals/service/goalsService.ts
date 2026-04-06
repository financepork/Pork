import type { Goal, CreateGoalData } from '../types/goal'

let mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Viagem para Lisboa',
    targetAmount: 8000,
    savedAmount: 3200,
    deadline: '2026-12-15',
    emoji: '✈️',
    createdAt: '2026-01-10',
  },
  {
    id: '2',
    title: 'iPhone novo',
    targetAmount: 7500,
    savedAmount: 6900,
    deadline: '2026-06-01',
    emoji: '📱',
    createdAt: '2025-12-01',
  },
  {
    id: '3',
    title: 'Reserva de emergência',
    targetAmount: 12000,
    savedAmount: 4500,
    emoji: '🛡️',
    createdAt: '2026-02-01',
  },
]

let nextId = 4

export async function findAllGoalsService(): Promise<Goal[]> {
  return [...mockGoals]
}

export async function createGoalService(data: CreateGoalData): Promise<Goal> {
  const goal: Goal = {
    id: String(nextId++),
    title: data.title,
    targetAmount: data.targetAmount,
    savedAmount: 0,
    deadline: data.deadline,
    emoji: data.emoji ?? '🎯',
    createdAt: new Date().toISOString().split('T')[0],
  }
  mockGoals = [...mockGoals, goal]
  return goal
}

export async function depositGoalService(goalId: string, amount: number): Promise<Goal> {
  mockGoals = mockGoals.map(g =>
    g.id === goalId
      ? { ...g, savedAmount: Math.min(g.savedAmount + amount, g.targetAmount) }
      : g,
  )
  const updated = mockGoals.find(g => g.id === goalId)
  if (!updated) throw new Error('Meta não encontrada')
  return updated
}

export async function deleteGoalService(id: string): Promise<void> {
  mockGoals = mockGoals.filter(g => g.id !== id)
}
