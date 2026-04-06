import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Sheet from '@/shared/components/Sheet'
import type { CreateGoalData } from '../types/goal'

interface Props {
  isOpen: boolean
  onClose: () => void
  onAdd: (data: CreateGoalData) => Promise<void>
}

const EMOJIS = ['🎯', '✈️', '🏠', '📱', '🚗', '📚', '💻', '🎸', '🏋️', '🛡️', '💍', '🌴']

export default function AddGoalSheet({ isOpen, onClose, onAdd }: Props) {
  const [selectedEmoji, setSelectedEmoji] = useState('🎯')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<{
    title: string
    targetAmount: string
    deadline?: string
  }>()

  const submit = async (data: { title: string; targetAmount: string; deadline?: string }) => {
    await onAdd({
      title: data.title,
      targetAmount: parseFloat(data.targetAmount.replace(',', '.')),
      deadline: data.deadline || undefined,
      emoji: selectedEmoji,
    })
    reset()
    setSelectedEmoji('🎯')
  }

  const handleClose = () => {
    reset()
    setSelectedEmoji('🎯')
    onClose()
  }

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title="Nova meta">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        {/* Emoji picker */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2.5">
            Ícone
          </label>
          <div className="flex flex-wrap gap-2">
            {EMOJIS.map(emoji => (
              <button
                key={emoji}
                type="button"
                onClick={() => setSelectedEmoji(emoji)}
                className={`cursor-pointer w-9 h-9 rounded-xl text-lg flex items-center justify-center transition-all duration-150
                  ${selectedEmoji === emoji
                    ? 'bg-brand/20 border border-brand/40 scale-110'
                    : 'bg-neutral-800 border border-neutral-700 hover:bg-neutral-700'
                  }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Objetivo
          </label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Ex: Viagem para Paris…"
            className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
            {...register('title', { required: 'Informe um objetivo' })}
          />
          {errors.title && <p className="text-xs text-red-400 mt-1">{errors.title.message}</p>}
        </div>

        {/* Amount + deadline */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Valor alvo (R$)
            </label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0,00"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 placeholder:text-neutral-700"
              {...register('targetAmount', {
                required: 'Informe o valor',
                pattern: { value: /^\d+([,\.]\d{1,2})?$/, message: 'Valor inválido' },
              })}
            />
            {errors.targetAmount && <p className="text-xs text-red-400 mt-1">{errors.targetAmount.message}</p>}
          </div>

          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-widest text-neutral-500 mb-2">
              Prazo (opcional)
            </label>
            <input
              type="date"
              className="w-full bg-transparent text-neutral-100 text-sm pb-2 border-b border-neutral-700 focus:border-brand outline-none transition-colors duration-200 [color-scheme:dark]"
              {...register('deadline')}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-light active:scale-[0.97] text-neutral-950 font-semibold py-3.5 rounded-xl text-sm transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer mt-1"
        >
          {isSubmitting
            ? <span className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
            : 'Criar meta'
          }
        </button>
      </form>
    </Sheet>
  )
}
