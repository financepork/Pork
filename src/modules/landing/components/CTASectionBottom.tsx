import { Link } from 'react-router-dom'
import { ArrowRight } from '@phosphor-icons/react'

export default function CTASectionBottom() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">


      {/* Headline — takes up most of the space */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-10 py-4">
        <h2
          className="tracking-tight leading-[0.88]"
          style={{ fontSize: 'clamp(5rem, 13vw, 14rem)', fontWeight: 800, color: '#22c55e' }}
        >
          Seu dinheiro
        </h2>
        <h2
          className="tracking-tight leading-[0.88]"
          style={{
            fontSize: 'clamp(5rem, 13vw, 14rem)',
            fontWeight: 800,
            color: 'rgba(34,197,94,0.54)',
          }}
        >
          merece respeito.
        </h2>
      </div>

      {/* CTA block — generous space */}
      <div
        className="px-8 lg:px-10 py-14 border-t flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        style={{ borderColor: 'rgba(34,197,94,0.25)', background: '#22c55e' }}
      >
        <div className="flex flex-col gap-3">
          <p className="font-bold" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#0a0a0a', lineHeight: 1.2 }}>
            Registre, planeje e cresça.<br />De graça, para sempre.
          </p>
          <p className="text-sm" style={{ color: 'rgba(0,0,0,0.65)' }}>
            Sem cartão. Sem compromisso. Só resultado.
          </p>
        </div>

        <Link
          to="/register"
          className="group inline-flex items-center gap-3 font-bold px-10 py-5 rounded-2xl text-base transition-all duration-200 active:scale-95 whitespace-nowrap shrink-0"
          style={{
            background: '#0a0a0a',
            color: '#22c55e',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
          }}
        >
          Criar conta grátis
          <ArrowRight weight="bold" size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

    </section>
  )
}
