import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const barSets = [
  [18, 30, 24, 42, 36, 55, 45, 62, 52, 72, 60, 80, 68, 85, 74, 90],
  [22, 25, 35, 32, 48, 40, 58, 50, 68, 56, 76, 64, 82, 72, 88, 94],
  [14, 34, 20, 46, 30, 52, 42, 66, 54, 78, 62, 84, 70, 88, 78, 92],
]

// Trend line irregular — sobe no geral mas com quedas pontuais
const trendSets = [
  [25, 20, 32, 28, 45, 38, 50, 44, 58, 65, 55, 70, 74, 68, 80, 88],
  [20, 28, 22, 38, 30, 42, 48, 40, 55, 50, 62, 68, 60, 76, 82, 90],
  [18, 26, 30, 24, 40, 35, 46, 52, 44, 60, 56, 72, 65, 78, 84, 92],
]

function useDataCycle() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % barSets.length), 4500)
    return () => clearInterval(id)
  }, [])
  return { bars: barSets[idx], trend: trendSets[idx] }
}

export default function LoginBg() {
  const { bars, trend } = useDataCycle()

  const barW = 32
  const gap = 14
  const totalW = bars.length * (barW + gap)
  const H = 420

  return (
    <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none overflow-hidden">
      {/* Green glow */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 40% 55%, rgba(34,197,94,0.03) 0%, transparent 60%)' }}
      />

      <svg
        className="absolute bottom-12 left-0 right-0 h-[55%] lg:h-[65%]"
        viewBox={`0 0 ${totalW} ${H}`}
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.04" />
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9" fill="none" stroke="rgba(34,197,94,0.3)" strokeWidth="1.5" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* Grid lines */}
        {[0.2, 0.4, 0.6, 0.8].map((t) => (
          <line
            key={t}
            x1={0} y1={H * t} x2={totalW} y2={H * t}
            stroke="rgba(255,255,255,0.025)"
            strokeWidth="1"
          />
        ))}

        {/* Bars */}
        {bars.map((v, i) => {
          const x = i * (barW + gap) + gap / 2
          const barH = (v / 100) * H

          return (
            <motion.rect
              key={i}
              x={x}
              width={barW}
              rx={4}
              fill="url(#bar-grad)"
              stroke="rgba(34,197,94,0.12)"
              strokeWidth="1"
              initial={false}
              animate={{ y: H - barH, height: barH }}
              transition={{ duration: 1.4, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
            />
          )
        })}

        {/* Trend line — irregular, com zigue-zague */}
        <motion.polyline
          fill="none"
          stroke="rgba(34,197,94,0.3)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          markerEnd="url(#arrow)"
          initial={false}
          animate={{
            points: trend
              .map((v, i) => {
                const x = i * (barW + gap) + gap / 2 + barW / 2
                const y = H - (v / 100) * H
                return `${x},${y}`
              })
              .join(' '),
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>


      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-40"
        style={{ background: 'linear-gradient(to bottom, #0a0a0a 10%, transparent)' }}
      />

      {/* Right fade — blend into form area */}
      <div
        className="absolute top-0 right-0 bottom-0 w-40"
        style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
      />
    </div>
  )
}
