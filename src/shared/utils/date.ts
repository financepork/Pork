export function formatRelativeDate(dateStr: string): string {
  const date = new Date(dateStr.slice(0, 10) + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.getTime() === today.getTime()) return 'hoje'
  if (date.getTime() === yesterday.getTime()) return 'ontem'

  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

export function formatMonthYear(year: number, month: number): string {
  const date = new Date(year, month - 1)
  return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })
}

export function formatFullDate(dateStr: string): string {
  const date = new Date(dateStr.slice(0, 10) + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
}

export function formatShortDate(dateStr: string): string {
  const date = new Date(dateStr.slice(0, 10) + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
}

export function formatDeadline(dateStr: string): string {
  const date = new Date(dateStr.slice(0, 10) + 'T00:00:00')
  return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })
}

export function getCurrentMonthYear(): { month: number; year: number } {
  const now = new Date()
  return { month: now.getMonth() + 1, year: now.getFullYear() }
}

export function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
}
