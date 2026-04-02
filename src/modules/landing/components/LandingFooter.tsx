import { Link } from 'react-router-dom'
import { GithubLogo, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'

const footerLinks = [
  { label: 'Funcionalidades', id: 'features' },
  { label: 'Como funciona', id: 'how-it-works' },
  { label: 'Por que planejar?', id: 'data-insights' },
]

const socials = [
  { icon: GithubLogo, href: 'https://github.com/Dev-Soares', label: 'GitHub' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function LandingFooter() {
  return (
    <motion.footer
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={stagger}
    >
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px"
        style={{
          width: '600px',
          background: 'linear-gradient(90deg, transparent, rgba(34,197,94,0.3), transparent)',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-16 sm:pt-20 pb-8">

        {/* Top — large brand statement + socials */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-neutral-800/30"
          variants={fadeUp}
        >
          <div className="flex flex-col gap-4">
            <Link to="/" className="w-fit">
              <img
                src="/icon.png"
                alt="Pork"
                className="cursor-pointer w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p
              className="text-neutral-100 font-medium leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', maxWidth: '26ch' }}
            >
              Seu dinheiro no controle.
              <br />
              <span className="text-neutral-100/90">Simples, direto e gratuito.</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer flex items-center gap-2.5 px-5 py-3 rounded-full bg-neutral-900/80 border border-neutral-800/50 hover:border-neutral-700 transition-all duration-200"
              >
                <Icon size={20} weight="bold" className="text-neutral-100/90 group-hover:text-white transition-colors" />
                <span className="text-sm text-neutral-100/90 group-hover:text-white transition-colors">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Middle — nav + CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between gap-8 py-10 sm:py-12"
          variants={fadeUp}
        >
          {/* Nav */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="group cursor-pointer flex items-center gap-1.5 text-sm text-neutral-100/90 hover:text-white transition-colors duration-200"
              >
                {label}
                <ArrowUpRight size={12} weight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand" />
              </button>
            ))}
          </div>

          {/* CTA pills */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="cursor-pointer text-xs text-neutral-100/90 hover:text-white transition-colors duration-200 px-4 py-2"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="cursor-pointer text-xs font-semibold bg-brand/10 text-brand border border-brand/20 hover:bg-brand/20 px-5 py-2 rounded-full transition-all duration-200"
            >
              Criar conta
            </Link>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="pt-6 border-t border-neutral-800/20 flex flex-col sm:flex-row items-center justify-between gap-3"
          variants={fadeUp}
        >
          <p className="text-[11px] text-neutral-100/80">
            © 2025 Bernardo Soares & João Vitor Chaves
          </p>
          <p className="text-[11px] text-neutral-100/70 font-mono">v0.0.1</p>
        </motion.div>

      </div>
    </motion.footer>
  )
}
