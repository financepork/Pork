import type { ExpenseCategory } from '../types/expense'
import { CATEGORY_COLORS, CATEGORY_ICONS, CATEGORY_LABELS } from '../types/expense'

interface Props {
  active: ExpenseCategory | null
  onChange: (cat: ExpenseCategory | null) => void
  available: ExpenseCategory[]
}

export default function CategoryFilter({ active, onChange, available }: Props) {
  if (available.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange(null)}
        className={`cursor-pointer shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 border
          ${active === null
            ? 'bg-brand/15 text-brand border-brand/30'
            : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-neutral-200'
          }`}
      >
        Todos
      </button>

      {available.map(cat => {
        const c = CATEGORY_COLORS[cat]
        const Icon = CATEGORY_ICONS[cat]
        const isActive = active === cat
        return (
          <button
            key={cat}
            onClick={() => onChange(isActive ? null : cat)}
            className={`cursor-pointer shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 border
              ${isActive
                ? `${c.bg} ${c.text} border-transparent`
                : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-neutral-200'
              }`}
          >
            <Icon size={12} weight="duotone" />
            {CATEGORY_LABELS[cat]}
          </button>
        )
      })}
    </div>
  )
}
