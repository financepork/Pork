function Pulse({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded-lg bg-neutral-800/60 ${className}`} />
}

export default function ProfileSkeleton() {
  return (
    <div className="max-w-xl mx-auto px-5 lg:px-10 pt-8">
      {/* PageHeader */}
      <div className="mb-8 space-y-2">
        <Pulse className="h-6 w-36" />
        <Pulse className="h-3.5 w-72" />
      </div>

      <div className="space-y-5">
        {/* Identity */}
        <div className="px-1 space-y-1.5">
          <Pulse className="h-5 w-36" />
          <Pulse className="h-3.5 w-44" />
        </div>

        {/* ProfileStats — salary + savings + plan */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5">
                <Pulse className="w-8 h-8 rounded-xl mb-3" />
                <Pulse className="h-6 w-24 mb-1" />
                <Pulse className="h-2.5 w-20" />
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-neutral-900 border border-neutral-800/60 p-5 flex items-center gap-4">
            <Pulse className="w-10 h-10 rounded-xl shrink-0" />
            <div className="flex-1 space-y-1.5">
              <Pulse className="h-3.5 w-24" />
              <Pulse className="h-2.5 w-36" />
            </div>
          </div>
          <Pulse className="h-11 w-full rounded-xl" />
        </div>

        {/* Logout */}
        <Pulse className="h-14 w-full rounded-2xl" />
      </div>
    </div>
  )
}
