import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import DashboardBg from './DashboardBg'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Dashboard — bleeds right + bottom */}
      <motion.div
        className="hidden lg:block absolute right-0 top-52 bottom-0 w-[62%] pointer-events-none z-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <DashboardBg />
      </motion.div>

      {/* Left fade */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 46%, rgba(10,10,10,0.88) 58%, rgba(10,10,10,0.3) 72%, transparent 90%)',
        }}
      />
      {/* Subtle green glow */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse at 70% 60%, rgba(34,197,94,0.05) 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)] flex items-center">
        <motion.div
          className="w-full lg:w-[54%] flex flex-col py-24 mb-16"
          style={{ gap: '2.25rem' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            className="tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 800, lineHeight: 1.08 }}
            variants={fadeUp}
          >
            <span className="text-brand">Conheça o Pork</span><br />
            <span className="text-neutral-50">seu auxiliar financeiro digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-neutral-400 leading-relaxed"
            style={{ fontSize: '1.125rem', maxWidth: '36ch' }}
            variants={fadeUp}
          >
            Registre gastos, defina metas e acompanhe sua
            evolução financeira. Tudo em um só lugar.
          </motion.p>

          {/* CTA */}
          <motion.div className="flex items-center gap-5 pt-2" variants={fadeUp}>
            <Link
              to="/register"
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-light text-neutral-950 font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] active:scale-95"
            >
              Começar grátis
              <ArrowRight weight="bold" size={14} />
            </Link>
            <a
              href="#features"
              className="text-sm text-neutral-500 hover:text-neutral-200 font-medium transition-colors duration-200"
            >
              Ver funcionalidades →
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
