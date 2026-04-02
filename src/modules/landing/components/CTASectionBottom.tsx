import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

export default function CTASectionBottom() {
  return (
    <>
    <motion.section
      className="relative min-h-screen flex flex-col overflow-hidden bg-brand"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
    >

      {/* Headline — takes up most of the space */}
      <div className="flex-1 flex flex-col justify-center px-4 pr-10 sm:px-10 lg:mt-20 lg:px-16 py-16 sm:py-24 lg:py-32">
        <motion.h2
          className="tracking-tight text-neutral-950"
          style={{
            fontSize: 'clamp(5.5rem, 12vw, 13rem)',
            fontWeight: 800,
            lineHeight: 0.85,
          }}
          variants={fadeUp}
        >
          Seu dinheiro
        </motion.h2>
        <motion.h2
          className="tracking-tight"
          style={{
            fontSize: 'clamp(5.5rem, 12vw, 13rem)',
            fontWeight: 800,
            lineHeight: 0.85,
            color: 'rgba(10,10,10,0.4)',
          }}
          variants={fadeUp}
        >
          merece respeito.
        </motion.h2>
      </div>

      {/* CTA block */}
      <motion.div
        className="px-6 sm:px-10 lg:px-16 py-8 sm:py-12 lg:py-14 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10"
        style={{ borderColor: 'rgba(10,10,10,0.12)', background: 'rgba(10,10,10,0.06)' }}
        variants={fadeUp}
      >
        <motion.div className="flex flex-col gap-2" variants={fadeUp}>
          <p
            className="font-bold text-neutral-950"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', lineHeight: 1.25 }}
          >
            Registre, planeje e cresça.<br />De graça, para sempre.
          </p>
          <p className="text-sm" style={{ color: 'rgba(10,10,10,0.55)' }}>
            Sem cartão. Sem compromisso. Só resultado.
          </p>
        </motion.div>

        <motion.div variants={scaleIn}>
          <Link
            to="/register"
            className="group inline-flex items-center gap-3 font-bold px-7 py-4 sm:px-10 sm:py-5 rounded-3xl text-sm sm:text-base transition-all
             duration-200  whitespace-nowrap shrink-0   hover:translate-y-[-2px] bg-neutral-950 text-white"
            style={{
              background: '#0a0a0a',
              color: '#22c55e',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            Criar conta grátis
            <ArrowRight weight="bold" size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>

    </motion.section>
    </>
  )
}
