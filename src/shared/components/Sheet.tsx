import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from '@phosphor-icons/react'

interface SheetProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function Sheet({ isOpen, onClose, title, children }: SheetProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="relative w-full sm:max-w-md bg-neutral-900 rounded-t-3xl sm:rounded-2xl border border-neutral-800 p-6 pb-8 sm:p-8 z-10"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          >
            {/* Handle (mobile) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-9 h-1 bg-neutral-700 rounded-full sm:hidden" />

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-semibold text-neutral-100">{title}</h2>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-colors duration-150"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
