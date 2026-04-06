export interface Goal {
  id: string
  title: string
  targetAmount: number
  savedAmount: number
  deadline?: string
  emoji: string
  createdAt: string
}

export interface CreateGoalData {
  title: string
  targetAmount: number
  deadline?: string
  emoji?: string
}

export interface DepositGoalData {
  goalId: string
  amount: number
}
