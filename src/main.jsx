import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import 'aos/dist/aos.css';
import VerifyPage from './pages/VerifyPage.jsx'
import MainPage from './pages/MainPage.jsx'
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'
import PrivateRoute from './components/GeneralComponents/PrivateRoute.jsx'
import axios from 'axios'
import './index.css'


axios.defaults.baseURL = 'https://financepork.site/api';
axios.defaults.withCredentials = true; // Configuração global para enviar cookies


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
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