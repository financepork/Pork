import { Link } from 'react-router-dom'
import { ArrowLeft } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { fadeUp, fadeIn, stagger } from '@/lib/animations'
import LoginForm from '@/modules/auth/components/LoginForm'
import LoginBrandPanel from '@/modules/auth/components/LoginBrandPanel'
import LoginBg from '@/modules/auth/components/LoginBg'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 grid lg:grid-cols-[1.1fr_1fr]">
      {/* Full-page atmospheric background */}
      <LoginBg />

      {/* Back button — top-left corner */}
      <motion.div className="absolute top-6 left-6 lg:top-8 lg:left-10 z-20" variants={fadeIn} initial="hidden" animate="show">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base font-semibold text-white hover:text-white/80 transition-colors duration-200 group"
        >
          <ArrowLeft size={20} weight="bold" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          Voltar
        </Link>
      </motion.div>

      {/* Left — brand panel (desktop only) */}
      <LoginBrandPanel />

      {/* Right — form */}
      <div className="relative z-10 flex items-center justify-center px-6 sm:px-10 py-16">
        <motion.div
          className="w-full max-w-sm flex flex-col gap-7"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Mobile brand + title */}
          <motion.div className="lg:hidden flex flex-col gap-3 mb-6" variants={fadeUp}>
            <img src="/icon.png" alt="Pork" className="w-16 h-16 opacity-40" />
            <h1
              className="font-brand tracking-tight text-neutral-50"
              style={{ fontSize: 'clamp(3rem, 12vw, 4rem)', fontWeight: 800, lineHeight: 0.9 }}
            >
              Bom te ver<br />
              <span className="text-brand">de novo</span>
            </h1>
            <p className="text-base text-neutral-300 leading-relaxed">
              Seu progresso financeiro continua de onde você parou.
            </p>
          </motion.div>

          {/* Desktop header */}
          <motion.div className="hidden lg:block" variants={fadeUp}>
            <h2 className="text-2xl font-bold text-neutral-100 tracking-tight mb-2">
              Entrar na sua conta
            </h2>
            <p className="text-sm text-neutral-300">Continue de onde parou.</p>
          </motion.div>

          {/* Form */}
          <LoginForm />

          {/* Register link */}
          <motion.p className="text-sm text-neutral-400 text-center pt-3" variants={fadeUp}>
            Não tem conta?{' '}
            <Link to="/register" className="text-brand hover:text-brand-light font-medium transition-colors duration-200">
              Criar conta
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
