import { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, X } from '@phosphor-icons/react'

const navLinks = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Planos', href: '#plans' },
]

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-10 h-24 grid grid-cols-3 items-center">

        {/* Left — logo + name */}
        <Link to="/" className="flex items-center gap-3 w-fit group">
          <img
            src="/icon.png"
            alt="Pork"
            className="w-14 h-14 object-contain transition-transform duration-200 group-hover:scale-110"
          />
          
        </Link>

        {/* Center — nav pill */}
        <nav className="hidden md:flex justify-center">
          <div
            className="p-px rounded-full"
            style={{ background: 'rgba(34,197,94,0.35)' }}
          >
          <div className="flex items-center gap-1 bg-neutral-950/90 rounded-full px-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-neutral-400 hover:text-neutral-100 transition-all duration-200 px-4 py-1.5 rounded-full overflow-hidden group/link"
              >
                <span className="absolute inset-0 bg-neutral-700/0 group-hover/link:bg-neutral-700/50 rounded-full transition-all duration-200 scale-75 group-hover/link:scale-100" />
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>
          </div>
        </nav>

        {/* Right — CTAs */}
        <div className="hidden md:flex items-center justify-end gap-2">
          {/* Entrar — underline slide-in */}
          <Link
            to="/login"
            className="relative text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200 px-4 py-2 group/entrar"
          >
            <span>Entrar</span>
            <span className="absolute bottom-1 left-4 right-4 h-px bg-brand scale-x-0 group-hover/entrar:scale-x-100 transition-transform duration-250 origin-left" />
          </Link>

          {/* Criar conta — glow on hover */}
          <Link
            to="/register"
            className="text-sm font-semibold bg-brand text-neutral-950 px-5 py-2 rounded-full
              transition-all duration-200
              hover:bg-brand-light hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.45)]
              active:scale-95"
          >
            Criar conta
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-end col-start-3">
          <button
            className="text-neutral-400 hover:text-neutral-100 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800/60 bg-neutral-950/95 backdrop-blur-md px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors py-2.5 border-b border-neutral-800/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Link
              to="/login"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors py-2 text-center"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="text-sm font-semibold bg-brand hover:bg-brand-light text-neutral-950 py-2.5 rounded-full text-center transition-all duration-200 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
            >
              Criar conta
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
