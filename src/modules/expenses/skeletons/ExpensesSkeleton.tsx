// Mirrors: MonthSelector + ExpenseSummary (left) | CategoryFilter + ExpenseList (right)
function Pulse({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-neutral-800/60 ${className}`} />
}

function SummarySkeleton() {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-6">
      <Pulse className="h-2.5 w-20 mb-3" />
      <Pulse className="h-9 w-40 mb-5" />
      <div className="h-px bg-neutral-800/60 mb-4" />
      <Pulse className="h-2.5 w-24 mb-3" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <Pulse className="w-3 h-3 rounded-sm" />
                <Pulse className="h-2.5 w-20" />
              </div>
              <Pulse className="h-2.5 w-14" />
            </div>
            <Pulse className="h-0.5 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ExpenseListSkeleton() {
  return (
    <div className="space-y-5">
      {Array.from({ length: 2 }).map((_, g) => (
        <div key={g}>
          <Pulse className="h-2.5 w-16 mb-2 ml-1" />
          <div className="space-y-1.5">
            {Array.from({ length: g === 0 ? 3 : 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800/40">
                <Pulse className="w-9 h-9 rounded-xl shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <Pulse className="h-3.5 w-36" />
                  <Pulse className="h-2.5 w-20" />
                </div>
                <Pulse className="h-3.5 w-16 shrink-0" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ExpensesSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-8">
      {/* PageHeader */}
      <div className="mb-8 space-y-2">
        <Pulse className="h-6 w-48" />
        <Pulse className="h-3.5 w-96" />
      </div>

      <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-10 lg:items-start">
        <div className="space-y-5">
          {/* MonthSelector */}
          <div className="flex items-center justify-between px-1">
            <Pulse className="w-8 h-8 rounded-xl" />
            <Pulse className="h-4 w-24" />
            <Pulse className="w-8 h-8 rounded-xl" />
          </div>
          <SummarySkeleton />
          <Pulse className="h-11 w-full rounded-xl hidden lg:block" />
        </div>

        <div className="mt-6 lg:mt-0 space-y-5">
          {/* CategoryFilter */}
          <div className="flex gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Pulse key={i} className="h-7 w-20 rounded-full" />
            ))}
          </div>
          <ExpenseListSkeleton />
        </div>
      </div>
    </div>
  )
}
