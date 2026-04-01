import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Eye, EyeSlash, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface LoginFormData {
  email: string
  password: string
}

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      {/* Email */}
      <motion.div variants={fadeUp}>
        <label htmlFor="email" className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-[0.15em] mb-2.5">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="seu@email.com"
          className="w-full bg-transparent text-neutral-100 text-sm pb-2.5 border-b border-neutral-800 focus:border-brand outline-none transition-colors duration-300 placeholder:text-neutral-700"
          {...register('email', {
            required: 'Informe seu e-mail',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
          })}
        />
        {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>}
      </motion.div>

      {/* Password */}
      <motion.div variants={fadeUp}>
        <label htmlFor="password" className="block text-[11px] font-semibold text-neutral-300 uppercase tracking-[0.15em] mb-2.5">
          Senha
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2.5 border-b border-neutral-800 focus:border-brand outline-none transition-colors duration-300 placeholder:text-neutral-700 pr-10"
            {...register('password', {
              required: 'Informe sua senha',
              minLength: { value: 6, message: 'Mínimo 6 caracteres' },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-0 bottom-2.5 text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {errors.password && <p className="text-xs text-red-400 mt-1.5">{errors.password.message}</p>}
      </motion.div>

      {/* Submit */}
      <motion.div className="pt-2" variants={fadeUp}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2.5 bg-brand hover:bg-brand-light text-neutral-950 font-semibold py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
          ) : (
            <>
              Entrar
              <ArrowRight weight="bold" size={14} />
            </>
          )}
        </button>
      </motion.div>
    </form>
  )
}
