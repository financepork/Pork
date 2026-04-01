import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { List, X, ArrowRight } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Funcionalidades', sub: 'Controle, metas e dashboard', href: 'features' },
  { label: 'Como funciona', sub: 'Simples em 3 passos', href: 'how-it-works' },
  { label: 'Por que planejar?', sub: 'Dados reais sobre finanças', href: 'data-insights' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function LandingNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: hidden && !menuOpen ? 0 : 1, y: hidden && !menuOpen ? -100 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-20 sm:h-20 lg:h-24 grid grid-cols-2 md:grid-cols-3 items-center">

        {/* Left — logo */}
        <Link to="/" className="flex items-center gap-3 w-fit group">
          <img
            src="/icon.png"
            alt="Pork"
            className="w-14 h-14 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        </Link>

        {/* Center — nav pill */}
        <nav className="hidden md:flex justify-center">
          <div
            className="p-px rounded-full"
            style={{ background: 'rgba(34,197,94,0.30)' }}
          >
            <div className="flex items-center gap-0.5 bg-neutral-950/90 backdrop-blur-md rounded-full px-2 py-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative whitespace-nowrap text-[13px] text-neutral-400 hover:text-neutral-100 transition-all duration-200 px-5 py-2 rounded-full overflow-hidden group/link"
                >
                  <span className="absolute inset-0 bg-neutral-700/0 group-hover/link:bg-neutral-700/50 rounded-full transition-all duration-200 scale-75 group-hover/link:scale-100" />
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Right — CTAs */}
        <div className="hidden md:flex items-center justify-end gap-3">
          <Link
            to="/login"
            className="relative text-[13px] font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200 px-4 py-2 group/entrar"
          >
            <span>Entrar</span>
            <span className="absolute bottom-1.5 left-4 right-4 h-px bg-brand scale-x-0 group-hover/entrar:scale-x-100 transition-transform duration-250 origin-left" />
          </Link>

          <Link
            to="/register"
            className="text-[13px] font-semibold bg-brand text-neutral-950 px-6 py-2.5 rounded-full
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
            {menuOpen ? <X size={28} weight="bold" className="text-neutral-100" /> : <List size={28} weight="bold" className="text-neutral-100" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-neutral-950/98 backdrop-blur-xl" />

            {/* Decorative glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 80% 20%, rgba(34,197,94,0.08) 0%, transparent 50%)',
              }}
            />

            {/* Nav items */}
            <div className="relative flex-1 flex flex-col justify-center px-8 gap-0">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => { setMenuOpen(false); setTimeout(() => scrollTo(link.href), 300) }}
                  className="flex items-center justify-between py-5 border-b border-neutral-800/40 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-neutral-100 tracking-tight">
                      {link.label}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {link.sub}
                    </span>
                  </div>
                  <ArrowRight weight="bold" size={18} className="text-brand/40" />
                </motion.button>
              ))}
            </div>

            {/* Bottom CTA area */}
            <motion.div
              className="relative px-8 pb-12 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.35, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-px bg-neutral-800/50 mb-2" />

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-center gap-3 bg-brand hover:bg-brand-light text-neutral-950 font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] active:scale-[0.98]"
              >
                Criar conta grátis
                <ArrowRight weight="bold" size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-100 transition-colors py-2 text-center"
              >
                Já tem conta? <span className="text-brand">Entrar</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
