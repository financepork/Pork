import { formatCurrency } from '@/shared/utils/currency'
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../types/expense'
import type { Expense, ExpenseCategory } from '../types/expense'

interface Props {
  expenses: Expense[]
  total: number
}

function getCategoryTotals(expenses: Expense[]) {
  const totals: Partial<Record<ExpenseCategory, number>> = {}
  for (const e of expenses) {
    totals[e.category] = (totals[e.category] ?? 0) + e.amount
  }
  return Object.entries(totals)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 3) as [ExpenseCategory, number][]
}

export default function ExpenseSummary({ expenses, total }: Props) {
  const topCategories = getCategoryTotals(expenses)

  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-6">
      <p className="text-xs font-medium text-neutral-600 uppercase tracking-widest mb-3">
        Total gasto
      </p>
      <p
        className="font-brand font-bold text-neutral-50 tabular-nums tracking-tight leading-none mb-5"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
      >
        {formatCurrency(total)}
      </p>

      {topCategories.length > 0 && (
        <>
          <div className="h-px bg-neutral-800/60 mb-4" />
          <p className="text-xs font-medium text-neutral-600 mb-3">Top categorias</p>
          <div className="space-y-2.5">
            {topCategories.map(([cat, amount]) => {
              const c = CATEGORY_COLORS[cat]
              const pct = (amount / total) * 100
              return (
                <div key={cat}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                      <span className="text-xs text-neutral-400">{CATEGORY_LABELS[cat]}</span>
                    </div>
                    <span className="text-xs font-medium text-neutral-300 tabular-nums">
                      {formatCurrency(amount)}
                    </span>
                  </div>
                  <div className="h-0.5 rounded-full bg-neutral-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${c.dot}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
