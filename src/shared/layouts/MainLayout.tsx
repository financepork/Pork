import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import NavDock from './NavDock'

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-dvh bg-[#0a0a0a]">
      <main className="relative min-h-dvh">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.12, ease: 'linear' }}
          className="min-h-dvh"
        >
          <Outlet />
        </motion.div>
      </main>

      <NavDock />
    </div>
  )
}
