import { NavLink } from 'react-router-dom'
import { House, CurrencyDollar, Target, User } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { to: '/main-page/home',     label: 'Início',  Icon: House          },
  { to: '/main-page/expenses', label: 'Gastos',  Icon: CurrencyDollar },
  { to: '/main-page/goals',    label: 'Metas',   Icon: Target         },
  { to: '/main-page/profile',  label: 'Perfil',  Icon: User           },
]

export default function NavDock() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="flex items-center gap-1.5 p-2 rounded-2xl"
        style={{
          background: 'rgba(18, 18, 18, 0.92)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.04) inset',
        }}
      >
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <motion.div
                layout
                className="relative flex items-center gap-2.5 px-5 py-3 rounded-xl cursor-pointer select-none"
                style={{
                  background: isActive ? 'rgba(255,255,255,0.07)' : 'transparent',
                  transition: 'background 150ms',
                }}
              >
                <Icon
                  size={22}
                  weight={isActive ? 'fill' : 'regular'}
                  style={{
                    color: isActive ? '#22c55e' : 'rgba(255,255,255,0.35)',
                    transition: 'color 150ms',
                  }}
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="label"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="text-sm font-semibold text-neutral-100 overflow-hidden whitespace-nowrap"
                    >
                      {label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
