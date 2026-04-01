import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const goalSets = [
  [
    { label: 'Viagem ao Japão', pct: 78 },
    { label: 'Reserva de emergência', pct: 61 },
    { label: 'Novo notebook', pct: 34 },
  ],
  [
    { label: 'Viagem ao Japão', pct: 82 },
    { label: 'Reserva de emergência', pct: 65 },
    { label: 'Novo notebook', pct: 38 },
  ],
  [
    { label: 'Viagem ao Japão', pct: 85 },
    { label: 'Reserva de emergência', pct: 70 },
    { label: 'Novo notebook', pct: 42 },
  ],
]

const categories = [
  { label: 'Alimentação', pct: 38, color: '#f97316' },
  { label: 'Transporte', pct: 24, color: '#3b82f6' },
  { label: 'Lazer', pct: 19, color: '#a855f7' },
  { label: 'Outros', pct: 19, color: '#6b7280' },
]

const chartValueSets = [
  [18, 34, 26, 48, 38, 62, 54, 72, 60, 84, 70, 88],
  [30, 22, 44, 32, 58, 42, 72, 56, 80, 64, 92, 78],
  [12, 42, 18, 56, 30, 70, 44, 82, 52, 90, 60, 95],
  [24, 28, 38, 40, 50, 54, 66, 62, 74, 78, 82, 90],
]

const statSets = [
  [
    { label: 'Saldo atual', value: 'R$ 4.280', color: 'text-neutral-100' },
    { label: 'Economizado', value: '+68%', color: 'text-brand' },
    { label: 'Gastos do mês', value: '↓ 12%', color: 'text-blue-400' },
  ],
  [
    { label: 'Saldo atual', value: 'R$ 4.510', color: 'text-neutral-100' },
    { label: 'Economizado', value: '+72%', color: 'text-brand' },
    { label: 'Gastos do mês', value: '↓ 15%', color: 'text-blue-400' },
  ],
  [
    { label: 'Saldo atual', value: 'R$ 4.820', color: 'text-neutral-100' },
    { label: 'Economizado', value: '+76%', color: 'text-brand' },
    { label: 'Gastos do mês', value: '↓ 18%', color: 'text-blue-400' },
  ],
]

const CYCLE = 3500

function useDataCycle<T>(sets: T[], interval = CYCLE): T {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % sets.length), interval)
    return () => clearInterval(id)
  }, [sets.length, interval])
  return sets[idx]
}

/* ── Charts ─────────────────────────────────────────────────── */

function AreaChart({ values }: { values: number[] }) {
  const W = 800
  const H = 150
  const pad = 12
  const pts = values.map(
    (v, i): [number, number] => [
      pad + (i / (values.length - 1)) * (W - pad * 2),
      H - pad - (v / 100) * (H - pad * 2),
    ]
  )

  const smoothPath = pts.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x},${y}`
    const [px, py] = pts[i - 1]
    const cx1 = px + (x - px) / 3
    const cx2 = x - (x - px) / 3
    return `${acc} C ${cx1},${py} ${cx2},${y} ${x},${y}`
  }, '')

  const areaPath = `M ${pts[0][0]},${H} ${pts.reduce((acc, [x, y], i) => {
    if (i === 0) return `L ${x},${y}`
    const [px, py] = pts[i - 1]
    const cx1 = px + (x - px) / 3
    const cx2 = x - (x - px) / 3
    return `${acc} C ${cx1},${py} ${cx2},${y} ${x},${y}`
  }, '')} L ${pts[pts.length - 1][0]},${H} Z`

  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-28 sm:h-36">
      <defs>
        <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
          <stop offset="85%" stopColor="#22c55e" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.3, 0.6, 0.9].map((t) => (
        <line key={t} x1={pad} y1={H * t} x2={W - pad} y2={H * t}
          stroke="rgba(255,255,255,0.035)" strokeWidth="1" strokeDasharray="4 6" />
      ))}
      <motion.path
        d={areaPath}
        fill="url(#ag)"
        initial={false}
        animate={{ d: areaPath }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d={smoothPath}
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ d: smoothPath }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={pts[pts.length - 1][0]}
        r="12"
        fill="rgba(34,197,94,0.12)"
        initial={false}
        animate={{ cy: pts[pts.length - 1][1] }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={pts[pts.length - 1][0]}
        r="5"
        fill="#22c55e"
        initial={false}
        animate={{ cy: pts[pts.length - 1][1] }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx={pts[pts.length - 1][0]}
        r="3"
        fill="#0a0a0a"
        initial={false}
        animate={{ cy: pts[pts.length - 1][1] }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

function DonutChart({ segments }: { segments: { pct: number; color: string }[] }) {
  const size = 120
  const stroke = 12
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const gapSize = 4

  let offset = 0
  const arcs = segments.map((seg) => {
    const len = (seg.pct / 100) * circumference - gapSize
    const dashOffset = -offset
    offset += (seg.pct / 100) * circumference
    return { ...seg, len, dashOffset, gapLen: circumference - len }
  })

  return (
    <div className="relative flex items-center justify-center shrink-0 w-24 h-24 sm:w-32 sm:h-32">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2} cy={size / 2} r={radius}
          fill="none" stroke="#262626" strokeWidth={stroke}
        />
        {arcs.map((arc, i) => (
          <motion.circle
            key={i}
            cx={size / 2} cy={size / 2} r={radius}
            fill="none" stroke={arc.color} strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${arc.len} ${arc.gapLen}`}
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
            initial={false}
            animate={{ strokeDashoffset: arc.dashOffset }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </svg>
      <div className="absolute flex flex-col items-center leading-tight">
        <span className="text-lg sm:text-xl font-semibold text-neutral-100">100%</span>
        <span className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5">gastos</span>
      </div>
    </div>
  )
}

/* ── Main Component ─────────────────────────────────────────── */

export default function DashboardBg() {
  const goals = useDataCycle(goalSets)
  const chartValues = useDataCycle(chartValueSets)
  const stats = useDataCycle(statSets)
  const donutSegments = categories.map(({ pct, color }) => ({ pct, color }))

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

  return (
    <div
      className="w-full h-full bg-neutral-900/95 border-l border-t border-neutral-800/50 rounded-tl-3xl overflow-hidden"
      style={{ boxShadow: '-60px 0 120px rgba(0,0,0,0.6)' }}
    >
      {/* Header */}
      <div className="hidden sm:flex items-center justify-between px-8 py-4 border-b border-neutral-800/50 bg-neutral-950/40">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-neutral-200">Dashboard</span>
          <span className="w-px h-4 bg-neutral-800" />
          <span className="text-sm text-neutral-600">Visão geral</span>
        </div>
        <div className="flex gap-0.5 bg-neutral-900/60 rounded-lg p-0.5">
          {['7D', '1M', '6M'].map((t, i) => (
            <span key={t} className={`text-[11px] px-2.5 py-1 rounded-md ${
              i === 1 ? 'bg-brand/15 text-brand font-medium' : 'text-neutral-600'
            }`}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="px-5 sm:px-8 py-4 sm:py-6 flex flex-col gap-4 sm:gap-6">
        {/* Stat cards row */}
        <div className="hidden sm:grid grid-cols-3 gap-4">
          {stats.map(({ label, value, color }) => (
            <div key={label} className="bg-neutral-800/40 border border-neutral-700/30 rounded-xl px-4 py-3">
              <p className="text-[11px] text-neutral-600 mb-1">{label}</p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={value}
                  className={`text-lg font-semibold ${color} leading-none tabular-nums`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {value}
                </motion.p>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-neutral-800/25 rounded-xl sm:rounded-2xl p-4 sm:px-5 sm:pt-5 sm:pb-3 border border-neutral-700/20">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <p className="text-xs font-medium text-neutral-400">Evolução de gastos</p>
            <div className="flex gap-0.5 bg-neutral-900/60 rounded-md p-0.5">
              {['7D', '1M', '6M', '1A'].map((t, i) => (
                <span key={t} className={`text-[10px] sm:text-[11px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md ${
                  i === 2 ? 'bg-brand/15 text-brand font-medium' : 'text-neutral-600'
                }`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <AreaChart values={chartValues} />
          <div className="flex justify-between mt-1 px-0.5">
            {months.map((m, i) => (
              <span key={m} className={`text-[9px] sm:text-[10px] tabular-nums ${
                i % 2 === 0 ? 'text-neutral-700' : 'text-transparent sm:text-neutral-800'
              }`}>{m}</span>
            ))}
          </div>
        </div>

        {/* Bottom — goals + donut */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {/* Goals */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] sm:text-[11px] font-medium text-neutral-600 uppercase tracking-widest">Metas ativas</p>
            <div className="flex flex-col gap-3">
              {goals.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-[11px] sm:text-sm text-neutral-400 truncate mr-2">{label}</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={pct}
                        className="text-[11px] sm:text-xs font-semibold text-brand tabular-nums shrink-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {pct}%
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #16a34a, #4ade80)',
                      }}
                      initial={false}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donut + categories */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] sm:text-[11px] font-medium text-neutral-600 uppercase tracking-widest">Distribuição</p>
            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 sm:gap-5">
              <DonutChart segments={donutSegments} />
              <div className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-1 sm:flex-col sm:gap-2 sm:flex-1">
                {categories.map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="text-[10px] sm:text-xs text-neutral-500">{label}</span>
                    <span className="text-[10px] sm:text-xs text-neutral-700 tabular-nums">{pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
