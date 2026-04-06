import type { Expense, CreateExpenseData } from '../types/expense'

let mockExpenses: Expense[] = [
  { id: '1',  title: 'Aluguel',        category: 'moradia',     amount: 1500.00, date: '2026-04-01' },
  { id: '2',  title: 'Farmácia',       category: 'saude',       amount: 67.20,  date: '2026-04-02' },
  { id: '3',  title: 'Cinema',         category: 'lazer',       amount: 48.00,  date: '2026-04-03' },
  { id: '4',  title: 'Supermercado',   category: 'alimentacao', amount: 234.80, date: '2026-04-04' },
  { id: '5',  title: '99Pop',          category: 'transporte',  amount: 18.50,  date: '2026-04-04' },
  { id: '6',  title: 'iFood',          category: 'alimentacao', amount: 52.90,  date: '2026-04-05' },
  { id: '7',  title: 'Udemy',          category: 'educacao',    amount: 27.90,  date: '2026-03-30' },
  { id: '8',  title: 'Spotify',        category: 'lazer',       amount: 21.90,  date: '2026-03-28' },
  { id: '9',  title: 'Uber',           category: 'transporte',  amount: 32.00,  date: '2026-03-27' },
  { id: '10', title: 'Padaria',        category: 'alimentacao', amount: 18.40,  date: '2026-03-26' },
  { id: '11', title: 'Mercado Extra',  category: 'alimentacao', amount: 198.60, date: '2026-03-24' },
  { id: '12', title: 'Netflix',        category: 'lazer',       amount: 55.90,  date: '2026-03-20' },
  { id: '13', title: 'Aluguel',        category: 'moradia',     amount: 1500.00, date: '2026-03-01' },
  { id: '14', title: 'Academia',       category: 'saude',       amount: 89.90,  date: '2026-03-05' },
  { id: '15', title: 'Lanche',         category: 'alimentacao', amount: 34.00,  date: '2026-03-15' },
]

let nextId = 16

export async function findAllExpensesService(year: number, month: number): Promise<Expense[]> {
  const prefix = `${year}-${String(month).padStart(2, '0')}`
  return mockExpenses
    .filter(e => e.date.startsWith(prefix))
    .sort((a, b) => b.date.localeCompare(a.date))
}

export async function findRecentExpensesService(limit = 4): Promise<Expense[]> {
  return [...mockExpenses]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit)
}

export async function createExpenseService(data: CreateExpenseData): Promise<Expense> {
  const expense: Expense = { id: String(nextId++), ...data }
  mockExpenses = [expense, ...mockExpenses]
  return expense
}

export async function deleteExpenseService(id: string): Promise<void> {
  mockExpenses = mockExpenses.filter(e => e.id !== id)
}
