// Mirrors: GoalsOverview (left) | GoalCards grid (right)
function Pulse({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-neutral-800/60 ${className}`} />
}

function GoalsOverviewSkeleton() {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-6">
      <Pulse className="h-2.5 w-24 mb-3" />
      <Pulse className="h-9 w-36 mb-1" />
      <Pulse className="h-3 w-48 mb-5" />
      <Pulse className="h-1.5 w-full rounded-full mb-4" />
      <div className="flex items-center justify-between">
        <Pulse className="h-5 w-10" />
        <Pulse className="h-3 w-20" />
      </div>
    </div>
  )
}

function GoalCardSkeleton() {
  return (
    <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <Pulse className="w-7 h-7 rounded-md shrink-0" />
          <div className="space-y-1.5">
            <Pulse className="h-3.5 w-28" />
            <Pulse className="h-2.5 w-20" />
          </div>
        </div>
        <Pulse className="w-7 h-7 rounded-lg shrink-0" />
      </div>
      <Pulse className="h-2 w-full rounded-full mb-3" />
      <div className="flex items-end justify-between mb-4">
        <div className="space-y-1">
          <Pulse className="h-5 w-24" />
          <Pulse className="h-3 w-20" />
        </div>
        <Pulse className="h-7 w-12" />
      </div>
      <Pulse className="h-10 w-full rounded-xl" />
    </div>
  )
}

export default function GoalsSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-10 pt-8">
      {/* PageHeader */}
      <div className="mb-8 space-y-2">
        <Pulse className="h-6 w-44" />
        <Pulse className="h-3.5 w-80" />
      </div>

      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-10 lg:items-start">
        <div className="space-y-4">
          <GoalsOverviewSkeleton />
          <Pulse className="h-11 w-full rounded-xl" />
        </div>

        <div className="mt-6 lg:mt-0 grid grid-cols-1 xl:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <GoalCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
