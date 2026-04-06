import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import NavDock from './NavDock'

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-dvh bg-[#0a0a0a]">
      <main className="min-h-dvh overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="min-h-dvh"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <NavDock />
    </div>
  )
}
