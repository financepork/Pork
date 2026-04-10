// Mirrors: BalanceCard + QuickActions (left) | RecentExpenses + ActiveGoals (right)
function Pulse({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-neutral-800/60 ${className}`} />
}

function BalanceCardSkeleton() {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-7">
      <Pulse className="h-3 w-32 mb-4" />
      <Pulse className="h-10 w-48 mb-6" />
      <Pulse className="h-1 w-full mb-6" />
      <div className="h-px bg-neutral-800/60 mb-5" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <Pulse className="w-8 h-8 rounded-lg shrink-0" />
          <div className="space-y-1.5 flex-1">
            <Pulse className="h-2.5 w-12" />
            <Pulse className="h-4 w-20" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Pulse className="w-8 h-8 rounded-lg shrink-0" />
          <div className="space-y-1.5 flex-1">
            <Pulse className="h-2.5 w-12" />
            <Pulse className="h-4 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

function RecentExpensesSkeleton() {
  return (
    <div>
      <div className="flex items-end justify-between mb-4">
        <div className="space-y-1.5">
          <Pulse className="h-4 w-28" />
          <Pulse className="h-3 w-20" />
        </div>
        <Pulse className="h-3 w-14" />
      </div>
      <div className="space-y-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800/40">
            <Pulse className="w-9 h-9 rounded-xl shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Pulse className="h-3.5 w-32" />
              <Pulse className="h-2.5 w-20" />
            </div>
            <div className="text-right space-y-1.5 shrink-0">
              <Pulse className="h-3.5 w-16" />
              <Pulse className="h-2.5 w-10 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActiveGoalsSkeleton() {
  return (
    <div>
      <div className="flex items-end justify-between mb-4">
        <div className="space-y-1.5">
          <Pulse className="h-4 w-24" />
          <Pulse className="h-3 w-16" />
        </div>
        <Pulse className="h-3 w-14" />
      </div>
      <div className="space-y-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="px-4 py-4 rounded-xl bg-neutral-900 border border-neutral-800/40">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <Pulse className="w-6 h-6 rounded-md shrink-0" />
                <div className="space-y-1.5">
                  <Pulse className="h-3.5 w-28" />
                  <Pulse className="h-2.5 w-20" />
                </div>
              </div>
              <Pulse className="h-5 w-10 shrink-0" />
            </div>
            <Pulse className="h-1 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomeSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-8">
      {/* PageHeader */}
      <div className="mb-8 space-y-2">
        <Pulse className="h-6 w-64" />
        <Pulse className="h-3.5 w-80" />
      </div>

      <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:items-start">
        <div className="space-y-4">
          <BalanceCardSkeleton />
          {/* QuickActions */}
          <div className="grid grid-cols-2 gap-3">
            <Pulse className="h-12 rounded-xl" />
            <Pulse className="h-12 rounded-xl" />
          </div>
        </div>

        <div className="space-y-8 mt-8 lg:mt-0">
          <RecentExpensesSkeleton />
          <ActiveGoalsSkeleton />
        </div>
      </div>
    </div>
  )
}
