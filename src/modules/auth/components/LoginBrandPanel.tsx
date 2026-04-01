import { motion } from 'framer-motion'
import { fadeLeft, stagger } from '@/lib/animations'

export default function LoginBrandPanel() {
  return (
    <div className="hidden lg:flex flex-col justify-start pt-36 relative overflow-hidden px-16 xl:px-24">
      <motion.div className="relative z-10" variants={stagger} initial="hidden" animate="show">
        {/* Logo */}
        <motion.img
          src="/icon.png"
          alt="Pork"
          className="w-14 h-14 mb-4 opacity-40"
          variants={fadeLeft}
        />

        {/* Headline — large, editorial */}
        <motion.h1
          className="font-brand tracking-tight text-neutral-50 mb-5"
          style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 0.9 }}
          variants={fadeLeft}
        >
          Bom te ver<br />
          <span className="text-brand">de novo</span>
        </motion.h1>

        <motion.p className="text-lg text-neutral-300 max-w-[32ch] leading-relaxed" variants={fadeLeft}>
          Seu progresso financeiro continua exatamente de onde você parou.
        </motion.p>
      </motion.div>
    </div>
  )
}
