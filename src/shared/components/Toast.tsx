import toast, { type Toast as ToastType } from 'react-hot-toast'
import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  XCircleIcon,
  WarningIcon,
  InfoIcon,
  XIcon,
} from '@phosphor-icons/react'

type ToastVariant = 'success' | 'error' | 'warning' | 'info'

interface CustomToastProps {
  t: ToastType
  variant: ToastVariant
  title: string
  description?: string
}

const variantConfig: Record<
  ToastVariant,
  {
    icon: typeof CheckCircleIcon
    accent: string
    iconBg: string
    iconColor: string
    barColor: string
  }
> = {
  success: {
    icon: CheckCircleIcon,
    accent: 'border-brand/30',
    iconBg: 'bg-brand/15',
    iconColor: 'text-brand',
    barColor: 'bg-brand',
  },
  error: {
    icon: XCircleIcon,
    accent: 'border-red-500/30',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
    barColor: 'bg-red-500',
  },
  warning: {
    icon: WarningIcon,
    accent: 'border-amber-500/30',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    barColor: 'bg-amber-500',
  },
  info: {
    icon: InfoIcon,
    accent: 'border-sky-500/30',
    iconBg: 'bg-sky-500/15',
    iconColor: 'text-sky-400',
    barColor: 'bg-sky-500',
  },
}

function CustomToast({ t, variant, title, description }: CustomToastProps) {
  const config = variantConfig[variant]
  const Icon = config.icon
  const duration = t.duration ?? 4000

  return (
    <motion.div
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{
        opacity: t.visible ? 1 : 0,
        y: t.visible ? 0 : -16,
        scale: t.visible ? 1 : 0.96,
      }}
      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
      className={`relative flex w-85 max-w-[calc(100vw-2rem)] items-start gap-3 overflow-hidden rounded-2xl border ${config.accent} bg-neutral-900/95 p-4 pr-10 shadow-2xl shadow-black/40 backdrop-blur-xl`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${config.iconBg}`}
      >
        <Icon size={20} weight="fill" className={config.iconColor} />
      </div>

      <div className="flex-1 pt-0.5">
        <p className="text-sm font-semibold leading-tight text-neutral-50">
          {title}
        </p>
        {description && (
          <p className="mt-1 text-xs leading-relaxed text-neutral-400">
            {description}
          </p>
        )}
      </div>

      <button
        onClick={() => toast.dismiss(t.id)}
        className="absolute right-3 top-3 rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-200"
        aria-label="Fechar"
      >
        <XIcon size={14} weight="bold" />
      </button>

      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: duration / 1000, ease: 'linear' }}
        className={`absolute bottom-0 left-0 h-0.5 ${config.barColor}`}
      />
    </motion.div>
  )
}

interface NotifyOptions {
  description?: string
  duration?: number
}

function notify(
  variant: ToastVariant,
  title: string,
  options?: NotifyOptions,
) {
  return toast.custom(
    (t) => (
      <CustomToast
        t={t}
        variant={variant}
        title={title}
        description={options?.description}
      />
    ),
    { duration: options?.duration ?? 4000 },
  )
}

export const showToast = {
  success: (title: string, options?: NotifyOptions) =>
    notify('success', title, options),
  error: (title: string, options?: NotifyOptions) =>
    notify('error', title, options),
  warning: (title: string, options?: NotifyOptions) =>
    notify('warning', title, options),
  info: (title: string, options?: NotifyOptions) =>
    notify('info', title, options),
  dismiss: toast.dismiss,
}
