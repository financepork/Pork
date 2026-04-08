import { useMemo, useState } from 'react'
import { useForm, Controller, type Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Eye, EyeSlash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useSignUp } from '../hooks/useSignUp'
import { signUpSchema, type SignUpSchema } from '../schemas/signUp.schema'

const STEPS = [
  { bg: '#0a0a0a', text: '#f5f5f5', accent: '#22c55e', question: 'Como podemos te chamar?' },
  { bg: '#22c55e', text: '#0a0a0a', accent: '#166534', question: 'Qual seu melhor e-mail?' },
  { bg: '#171717', text: '#f5f5f5', accent: '#4ade80', question: 'Crie uma senha segura' },
  { bg: '#166534', text: '#ffffff', accent: '#4ade80', question: 'Quanto você ganha por mês?' },
  { bg: '#0a0a0a', text: '#f5f5f5', accent: '#22c55e', question: 'Qual seu perfil de economia?' },
]

const STEP_FIELDS: Path<SignUpSchema>[][] = [
  ['name'],
  ['email'],
  ['password', 'confirmPassword'],
  ['monthlyIncome'],
  ['savingsProfile'],
]

const PROFILES = [
  { value: 'basico' as const, label: 'Básico', desc: 'Estou começando a organizar minhas finanças' },
  { value: 'intermediario' as const, label: 'Intermediário', desc: 'Já tenho noção, quero melhorar' },
  { value: 'avancado' as const, label: 'Avançado', desc: 'Tenho controle e quero otimizar' },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
}

export default function SignupForm() {
  const signUp = useSignUp()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const shouldAutoFocus = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    [],
  )

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      monthlyIncome: '',
      savingsProfile: undefined,
    },
  })

  const current = STEPS[step]
  const isLastStep = step === STEPS.length - 1
  const isSubmitting = signUp.isPending

  const onSubmit = (data: SignUpSchema) => {
    signUp.mutate(data)
  }

  const handleNext = async () => {
    const valid = await trigger(STEP_FIELDS[step])
    if (!valid) return

    if (isLastStep) {
      handleSubmit(onSubmit)()
    } else {
      setDirection(1)
      setStep(s => s + 1)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setDirection(-1)
      setStep(s => s - 1)
    }
  }

  const stepError = (() => {
    const field = STEP_FIELDS[step].find(f => errors[f])
    if (!field) return null
    return errors[field]?.message as string | undefined
  })()

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-dvh w-full flex flex-col overflow-hidden relative"
      animate={{ backgroundColor: current.bg }}
      transition={{ duration: 0.5 }}
    >
      <style>{`
        .signup-input:focus { border-color: ${current.accent} !important; }
        .signup-input::placeholder { color: ${current.text}; opacity: 0.3; }
      `}</style>

      {/* Step indicators */}
      <div className="flex gap-1.5 px-6 pt-6 sm:px-10 sm:pt-8">
        {STEPS.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 flex-1 rounded-full"
            animate={{ backgroundColor: i <= step ? current.text : `${current.text}22` }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Top bar: back + login link */}
      <div className="flex items-center justify-between px-6 pt-5 sm:px-10">
        <div>
          {step > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="cursor-pointer mb-15 flex items-center gap-2 text-base font-semibold text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft size={20} weight="bold" />
              Voltar
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-2 text-base font-semibold text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft size={20} weight="bold" />
              Voltar
            </Link>
          )}
        </div>
        <span className="text-xs font-medium text-white/70">
          {step + 1} de {STEPS.length}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
            >
              <h1
                className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 leading-tight"
                style={{ color: current.text }}
              >
                {current.question}
              </h1>

              {/* Step 0 — Nome */}
              {step === 0 && (
                <input
                  autoFocus={shouldAutoFocus}
                  type="text"
                  autoComplete="name"
                  placeholder="Seu nome"
                  className="signup-input w-full text-lg sm:text-xl pb-3 border-b-2 outline-none transition-colors duration-300 bg-transparent"
                  style={{ color: current.text, borderColor: `${current.text}30` }}
                  {...register('name')}
                />
              )}

              {/* Step 1 — Email */}
              {step === 1 && (
                <input
                  autoFocus={shouldAutoFocus}
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  className="signup-input w-full text-lg sm:text-xl pb-3 border-b-2 outline-none transition-colors duration-300 bg-transparent"
                  style={{ color: current.text, borderColor: `${current.text}30` }}
                  {...register('email')}
                />
              )}

              {/* Step 2 — Senha */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2.5 opacity-50"
                      style={{ color: current.text }}
                    >
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        autoFocus={shouldAutoFocus}
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="signup-input w-full text-lg pb-3 border-b-2 outline-none transition-colors duration-300 bg-transparent pr-10"
                        style={{ color: current.text, borderColor: `${current.text}30` }}
                        {...register('password')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(v => !v)}
                        className="absolute right-0 bottom-3 cursor-pointer mb-15 opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: current.text }}
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      >
                        {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-widest mb-2.5 opacity-50"
                      style={{ color: current.text }}
                    >
                      Confirmar senha
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirm ? 'text' : 'password'}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="signup-input w-full text-lg pb-3 border-b-2 outline-none transition-colors duration-300 bg-transparent pr-10"
                        style={{ color: current.text, borderColor: `${current.text}30` }}
                        {...register('confirmPassword')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(v => !v)}
                        className="absolute right-0 bottom-3 cursor-pointer mb-15 opacity-40 hover:opacity-100 transition-opacity"
                        style={{ color: current.text }}
                        aria-label={showConfirm ? 'Ocultar senha' : 'Mostrar senha'}
                      >
                        {showConfirm ? <EyeSlash size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Renda */}
              {step === 3 && (
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-xl sm:text-2xl font-semibold opacity-40"
                    style={{ color: current.text }}
                  >
                    R$
                  </span>
                  <input
                    autoFocus={shouldAutoFocus}
                    type="text"
                    inputMode="numeric"
                    placeholder="0,00"
                    className="signup-input w-full text-2xl sm:text-3xl font-semibold pb-3 border-b-2 outline-none transition-colors duration-300 bg-transparent"
                    style={{ color: current.text, borderColor: `${current.text}30` }}
                    {...register('monthlyIncome')}
                  />
                </div>
              )}

              {/* Step 4 — Perfil */}
              {step === 4 && (
                <Controller
                  control={control}
                  name="savingsProfile"
                  render={({ field }) => (
                    <div className="flex flex-col gap-3">
                      {PROFILES.map(option => {
                        const selected = field.value === option.value
                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => field.onChange(option.value)}
                            className="cursor-pointer mb-15 w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-300"
                            style={{
                              borderColor: selected ? current.accent : `${current.text}20`,
                              backgroundColor: selected ? `${current.accent}15` : 'transparent',
                              color: current.text,
                            }}
                          >
                            <span className="block text-base font-semibold">{option.label}</span>
                            <span className="block text-sm mt-1 opacity-50">{option.desc}</span>
                          </button>
                        )
                      })}
                    </div>
                  )}
                />
              )}

              {stepError && (
                <p
                  className="mt-4 text-sm font-medium"
                  style={{ color: current.accent }}
                >
                  {stepError}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-6 pb-8 sm:px-10 sm:pb-10">
        <div className="max-w-md mx-auto">
          <button
            type="button"
            onClick={handleNext}
            disabled={isSubmitting}
            className="cursor-pointer mb-15 w-full flex items-center justify-center gap-2.5 font-semibold py-3.5 sm:py-4 rounded-xl text-sm tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none"
            style={{ backgroundColor: current.text, color: current.bg }}
          >
            {isSubmitting ? (
              <span
                className="w-4 h-4 border-2 rounded-full animate-spin"
                style={{ borderColor: `${current.bg}30`, borderTopColor: current.bg }}
              />
            ) : (
              <>
                {isLastStep ? 'Criar conta' : 'Continuar'}
                <ArrowRight weight="bold" size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.form>
  )
}
