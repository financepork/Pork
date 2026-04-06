import { motion } from 'framer-motion'
import { PencilSimple } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'
import type { User } from '../types/user'

const PROFILE_LABELS = {
  basico: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

interface Props {
  user: User
  onEdit: () => void
}

export default function ProfileHeader({ user, onEdit }: Props) {
  const initials = user.name
    .split(' ')
    .slice(0, 2)
    .map(w => w.charAt(0).toUpperCase())
    .join('')

  return (
    <motion.div variants={fadeUp} className="flex items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-2xl bg-brand/15 border border-brand/25 flex items-center justify-center shrink-0">
        <span className="text-brand text-xl font-bold">{initials}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-semibold text-neutral-50 tracking-tight">{user.name}</h2>
        <p className="text-sm text-neutral-500 truncate">{user.email}</p>
        <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-md bg-brand/10 border border-brand/20 text-xs font-medium text-brand">
          {PROFILE_LABELS[user.savingsProfile]}
        </span>
      </div>

      {/* Edit */}
      <button
        onClick={onEdit}
        className="cursor-pointer w-9 h-9 flex items-center justify-center rounded-xl text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all duration-150 shrink-0"
        aria-label="Editar perfil"
      >
        <PencilSimple size={18} />
      </button>
    </motion.div>
  )
}
