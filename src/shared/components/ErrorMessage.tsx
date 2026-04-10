import { WarningCircleIcon } from '@phosphor-icons/react'

interface Props {
  title?: string
  description?: string
  onRetry?: () => void
}

export default function ErrorMessage({
  title = 'Algo deu errado',
  description = 'Não foi possível carregar os dados. Tente novamente.',
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-12 h-12 rounded-2xl bg-red-400/10 flex items-center justify-center mb-4">
        <WarningCircleIcon size={24} className="text-red-400" weight="duotone" />
      </div>
      <p className="text-sm font-semibold text-neutral-200">{title}</p>
      <p className="text-xs text-neutral-500 mt-1 max-w-xs">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="cursor-pointer mt-5 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-neutral-300 transition-colors duration-150"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
