import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn } from '@/lib/animations'

/* ── Real data ──────────────────────────────────────────────── */


/* ── Chart Components ───────────────────────────────────────── */

function RadialProgress({ value, size = 120, stroke = 14, color = '#22c55e', label, sublabel }: {
  value: number
  size?: number
  stroke?: number
  color?: string
  label: string
  sublabel: string
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const filled = (value / 100) * circumference
  const gap = circumference - filled

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={stroke}
          />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={color} strokeWidth={stroke}
            strokeDasharray={`${filled} ${gap}`}
            strokeLinecap="butt"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-2xl font-black text-neutral-100">{value}%</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="text-xs text-neutral-400 mt-1">{sublabel}</p>
      </div>
    </div>
  )
}


/* ── Section ────────────────────────────────────────────────── */

export default function DataInsightsSection() {
  return (
    <section id="data-insights" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, rgba(34,197,94,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(239,68,68,0.03) 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          className="mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            className="text-xs font-semibold text-brand mb-5 uppercase tracking-[0.2em]"
            variants={fadeUp}
          >
            A realidade financeira
          </motion.p>
          <motion.h2
            className="text-neutral-50 tracking-tight max-w-2xl"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', fontWeight: 800, lineHeight: 1.05 }}
            variants={fadeUp}
          >
            Por que controle financeiro<br />
            <span style={{ color: 'rgba(255,255,255,0.32)' }}>não é opcional.</span>
          </motion.h2>
          <motion.p
            className="text-neutral-300 text-sm leading-relaxed mt-6 max-w-md"
            variants={fadeUp}
          >
            Os números não mentem. A maioria dos brasileiros vive
            sem controle — e paga caro por isso.
          </motion.p>
        </motion.div>

        {/* Row 1 — 3 radial stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div className="flex flex-col items-center justify-center py-6" variants={scaleIn}>
            <RadialProgress
              value={78}
              color="#ef4444"
              label="das famílias estão endividadas"
              sublabel="CNC / PEIC, 2023"
            />
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center py-6" variants={scaleIn}>
            <RadialProgress
              value={46}
              color="#f97316"
              label="não controlam o próprio orçamento"
              sublabel="SPC Brasil / CNDL, 2019"
            />
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center py-6" variants={scaleIn}>
            <RadialProgress
              value={68}
              color="#f97316"
              label="não têm reserva de emergência"
              sublabel="ANBIMA, 2023"
            />
          </motion.div>
        </motion.div>

        {/* Row 2 — impact stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {[
            {
              value: '58%',
              label: 'não conseguem chegar ao fim do mês',
              source: 'SPC Brasil, 2022',
              accent: false,
            },
            {
              value: '431%',
              label: 'juros anuais do cartão de crédito rotativo',
              source: 'Banco Central, 2023',
              accent: false,
            },
            {
              value: '3x',
              label: 'mais chance de sobrar dinheiro com controle de gastos',
              source: 'SPC Brasil / CNDL',
              accent: true,
            },
            {
              value: '72,5 mi',
              label: 'de brasileiros inadimplentes',
              source: 'Serasa Experian, 2024',
              accent: false,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-neutral-900/40 border border-neutral-800/40 rounded-lg px-5 py-5"
              variants={fadeUp}
            >
              <p className={`text-3xl font-black tabular-nums ${stat.accent ? 'text-brand' : 'text-neutral-100'}`}>
                {stat.value}
              </p>
              <p className="text-sm text-neutral-400 leading-relaxed mt-2">{stat.label}</p>
              <p className="text-xs text-neutral-400 mt-2.5">{stat.source}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
