export default function SectionDivider() {
  return (
    <div className="relative h-0 pointer-events-none" aria-hidden>
      <div
        className="absolute left-0 right-0 z-10"
        style={{
          top: '-80px',
          height: '160px',
          background:
            'linear-gradient(to bottom, transparent 0%, #0a0a0a 45%, #0a0a0a 55%, transparent 100%)',
        }}
      />
    </div>
  )
}
