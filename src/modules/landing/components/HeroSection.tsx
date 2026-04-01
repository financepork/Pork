import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import DashboardBg from './DashboardBg'
import { fadeUp, fadeLeft, fadeRight, stagger, scaleIn } from '@/lib/animations'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Dashboard — bleeds right + bottom, visible on all screens */}
      <motion.div
        className="absolute right-0 top-[60%] sm:top-40 lg:top-52 bottom-0 w-[90%] sm:w-[75%] lg:w-[62%] pointer-events-none z-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <DashboardBg />
      </motion.div>

      {/* Fade — vertical on mobile (text top, dashboard bottom), horizontal on desktop */}
      <div
        className="absolute inset-0 pointer-events-none z-10 sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, #0a0a0a 0%, #0a0a0a 30%, rgba(10,10,10,0.5) 42%, rgba(10,10,10,0.08) 55%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-10 hidden sm:block"
        style={{
          background:
            'linear-gradient(90deg, #0a0a0a 0%, #0a0a0a 30%, rgba(10,10,10,0.85) 45%, rgba(10,10,10,0.4) 65%, rgba(10,10,10,0.1) 82%, transparent 100%)',
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
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex items-start sm:items-center">
        <motion.div
          className="w-full lg:w-[54%] flex flex-col pt-6 pb-12 sm:py-24 mb-8 sm:mb-16"
          style={{ gap: '2.25rem' }}
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Headline */}
          <motion.h1
            className="tracking-tight mt-8 md:mt-0"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.8rem)', fontWeight: 800, lineHeight: 1.08 }}
            variants={fadeUp}
          >
            <span className="text-brand">Conheça o Pork</span><br />
            <span className="text-neutral-50">seu auxiliar financeiro digital</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-neutral-200 leading-relaxed"
            style={{ fontSize: '1.125rem', maxWidth: '36ch' }}
            variants={fadeUp}
          >
            Registre gastos, defina metas e acompanhe sua
            evolução financeira. Tudo em um só lugar.
          </motion.p>

          {/* CTA */}
          <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 pt-2" variants={fadeUp}>
            <Link
              to="/register"
              className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand-light text-neutral-950 font-semibold px-7 py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(34,197,94,0.4)] active:scale-95"
            >
              Começar grátis
              <ArrowRight weight="bold" size={14} />
            </Link>
            
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
