const goals = [
  { label: 'Viagem ao Japão', pct: 78 },
  { label: 'Reserva de emergência', pct: 61 },
  { label: 'Novo notebook', pct: 34 },
]

const categories = [
  { label: 'Alimentação', pct: 38, color: '#f97316' },
  { label: 'Transporte', pct: 24, color: '#3b82f6' },
  { label: 'Lazer', pct: 19, color: '#a855f7' },
  { label: 'Outros', pct: 19, color: '#6b7280' },
]

const chartValues = [18, 34, 26, 48, 38, 62, 54, 72, 60, 84, 70, 88]

const statCards = [
  { label: 'Saldo atual', value: '—', sub: 'atualizado agora', color: 'text-neutral-100' },
  { label: 'Economizado', value: '+68%', sub: 'da meta atingida', color: 'text-brand' },
  { label: 'Gastos do mês', value: '↓ 12%', sub: 'vs. mês anterior', color: 'text-blue-400' },
]

function AreaChart() {
  const W = 800
  const H = 150
  const pad = 12
  const pts = chartValues.map(
    (v, i): [number, number] => [
      pad + (i / (chartValues.length - 1)) * (W - pad * 2),
      H - pad - (v / 100) * (H - pad * 2),
    ]
  )

  // Smooth curve using cubic bezier
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
    <svg width="100%" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="h-36">
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
      <path d={areaPath} fill="url(#ag)" />
      <path d={smoothPath} fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
      {/* Pulse dot on last point */}
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="12" fill="rgba(34,197,94,0.12)" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="5" fill="#22c55e" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3" fill="#0a0a0a" />
    </svg>
  )
}

function DonutChart() {
  const pct = 68
  const gap = 3
  const filled = pct - gap / 2
  const empty = 100 - pct - gap / 2

  return (
    <div className="relative flex items-center justify-center flex-shrink-0">
      <div
        className="w-32 h-32 rounded-full"
        style={{
          background: `conic-gradient(
            #22c55e 0% ${filled}%,
            transparent ${filled}% ${filled + gap}%,
            #262626 ${filled + gap}% ${filled + gap + empty}%,
            transparent ${filled + gap + empty}% 100%
          )`,
          WebkitMask: 'radial-gradient(circle at center, transparent 46%, black 47%)',
          mask: 'radial-gradient(circle at center, transparent 46%, black 47%)',
        }}
      />
      <div className="absolute flex flex-col items-center leading-tight">
        <span className="text-xl font-semibold text-neutral-100">{pct}%</span>
        <span className="text-[10px] text-neutral-500 mt-0.5">da meta</span>
      </div>
    </div>
  )
}

export default function DashboardBg() {
  return (
    <div
      className="w-full h-full bg-neutral-900/95 border-l border-t border-neutral-800/50 rounded-tl-3xl overflow-hidden"
      style={{ boxShadow: '-60px 0 120px rgba(0,0,0,0.6)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-neutral-800/50 bg-neutral-950/40">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-neutral-200">Dashboard</span>
          <span className="w-px h-4 bg-neutral-800" />
          <span className="text-sm text-neutral-600">Visão geral</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand" />
          <span className="text-xs text-brand bg-brand/8 border border-brand/15 px-3 py-1 rounded-full">
            Março 2025
          </span>
        </div>
      </div>

      <div className="px-8 py-6 flex flex-col gap-6">
        {/* Stat cards row */}
        <div className="grid grid-cols-3 gap-4">
          {statCards.map(({ label, value, sub, color }) => (
            <div key={label} className="bg-neutral-800/40 border border-neutral-700/30 rounded-xl px-4 py-3">
              <p className="text-xs text-neutral-600 mb-1.5">{label}</p>
              <p className={`text-lg font-semibold ${color} leading-none mb-1`}>{value}</p>
              <p className="text-[11px] text-neutral-700">{sub}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-neutral-800/25 rounded-2xl px-5 pt-5 pb-3 border border-neutral-700/20">
          <div className="flex items-start justify-between mb-3">
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-medium text-neutral-400">Evolução de gastos</p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-brand font-medium">↑ +12.4%</span>
                <span className="text-neutral-700 text-xs">vs. mês anterior</span>
              </div>
            </div>
            <div className="flex gap-1 bg-neutral-900/60 rounded-lg p-0.5">
              {['7D', '1M', '6M', '1A'].map((t, i) => (
                <span key={t} className={`text-[11px] px-2.5 py-1 rounded-md cursor-pointer transition-colors ${
                  i === 2 ? 'bg-brand/15 text-brand' : 'text-neutral-600'
                }`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <AreaChart />
          <div className="flex justify-between px-0.5">
            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m) => (
              <span key={m} className="text-[10px] text-neutral-800">{m}</span>
            ))}
          </div>
        </div>

        {/* Bottom — goals + donut */}
        <div className="grid grid-cols-2 gap-6">
          {/* Goals */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[11px] font-medium text-neutral-600 uppercase tracking-widest">Metas ativas</p>
            {goals.map(({ label, pct }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm text-neutral-300">{label}</span>
                  <span className="text-xs font-semibold text-brand tabular-nums">{pct}%</span>
                </div>
                <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: 'linear-gradient(90deg, #16a34a, #4ade80)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Donut + categories */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[11px] font-medium text-neutral-600 uppercase tracking-widest">Distribuição</p>
            <div className="flex items-center gap-5">
              <DonutChart />
              <div className="flex flex-col gap-2 flex-1">
                {categories.map(({ label, pct, color }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="text-xs text-neutral-500 flex-1 truncate">{label}</span>
                    <span className="text-xs text-neutral-600 tabular-nums">{pct}%</span>
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
