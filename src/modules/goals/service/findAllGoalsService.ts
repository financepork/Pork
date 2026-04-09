import type { Goal } from '../types/goal'
import { mockGoals } from './_mock'

export const findAllGoalsService = async (): Promise<Goal[]> => {
  return [...mockGoals]
}
