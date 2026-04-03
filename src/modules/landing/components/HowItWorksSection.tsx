import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, stagger } from '@/lib/animations'

const bars = [30, 42, 38, 56, 50, 68, 88]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          className="mb-14 lg:mb-24"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            className="text-xs font-semibold text-brand mb-5 uppercase tracking-[0.2em]"
            variants={fadeUp}
          >
            Como funciona
          </motion.p>
          <motion.h2
            className="text-neutral-50 tracking-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.05 }}
            variants={fadeUp}
          >
            Três passos.<br />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>Uma virada financeira.</span>
          </motion.h2>
        </motion.div>

        {/* Step 01 */}
        <motion.div
          className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
            <span className="font-black text-brand" style={{ fontSize: '22rem', lineHeight: 1, opacity: 0.11 }}>01</span>
          </div>
          <motion.div className="relative z-10 flex flex-col gap-5" variants={fadeLeft}>
            <span className="text-xs font-black text-brand/50 tracking-[0.2em]">01</span>
            <h3 className="text-neutral-50 font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1 }}>
              Crie sua conta<br />em 1 minuto.
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
              Sem cartão de crédito, sem burocracia. Só seu e-mail e uma senha — e você já está dentro.
            </p>
            
          </motion.div>
          <motion.div className="relative z-10 flex justify-center lg:justify-end" variants={fadeRight}>
            <div className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-brand/15 border border-brand/20 flex items-center justify-center">
                  <img src="/icon.png" alt="Pork" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-100">Conta criada!</p>
                  <p className="text-xs text-neutral-400">Bem-vindo ao Pork</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Step 02 */}
        <motion.div
          className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-32"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
            <span className="font-black text-brand" style={{ fontSize: '22rem', lineHeight: 1, opacity: 0.11 }}>02</span>
          </div>
          <motion.div className="relative z-10 flex justify-center lg:justify-start order-2 lg:order-1" variants={fadeLeft}>
            <div className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 w-full max-w-sm">
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-4">Gastos de março</p>
              {[
                { cat: 'Alimentação', val: 'R$ 420', color: '#f97316', pct: 62 },
                { cat: 'Transporte', val: 'R$ 180', color: '#3b82f6', pct: 38 },
                { cat: 'Lazer', val: 'R$ 95', color: '#a855f7', pct: 22 },
              ].map(({ cat, val, color, pct }) => (
                <div key={cat} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-neutral-400">{cat}</span>
                    <span className="text-xs font-semibold text-neutral-300 tabular-nums">{val}</span>
                  </div>
                  <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="relative z-10 flex flex-col gap-5 order-1 lg:order-2" variants={fadeRight}>
            <span className="text-xs font-black text-brand/50 tracking-[0.2em]">02</span>
            <h3 className="text-neutral-50 font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1 }}>
              Registre gastos<br />e defina metas.
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
              Categorize cada despesa, defina objetivos com prazo e veja exatamente pra onde seu dinheiro vai.
            </p>
            
          </motion.div>
        </motion.div>

        {/* Step 03 */}
        <motion.div
          className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
            <span className="font-black text-brand" style={{ fontSize: '22rem', lineHeight: 1, opacity: 0.11 }}>03</span>
          </div>
          <motion.div className="relative z-10 flex flex-col gap-5" variants={fadeLeft}>
            <span className="text-xs font-black text-brand/50 tracking-[0.2em]">03</span>
            <h3 className="text-neutral-50 font-bold tracking-tight" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1.1 }}>
              Veja seu dinheiro<br />crescer de verdade.
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
              Acompanhe a evolução no dashboard, ajuste o planejamento e celebre cada meta batida.
            </p>
           
          </motion.div>
          <motion.div className="relative z-10 flex justify-center lg:justify-end" variants={fadeRight}>
            <div className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 w-full max-w-sm">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-[11px] text-neutral-400 uppercase tracking-widest font-semibold">Economias</p>
                  <p className="text-2xl font-black text-brand tabular-nums mt-1">R$ 1.840</p>
                </div>
                <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/15 px-2.5 py-1 rounded-full">↑ 34%</span>
              </div>
              <div className="flex items-end gap-1.5 h-16">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background: i === bars.length - 1
                        ? '#22c55e'
                        : `rgba(34,197,94,${0.1 + (i / bars.length) * 0.25})`,
                      boxShadow: i === bars.length - 1 ? '0 0 10px rgba(34,197,94,0.4)' : 'none',
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {['Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev', 'Mar'].map((m) => (
                  <span key={m} className="text-[10px] text-neutral-500">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
