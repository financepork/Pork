import { NavLink } from 'react-router-dom'
import { House, CurrencyDollar, Target, User } from '@phosphor-icons/react'
import { useUser } from '@/shared/contexts/userContext'

const NAV_ITEMS = [
  { to: '/main-page/home',     label: 'Início',  Icon: House          },
  { to: '/main-page/expenses', label: 'Gastos',  Icon: CurrencyDollar },
  { to: '/main-page/goals',    label: 'Metas',   Icon: Target         },
  { to: '/main-page/profile',  label: 'Perfil',  Icon: User           },
]

export default function Sidebar() {
  const { user } = useUser()

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-full w-56 z-30"
      style={{ background: '#0d0d0d', borderRight: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Brand */}
      <div className="px-6 pt-8 pb-10">
        <div className="flex items-center gap-2.5">
          <img src="/icon.png" alt="Pork" className="w-7 h-7" style={{ opacity: 0.85 }} />
          <span className="font-brand font-black text-xl text-neutral-50 tracking-tighter leading-none">
            pork
          </span>
        </div>
        {user && (
          <p className="text-[11px] text-neutral-600 mt-2.5 font-medium tracking-wide">
            Olá, {user.name.split(' ')[0]}
          </p>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-1">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150
              ${isActive
                ? 'text-neutral-50'
                : 'text-neutral-600 hover:text-neutral-300'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active indicator — left dot */}
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full transition-all duration-200"
                  style={{
                    background: isActive ? '#22c55e' : 'transparent',
                    marginLeft: '-1px',
                  }}
                />

                <Icon
                  size={18}
                  weight={isActive ? 'fill' : 'regular'}
                  style={{ color: isActive ? '#22c55e' : 'inherit' }}
                />

                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User — bottom, minimal */}
      {user && (
        <div className="px-5 py-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-bold"
              style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e' }}
            >
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-neutral-300 truncate leading-tight">
                {user.name.split(' ')[0]}
              </p>
              <p className="text-[10px] text-neutral-600 truncate leading-tight mt-0.5">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
