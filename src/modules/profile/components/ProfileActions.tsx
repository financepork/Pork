import { motion } from 'framer-motion'
import { SignOutIcon } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'

interface Props {
  onLogout: () => void
}

export default function ProfileActions({ onLogout }: Props) {
  return (
    <motion.div variants={fadeUp}>
      <button
        onClick={onLogout}
        className="cursor-pointer w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-neutral-900 border border-neutral-800/60 hover:bg-neutral-800/60 transition-colors duration-150 text-left group"
      >
        <div className="w-8 h-8 rounded-lg bg-neutral-800 group-hover:bg-neutral-700 flex items-center justify-center shrink-0 transition-colors duration-150">
          <SignOutIcon size={16} className="text-neutral-400" weight="duotone" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-neutral-100">Sair da conta</p>
          <p className="text-xs text-neutral-600 mt-0.5">Encerrar sessão atual</p>
        </div>
      </button>
    </motion.div>
  )
}
