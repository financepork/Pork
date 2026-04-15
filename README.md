# Pork — Frontend

Interface do **Pork**, um app de controle financeiro pessoal. Permite registrar despesas categorizadas, criar metas de economia com depósitos progressivos e acompanhar o resumo financeiro do mês.

Construído com **React 19**, **TypeScript**, **Tailwind CSS v4** e **TanStack Query**.

> A API que alimenta este frontend está em [pork-backend](../pork-backend/).

---

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Rodando o projeto](#rodando-o-projeto)
- [Páginas e funcionalidades](#páginas-e-funcionalidades)
- [Arquitetura frontend](#arquitetura-frontend)

---

## Estrutura do projeto

```
src/
├── api/
│   ├── axios.ts                     # Instância axios configurada
│   └── interceptors/
│       └── forbidden-interceptor.ts # Redireciona ao login em 401/403
│
├── modules/
│   ├── auth/                        # Login, cadastro, logout
│   │   ├── components/              # LoginForm, SignupForm
│   │   ├── hooks/                   # useSignIn, useSignUp, useLogout
│   │   ├── service/                 # signInService, signUpService, logoutService
│   │   ├── schemas/                 # Schemas Zod de validação
│   │   └── types/
│   ├── expenses/                    # Despesas
│   │   ├── components/              # ExpenseList, ExpenseItem, AddExpenseSheet, ExpenseCharts
│   │   ├── hooks/                   # useFindAllExpenses, useCreateExpense, useUpdateExpense, useDeleteExpense
│   │   └── ...
│   ├── goals/                       # Metas de economia
│   │   ├── components/              # GoalCard, GoalsOverview, AddGoalSheet, DepositSheet
│   │   ├── hooks/                   # useFindAllGoals, useCreateGoal, useDepositGoal, ...
│   │   └── ...
│   ├── home/                        # Dashboard/Home
│   │   └── components/              # BalanceCard, RecentExpenses, ActiveGoals, QuickActions
│   ├── landing/                     # Página de apresentação
│   └── profile/                     # Perfil e dados financeiros do usuário
│       └── components/              # ProfileStats, EditFinancialsSheet, ProfileActions
│
├── shared/
│   ├── components/                  # Input, Toast, Sheet, Spinner, ToggleTheme, ...
│   ├── contexts/                    # userContext, themeContext
│   ├── hooks/                       # useFindMe, useNavigateTo
│   ├── layouts/                     # MainLayout, Header, Sidebar, BottomNav, NavDock
│   └── utils/                       # currency.ts, date.ts, scrollToTop.ts
│
└── pages/
    ├── LandingPage.tsx
    ├── LoginPage.tsx
    ├── SignupPage.tsx
    ├── HomePage.tsx
    ├── ExpensesPage.tsx
    ├── GoalsPage.tsx
    └── ProfilePage.tsx
```

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| React 19 | UI |
| TypeScript | Tipagem |
| Tailwind CSS v4 | Estilização |
| TanStack Query v5 | Cache e server state |
| React Hook Form v7 + Zod v4 | Formulários com validação |
| Framer Motion | Animações |
| Axios | HTTP client |
| React Hot Toast | Notificações |
| Phosphor Icons | Ícones |
| React Router v7 | Roteamento |

---

## Pré-requisitos

- Node.js >= 20
- npm ou pnpm
- [pork-backend](../pork-backend/) rodando

---

## Instalação

```bash
git clone <url-do-repositorio>
cd Pork
npm install
# ou
pnpm install
```

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# URL base da API (pork-backend)
VITE_API_URL=http://localhost:3333
```

> Ajuste a porta conforme a `PORT` configurada no backend.

---

## Rodando o projeto

> **Antes de iniciar o frontend**, certifique-se de que o [pork-backend](../pork-backend/) está rodando e acessível na URL configurada em `VITE_API_URL`.

```bash
# Desenvolvimento
npm run dev
# ou
pnpm dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

O frontend sobe em `http://localhost:5173`.

---

## Páginas e funcionalidades

| Página | Rota | Descrição |
|---|---|---|
| Landing | `/` | Apresentação do app (pública) |
| Login | `/login` | Autenticação via email e senha |
| Cadastro | `/signup` | Criação de conta com dados financeiros |
| Home | `/home` | Dashboard: saldo, despesas recentes e metas ativas |
| Despesas | `/expenses` | Lista completa de despesas com filtro por categoria e mês |
| Metas | `/goals` | Cards de metas com barra de progresso e opção de depósito |
| Perfil | `/profile` | Dados do usuário, edição financeira e exclusão de conta |

### Funcionalidades principais

- **Despesas** — criação, edição e exclusão com categorias (Alimentação, Transporte, etc.)
- **Filtro por mês** — seletor de mês na tela de despesas
- **Gráficos** — visualização de gastos por categoria (`ExpenseCharts`)
- **Metas** — criação com valor alvo e prazo, depósitos parciais, marcação como concluída
- **Tema** — alternância dark/light mode persistida no localStorage
- **Dados financeiros** — salário, plano de gastos e meta de economia editáveis no perfil

---

## Arquitetura frontend

O projeto segue uma arquitetura modular rígida:

```
Page → Module Hook → Service → api/axios → Backend
              ↓
           shared/
```

- **Pages** — apenas composição e roteamento, sem lógica
- **modules/`<feature>`/** — toda lógica de negócio encapsulada em hooks TanStack Query
- **service/** — funções puras que chamam a API (singular, nunca `services/`)
- **types/** — tipos TypeScript + schemas Zod (nunca `schemas/` separado)
- **skeletons/** — loading states com `animate-pulse` para cada componente assíncrono
- **shared/** — componentes e hooks reutilizáveis em 2+ módulos

Todo estado de servidor usa `useQuery` / `useMutation`. Estado local de UI usa `useState`.
