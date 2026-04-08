import type { AxiosError } from 'axios'

export function forbiddenInterceptor(error: AxiosError) {
  const status = error.response?.status
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  const isAuthPage = path === '/login' || path === '/register' || path === '/'

  if ((status === 401 || status === 403) && !isAuthPage) {
    window.location.href = '/login'
  }

  return Promise.reject(error)
}
