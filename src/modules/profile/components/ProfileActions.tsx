import { motion } from 'framer-motion'
import { CaretRight, Lock, Bell, SignOut, Trash } from '@phosphor-icons/react'
import { fadeUp, stagger } from '@/lib/animations'
import type { ReactNode } from 'react'

interface ActionItem {
  icon: ReactNode
  label: string
  onClick: () => void
  danger?: boolean
  description?: string
}

interface ActionGroup {
  title: string
  items: ActionItem[]
}

interface Props {
  onLogout: () => void
  onDeleteAccount: () => void
}

export default function ProfileActions({ onLogout, onDeleteAccount }: Props) {
  const groups: ActionGroup[] = [
    {
      title: 'Preferências',
      items: [
        {
          icon: <Lock size={16} weight="duotone" />,
          label: 'Alterar senha',
          description: 'Atualize suas credenciais de acesso',
          onClick: () => {},
        },
        {
          icon: <Bell size={16} weight="duotone" />,
          label: 'Notificações',
          description: 'Gerencie seus alertas',
          onClick: () => {},
        },
      ],
    },
    {
      title: 'Sessão',
      items: [
        {
          icon: <SignOut size={16} weight="duotone" />,
          label: 'Sair da conta',
          onClick: onLogout,
        },
        {
          icon: <Trash size={16} weight="duotone" />,
          label: 'Excluir conta',
          description: 'Ação permanente e irreversível',
          onClick: onDeleteAccount,
          danger: true,
        },
      ],
    },
  ]

  return (
    <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-5">
      {groups.map(group => (
        <motion.div key={group.title} variants={fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-2 px-1">
            {group.title}
          </p>
          <div className="rounded-2xl border border-neutral-800/60 overflow-hidden divide-y divide-neutral-800/60">
            {group.items.map(item => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={`cursor-pointer w-full flex items-center gap-3 px-4 py-3.5 transition-colors duration-150 text-left
                  ${item.danger
                    ? 'bg-neutral-900 hover:bg-red-400/5 text-red-400'
                    : 'bg-neutral-900 hover:bg-neutral-800/60 text-neutral-100'
                  }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  item.danger ? 'bg-red-400/10' : 'bg-neutral-800'
                }`}>
                  <span className={item.danger ? 'text-red-400' : 'text-neutral-400'}>
                    {item.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium ${item.danger ? 'text-red-400' : 'text-neutral-100'}`}>
                    {item.label}
                  </p>
                  {item.description && (
                    <p className="text-xs text-neutral-600 mt-0.5">{item.description}</p>
                  )}
                </div>
                <CaretRight size={14} className={item.danger ? 'text-red-400/50' : 'text-neutral-600'} />
              </button>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
