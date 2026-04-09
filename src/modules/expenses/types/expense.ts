export type ExpenseCategory =
  | 'alimentacao'
  | 'transporte'
  | 'lazer'
  | 'moradia'
  | 'saude'
  | 'educacao'
  | 'outros'

export interface Expense {
  id: string
  title: string
  category: ExpenseCategory
  amount: number
  date: string
  note?: string
}

export const CATEGORY_LABELS: Record<ExpenseCategory, string> = {
  alimentacao: 'Alimentação',
  transporte: 'Transporte',
  lazer: 'Lazer',
  moradia: 'Moradia',
  saude: 'Saúde',
  educacao: 'Educação',
  outros: 'Outros',
}

export const CATEGORY_COLORS: Record<ExpenseCategory, { text: string; bg: string; dot: string }> = {
  alimentacao: { text: 'text-orange-400', bg: 'bg-orange-400/10', dot: 'bg-orange-400' },
  transporte:  { text: 'text-blue-400',   bg: 'bg-blue-400/10',   dot: 'bg-blue-400'   },
  lazer:       { text: 'text-purple-400', bg: 'bg-purple-400/10', dot: 'bg-purple-400' },
  moradia:     { text: 'text-yellow-400', bg: 'bg-yellow-400/10', dot: 'bg-yellow-400' },
  saude:       { text: 'text-red-400',    bg: 'bg-red-400/10',    dot: 'bg-red-400'    },
  educacao:    { text: 'text-cyan-400',   bg: 'bg-cyan-400/10',   dot: 'bg-cyan-400'   },
  outros:      { text: 'text-neutral-400',bg: 'bg-neutral-400/10',dot: 'bg-neutral-400'},
}
