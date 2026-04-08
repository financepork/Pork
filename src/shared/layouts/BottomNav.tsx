import { NavLink } from 'react-router-dom'
import { House, CurrencyDollar, Target, User } from '@phosphor-icons/react'

const NAV_ITEMS = [
  { to: '/dashboard/home',     label: 'Início',  Icon: House          },
  { to: '/dashboard/expenses', label: 'Gastos',  Icon: CurrencyDollar },
  { to: '/dashboard/goals',    label: 'Metas',   Icon: Target         },
  { to: '/dashboard/profile',  label: 'Perfil',  Icon: User           },
]

export default function BottomNav() {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800/60 flex">
      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex-1 flex flex-col items-center gap-1 py-3 transition-colors duration-150
            ${isActive ? 'text-brand' : 'text-neutral-500'}`
          }
        >
          {({ isActive }) => (
            <>
              <Icon size={22} weight={isActive ? 'fill' : 'regular'} />
              <span className="text-[10px] font-medium">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
