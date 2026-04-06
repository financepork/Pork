import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { formatMonthYear } from '@/shared/utils/date'

interface Props {
  year: number
  month: number
  onPrev: () => void
  onNext: () => void
  isCurrentMonth: boolean
}

export default function MonthSelector({ year, month, onPrev, onNext, isCurrentMonth }: Props) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrev}
        className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-150 active:scale-95"
        aria-label="Mês anterior"
      >
        <CaretLeft size={16} weight="bold" />
      </button>

      <p className="text-sm font-semibold text-neutral-100 capitalize">
        {formatMonthYear(year, month)}
      </p>

      <button
        onClick={onNext}
        disabled={isCurrentMonth}
        className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-150 active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Próximo mês"
      >
        <CaretRight size={16} weight="bold" />
      </button>
    </div>
  )
}
