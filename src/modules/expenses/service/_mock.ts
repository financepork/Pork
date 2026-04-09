import type { Expense } from '../types/expense'

export let mockExpenses: Expense[] = [
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

export function addMockExpense(expense: Expense) {
  mockExpenses = [expense, ...mockExpenses]
}

export function removeMockExpense(id: string) {
  mockExpenses = mockExpenses.filter(e => e.id !== id)
}

export function updateMockExpense(id: string, data: Partial<Expense>) {
  mockExpenses = mockExpenses.map(e => e.id === id ? { ...e, ...data } : e)
  return mockExpenses.find(e => e.id === id)!
}

export function nextMockId() {
  return String(nextId++)
}
