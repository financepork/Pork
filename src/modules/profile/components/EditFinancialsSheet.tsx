import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LeafIcon, ChartLineUpIcon, RocketLaunchIcon } from '@phosphor-icons/react'
import Sheet from '@/shared/components/Sheet'
import { useUpdateUser } from '../hooks/useUpdateUser'
import type { User } from '../types/user'

interface Props {
  isOpen: boolean
  user: User | null
  onClose: () => void
}

const schema = z.object({
  monthlyIncome: z.number().min(0, 'Valor inválido'),
  savingsProfile: z.enum(['basico', 'intermediario', 'avancado']),
})

type FormValues = z.infer<typeof schema>

const PLANS: {
  value: User['savingsProfile']
  label: string
  description: string
  icon: typeof LeafIcon
  accent: string
  bg: string
}[] = [
  {
    value: 'basico',
    label: 'Básico',
    description: 'Economiza o essencial',
    icon: LeafIcon,
    accent: 'text-green-400',
    bg: 'bg-green-400/10',
  },
  {
    value: 'intermediario',
    label: 'Intermediário',
    description: 'Equilíbrio e consistência',
    icon: ChartLineUpIcon,
    accent: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    value: 'avancado',
    label: 'Avançado',
    description: 'Máxima disciplina',
    icon: RocketLaunchIcon,
    accent: 'text-brand',
    bg: 'bg-brand/10',
  },
]

export default function EditFinancialsSheet({ isOpen, user, onClose }: Props) {
  const updateUser = useUpdateUser(user?.id ?? '')

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      monthlyIncome: user?.monthlyIncome ?? 0,
      savingsProfile: user?.savingsProfile ?? 'basico',
    },
  })

  useEffect(() => {
    if (user && isOpen) {
      reset({ monthlyIncome: user.monthlyIncome, savingsProfile: user.savingsProfile })
    }
  }, [user, isOpen, reset])

  const selectedPlan = watch('savingsProfile')

  const submit = async (data: FormValues) => {
    await updateUser.mutateAsync(data)
    onClose()
  }

  return (
    <Sheet isOpen={isOpen} onClose={onClose} title="Editar perfil financeiro">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
        {/* Salary */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Salário mensal (R$)
          </label>
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            placeholder="0,00"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('monthlyIncome', { valueAsNumber: true })}
          />
          {errors.monthlyIncome && (
            <p className="text-xs text-red-400 mt-1">{errors.monthlyIncome.message}</p>
          )}
        </div>

        {/* Plan selector */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-3">
            Plano econômico
          </label>
          <div className="flex flex-col gap-2">
            {PLANS.map(plan => {
              const Icon = plan.icon
              const isSelected = selectedPlan === plan.value
              return (
                <button
                  key={plan.value}
                  type="button"
                  onClick={() => setValue('savingsProfile', plan.value, { shouldValidate: true })}
                  className={`cursor-pointer flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-150 text-left ${
                    isSelected
                      ? `${plan.bg} border-transparent`
                      : 'bg-neutral-800/40 border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg ${plan.bg} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={plan.accent} weight="duotone" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${isSelected ? plan.accent : 'text-neutral-200'}`}>
                      {plan.label}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">{plan.description}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors duration-150 ${
                    isSelected ? `border-current ${plan.accent}` : 'border-neutral-600'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                </button>
              )
            })}
          </div>
          {errors.savingsProfile && (
            <p className="text-xs text-red-400 mt-1">{errors.savingsProfile.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >
          {isSubmitting
            ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
            : 'Salvar'
          }
        </button>
      </form>
    </Sheet>
  )
}
