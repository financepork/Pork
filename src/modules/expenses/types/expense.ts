import {
  ForkKnifeIcon,
  CarIcon,
  GameControllerIcon,
  HouseIcon,
  HeartIcon,
  BookOpenIcon,
  TagIcon,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

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

export const CATEGORY_COLORS: Record<ExpenseCategory, { text: string; bg: string; bar: string }> = {
  alimentacao: { text: 'text-orange-400', bg: 'bg-orange-400/10', bar: 'bg-orange-400' },
  transporte:  { text: 'text-blue-400',   bg: 'bg-blue-400/10',   bar: 'bg-blue-400'   },
  lazer:       { text: 'text-purple-400', bg: 'bg-purple-400/10', bar: 'bg-purple-400' },
  moradia:     { text: 'text-yellow-400', bg: 'bg-yellow-400/10', bar: 'bg-yellow-400' },
  saude:       { text: 'text-red-400',    bg: 'bg-red-400/10',    bar: 'bg-red-400'    },
  educacao:    { text: 'text-cyan-400',   bg: 'bg-cyan-400/10',   bar: 'bg-cyan-400'   },
  outros:      { text: 'text-neutral-400',bg: 'bg-neutral-400/10',bar: 'bg-neutral-400'},
}

export const CATEGORY_ICONS: Record<ExpenseCategory, Icon> = {
  alimentacao: ForkKnifeIcon,
  transporte:  CarIcon,
  lazer:       GameControllerIcon,
  moradia:     HouseIcon,
  saude:       HeartIcon,
  educacao:    BookOpenIcon,
  outros:      TagIcon,
}
