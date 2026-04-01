import { useState } from 'react'
import type { SignUpFormData } from '../types/signUp'

const TOTAL_STEPS = 5

export function useSignUp() {
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    monthlyIncome: '',
    savingsProfile: '',
  })

  const updateField = <K extends keyof SignUpFormData>(field: K, value: SignUpFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const next = () => {
    if (step < TOTAL_STEPS - 1) {
      setDirection(1)
      setStep(s => s + 1)
    }
  }

  const back = () => {
    if (step > 0) {
      setDirection(-1)
      setStep(s => s - 1)
    }
  }

  const submit = () => {
    console.log('signup data:', formData)
  }

  return {
    step,
    direction,
    totalSteps: TOTAL_STEPS,
    formData,
    updateField,
    next,
    back,
    submit,
    isLastStep: step === TOTAL_STEPS - 1,
  }
}
