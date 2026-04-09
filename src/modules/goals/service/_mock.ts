import type { Goal } from '../types/goal'

export let mockGoals: Goal[] = [
  {
    id: '1',
    name: 'Viagem para Lisboa',
    targetAmount: 8000,
    currentAmount: 3200,
    deadline: '2026-12-15',
    achieved: false,
    createdAt: '2026-01-10',
    updatedAt: '2026-01-10',
  },
  {
    id: '2',
    name: 'iPhone novo',
    targetAmount: 7500,
    currentAmount: 6900,
    deadline: '2026-06-01',
    achieved: false,
    createdAt: '2025-12-01',
    updatedAt: '2025-12-01',
  },
  {
    id: '3',
    name: 'Reserva de emergência',
    targetAmount: 12000,
    currentAmount: 4500,
    achieved: false,
    createdAt: '2026-02-01',
    updatedAt: '2026-02-01',
  },
]

let nextId = 4

export function addMockGoal(goal: Goal) {
  mockGoals = [...mockGoals, goal]
}

export function removeMockGoal(id: string) {
  mockGoals = mockGoals.filter(g => g.id !== id)
}

export function updateMockGoal(id: string, data: Partial<Goal>) {
  mockGoals = mockGoals.map(g => g.id === id ? { ...g, ...data } : g)
  return mockGoals.find(g => g.id === id)!
}

export function nextMockId() {
  return String(nextId++)
}
