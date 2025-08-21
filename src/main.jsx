import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import 'aos/dist/aos.css';
import VerifyPage from './pages/VerifyPage.jsx'
import MainPage from './pages/MainPage.jsx'
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'
import PrivateRoute from './components/GeneralComponents/PrivateRoute.jsx'
import axios from 'axios'
import './index.css'


axios.defaults.baseURL = 'https://api.financepork.site';
axios.defaults.withCredentials = true; // Configuração global para enviar cookies
const LandingPage = lazy(() => import('./pages/LandingPage.jsx'))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route
            path="/"
            element={
              <Suspense fallback={<div>Carregando...</div>}>
                <LandingPage />
              </Suspense>
            }
          />
        <Route path="/registrar-conta" element={<RegisterPage />} />
        <Route path="/fazer-login" element={<LoginPage />} />
        <Route path="/verificar-email" element={<VerifyPage />} />

        <Route path="/pagina-principal" 
        element={
        <PrivateRoute>
          <MainPage />
        </PrivateRoute>
        
        } />

        <Route path="/redefinir-senha" element={<ChangePasswordPage />} />
      </Routes>
    </AuthProvider>  
    </BrowserRouter>
  </StrictMode>,
)

const loadingMessage = () => {
    Swal.fire({
      title: 'Carregando Dados...',
      text: 'Por favor, aguarde.',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
      customClass: {
        popup: 'custom-swal'
      }
    });
  }