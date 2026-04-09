export interface Goal {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline?: string
  achieved: boolean
  createdAt: string
  updatedAt: string
}
