import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

const INTERVAL = 4000

const features = [
  {
    num: '01',
    title: 'Controle de Gastos',
    tag: 'Registro diário',
    description:
      'Registre e categorize cada despesa do dia a dia. Alimentação, transporte, lazer e muito mais. Entenda exatamente pra onde seu dinheiro vai — sem surpresas no fim do mês.',
  },
  {
    num: '02',
    title: 'Metas Financeiras',
    tag: 'Objetivos',
    description:
      'Defina objetivos com valor e prazo. Acompanhe seu progresso em tempo real com barras visuais e celebre cada conquista no caminho até a liberdade financeira.',
  },
  {
    num: '03',
    title: 'Planejamento Econômico',
    tag: 'Estratégia',
    description:
      'Estratégias personalizadas em três níveis — Fácil, Médio e Difícil. Adaptadas à sua realidade financeira para que você consiga manter o ritmo sem desistir.',
  },
  {
    num: '04',
    title: 'Dashboard Interativo',
    tag: 'Visão geral',
    description:
      'Visualize todos os seus dados em um único painel. Gráficos de evolução, distribuição por categoria e resumo mensal para decisões mais inteligentes.',
  },
]

export default function FeaturesSection() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const pausedRef = useRef(false)
  const elapsedRef = useRef(0)
  const lastTickRef = useRef(0)
  const rafRef = useRef<number>(0)

  const current = features[active]
  const tick = useCallback(() => {
    const now = performance.now()
    if (!pausedRef.current) {
      elapsedRef.current += now - lastTickRef.current
    }
    lastTickRef.current = now

    const pct = Math.min((elapsedRef.current / INTERVAL) * 100, 100)
    setProgress(pct)

    if (elapsedRef.current >= INTERVAL) {
      elapsedRef.current = 0
      setActive((prev) => (prev + 1) % features.length)
    }

    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    lastTickRef.current = performance.now()
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [tick])

  const handlePause = () => {
    pausedRef.current = true
  }

  const handleResume = () => {
    pausedRef.current = false
    lastTickRef.current = performance.now()
  }

  const handleSelect = (i: number) => {
    setActive(i)
    elapsedRef.current = 0
    setProgress(0)
    lastTickRef.current = performance.now()
  }

  return (
    <section
      id="features"
      className="relative min-h-screen flex items-center py-28 overflow-hidden"
    >
      {/* Background — subtle green radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(34,197,94,0.04) 0%, transparent 65%)',
        }}
      />
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 w-full">

        {/* Heading */}
        <motion.div
          className="mb-20 max-w-2xl pt-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.h2
            className="text-neutral-50 tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.05 }}
            variants={fadeUp}
          >
            Tudo que você precisa,<br />
            <span style={{ color: 'rgba(255,255,255,0.48)' }}>na palma da sua mão</span>
          </motion.h2>
        </motion.div>

        {/* Interactive panel */}
        <motion.div
          className="grid lg:grid-cols-[1fr_1.5fr] gap-0 border border-neutral-800/60 rounded-2xl overflow-hidden"
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >

          {/* Left — selector */}
          <div className="border-b lg:border-b-0 lg:border-r border-neutral-800/60">
            {features.map(({ num, title, tag }, i) => (
              <button
                key={num}
                onClick={() => handleSelect(i)}
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                className={`w-full text-left px-5 py-4 lg:px-8 lg:py-6 flex items-center gap-4 lg:gap-5 border-b border-neutral-800/40 last:border-0 transition-colors duration-200 group relative ${
                  active === i ? 'bg-neutral-900/80' : 'hover:bg-neutral-900/40'
                }`}
              >
                {/* Active indicator + progress bar */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neutral-800 overflow-hidden">
                  <div
                    className="absolute left-0 bottom-0 w-full bg-brand transition-none"
                    style={{
                      height: active === i ? `${progress}%` : '0%',
                      top: 0,
                    }}
                  />
                </div>

                <span
                  className={`font-black tabular-nums transition-colors duration-300 ${
                    active === i ? 'text-brand' : 'text-neutral-800 group-hover:text-neutral-600'
                  }`}
                  style={{ fontSize: '1.6rem', lineHeight: 1 }}
                >
                  {num}
                </span>

                <div>
                  <p
                    className={`font-semibold text-sm transition-colors duration-200 ${
                      active === i ? 'text-neutral-100' : 'text-neutral-500 group-hover:text-neutral-300'
                    }`}
                  >
                    {title}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">{tag}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right — content */}
          <div
            className="bg-neutral-950/60 p-6 lg:p-10 flex flex-col justify-start gap-6 lg:gap-8"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          >
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold text-brand/60 uppercase tracking-[0.18em]">
                  {current.tag}
                </span>
              </div>

              <h3
                className="text-neutral-50 font-bold tracking-tight"
                style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', lineHeight: 1.12 }}
              >
                {current.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed text-sm max-w-md">
                {current.description}
              </p>
            </div>

            <div className="mt-auto flex gap-2 items-center self-end">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  aria-label={`Ir para card ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    active === i
                      ? 'w-6 h-2 bg-brand'
                      : 'w-2 h-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
