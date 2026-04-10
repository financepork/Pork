import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { formatCurrency } from '@/shared/utils/currency'
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_LABELS } from '../types/expense'
import type { Expense, ExpenseCategory } from '../types/expense'

interface Props {
  expenses: Expense[]
  year: number
  month: number
}

// Tailwind class color → hex for SVG fills/strokes
const CATEGORY_HEX: Record<ExpenseCategory, string> = {
  alimentacao: '#fb923c',
  transporte:  '#60a5fa',
  lazer:       '#c084fc',
  moradia:     '#facc15',
  saude:       '#f87171',
  educacao:    '#22d3ee',
  outros:      '#a3a3a3',
}

function buildDailyTotals(expenses: Expense[], year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate()
  const totals = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    total: 0,
  }))
  for (const e of expenses) {
    const d = new Date(e.date + 'T00:00:00')
    if (d.getFullYear() === year && d.getMonth() + 1 === month) {
      totals[d.getDate() - 1].total += e.amount
    }
  }
  return totals
}

function buildCategoryTotals(expenses: Expense[]) {
  const totals: Partial<Record<ExpenseCategory, number>> = {}
  for (const e of expenses) {
    totals[e.category] = (totals[e.category] ?? 0) + e.amount
  }
  return Object.entries(totals)
    .sort((a, b) => (b[1] as number) - (a[1] as number)) as [ExpenseCategory, number][]
}

export default function ExpenseCharts({ expenses, year, month }: Props) {
  if (expenses.length === 0) return null

  const daily = buildDailyTotals(expenses, year, month)
  const maxDaily = Math.max(...daily.map(d => d.total), 1)
  const categories = buildCategoryTotals(expenses)
  const total = categories.reduce((acc, [, v]) => acc + v, 0)

  // Donut math
  const size = 180
  const radius = 68
  const stroke = 22
  const circumference = 2 * Math.PI * radius
  let cumulative = 0
  const segments = categories.map(([cat, value]) => {
    const pct = value / total
    const dash = pct * circumference
    const gap = circumference - dash
    const offset = circumference * (1 - cumulative)
    cumulative += pct
    return { cat, value, pct, dash, gap, offset }
  })

  const topCategory = categories[0]
  const avgDaily = total / daily.filter(d => d.total > 0).length || 0
  const activeDays = daily.filter(d => d.total > 0).length
  const biggestDay = daily.reduce((max, d) => (d.total > max.total ? d : max), daily[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 lg:gap-5">
      {/* DAILY BAR CHART */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5 lg:p-6"
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <p className="text-xs font-medium text-neutral-600 uppercase tracking-widest mb-1.5">
              Gastos diários
            </p>
            <p className="text-sm text-neutral-400">
              Média de {formatCurrency(avgDaily)} em {activeDays}{' '}
              {activeDays === 1 ? 'dia' : 'dias'} ativos
            </p>
          </div>
          {biggestDay.total > 0 && (
            <div className="text-right shrink-0">
              <p className="text-[10px] font-medium text-neutral-600 uppercase tracking-widest mb-0.5">
                Pico
              </p>
              <p className="text-sm font-semibold text-neutral-200 tabular-nums">
                {formatCurrency(biggestDay.total)}
              </p>
              <p className="text-[10px] text-neutral-500">dia {biggestDay.day}</p>
            </div>
          )}
        </div>

        <div className="flex items-end gap-[3px] h-32">
          {daily.map(d => {
            const h = (d.total / maxDaily) * 100
            const isPeak = d.total === biggestDay.total && d.total > 0
            return (
              <div
                key={d.day}
                className="flex-1 h-full flex items-end group relative"
                title={`Dia ${d.day}: ${formatCurrency(d.total)}`}
              >
                <div
                  className={`w-full rounded-t-sm transition-colors ${
                    d.total === 0
                      ? 'bg-neutral-800/40'
                      : isPeak
                        ? 'bg-brand'
                        : 'bg-brand/40 group-hover:bg-brand/70'
                  }`}
                  style={{ height: `${d.total === 0 ? 4 : Math.max(h, 6)}%` }}
                />
              </div>
            )
          })}
        </div>

        <div className="flex justify-between mt-2 text-[10px] text-neutral-600 tabular-nums">
          <span>1</span>
          <span>{Math.ceil(daily.length / 2)}</span>
          <span>{daily.length}</span>
        </div>
      </motion.div>

      {/* CATEGORY DONUT */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5 lg:p-6"
      >
        <p className="text-xs font-medium text-neutral-600 uppercase tracking-widest mb-5">
          Por categoria
        </p>

        <div className="flex items-center gap-5">
          <div className="relative shrink-0">
            <svg width={size} height={size} className="-rotate-90">
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#262626"
                strokeWidth={stroke}
              />
              {segments.map(seg => (
                <circle
                  key={seg.cat}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={CATEGORY_HEX[seg.cat]}
                  strokeWidth={stroke}
                  strokeDasharray={`${seg.dash} ${seg.gap}`}
                  strokeDashoffset={seg.offset}
                  strokeLinecap="butt"
                />
              ))}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[10px] font-medium text-neutral-600 uppercase tracking-widest">
                Top
              </p>
              <p className="text-xs font-semibold text-neutral-200 mt-0.5">
                {CATEGORY_LABELS[topCategory[0]]}
              </p>
              <p className="text-[10px] text-neutral-500 tabular-nums mt-0.5">
                {Math.round((topCategory[1] / total) * 100)}%
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-0 space-y-2">
            {categories.slice(0, 5).map(([cat, value]) => {
              const c = CATEGORY_COLORS[cat]
              const Icon = CATEGORY_ICONS[cat]
              const pct = Math.round((value / total) * 100)
              return (
                <div key={cat} className="flex items-center gap-2 min-w-0">
                  <Icon size={13} className={`${c.text} shrink-0`} weight="duotone" />
                  <span className="text-xs text-neutral-400 truncate flex-1">
                    {CATEGORY_LABELS[cat]}
                  </span>
                  <span className="text-xs font-medium text-neutral-300 tabular-nums shrink-0">
                    {pct}%
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
