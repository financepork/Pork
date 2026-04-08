import type { Icon } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/lib/animations'

interface PageHeaderProps {
  icon: Icon
  title: string
  description?: string
}

export default function PageHeader({
  icon: IconComponent,
  title,
  description,
}: PageHeaderProps) {
  return (
    <motion.header
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative pt-10 lg:pt-14 pb-8 lg:pb-10 mb-8 lg:mb-12"
    >
      <div className="flex items-stretch gap-4 lg:gap-5">
        {/* Vertical brand accent line — stretches to match content height */}
        <div className="w-0.5 shrink-0 rounded-full bg-brand" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title row — icon + title inline */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 lg:gap-4"
          >
            <span className="flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl bg-brand/12 ring-1 ring-brand/20">
              <IconComponent
                size={22}
                weight="fill"
                className="text-brand lg:hidden"
              />
              <IconComponent
                size={26}
                weight="fill"
                className="text-brand hidden lg:block"
              />
            </span>
            <h1
              className="font-brand tracking-tight text-neutral-50"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-sm lg:text-base text-neutral-400 leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.header>
  )
}
