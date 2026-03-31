import { Link } from 'react-router-dom'
import { GithubLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react'

export default function LandingFooter() {
  return (
    <footer className="border-t border-neutral-800/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-start">

          {/* Brand + tagline */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="w-fit">
              <img src="/icon.png" alt="Pork" className="w-24 h-24 object-contain opacity-80 hover:opacity-100 transition-opacity duration-200" />
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-[20ch]">
              Controle financeiro simples, direto e gratuito.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.18em] mb-1">Navegação</p>
            {[
              { label: 'Funcionalidades', href: '#features' },
              { label: 'Como funciona', href: '#how-it-works' },
              { label: 'Entrar', href: '/login', isLink: true },
              { label: 'Criar conta', href: '/register', isLink: true },
            ].map(({ label, href, isLink }) =>
              isLink ? (
                <Link key={label} to={href} className="text-sm text-neutral-600 hover:text-neutral-300 transition-colors duration-200 w-fit">
                  {label}
                </Link>
              ) : (
                <a key={label} href={href} className="text-sm text-neutral-600 hover:text-neutral-300 transition-colors duration-200 w-fit">
                  {label}
                </a>
              )
            )}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.18em]">Redes sociais</p>
            <div className="flex items-center gap-2">
              {[
                { icon: GithubLogo, href: 'https://github.com/Dev-Soares' },
                { icon: LinkedinLogo, href: '#' },
                { icon: InstagramLogo, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800/60 flex items-center justify-center text-neutral-500 hover:text-neutral-200 hover:border-neutral-700 transition-all duration-200"
                >
                  <Icon size={16} weight="bold" />
                </a>
              ))}
            </div>
            <p className="text-xs text-neutral-700">Disponível para feedbacks e sugestões</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-800/30 flex items-center justify-between">
          <p className="text-xs text-neutral-700">© 2025 Bernardo Soares</p>
          <p className="text-xs text-neutral-800">v0.0.1</p>
        </div>

      </div>
    </footer>
  )
}
