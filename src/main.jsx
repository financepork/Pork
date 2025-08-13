import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import 'aos/dist/aos.css';
import Verified from './pages/Verified.jsx'
import MainPage from './pages/MainPage.jsx'
import ChangePassword from './pages/ChangePassword.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import axios from 'axios'
import './index.css'


axios.defaults.baseURL = 'https://financepork.site/api';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verified />} />

        <Route path="/mainpage" 
        element={
        <PrivateRoute>
          <MainPage />
        </PrivateRoute>
        
        } />

        <Route path="/redefinir-senha" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
