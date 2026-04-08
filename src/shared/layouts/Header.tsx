import { useLocation } from 'react-router-dom'

const TITLES: Record<string, string> = {
  '/dashboard/home':     'Início',
  '/dashboard/expenses': 'Gastos',
  '/dashboard/goals':    'Metas',
  '/dashboard/profile':  'Perfil',
}

export default function Header() {
  const { pathname } = useLocation()
  const title = TITLES[pathname] ?? 'Pork'

  return (
    <header className="lg:hidden sticky top-0 z-20 flex items-center h-14 px-5 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/40">
      <img src="/icon.png" alt="Pork" className="w-6 h-6 opacity-80 mr-2.5" />
      <span className="text-sm font-semibold text-neutral-100">{title}</span>
    </header>
  )
}
