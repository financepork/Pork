import { createContext, useState, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

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
    
      useEffect(() => {

        if (isLoading) {
          loadingMessage()
        } else {
          Swal.getPopup() && Swal.getPopup().classList.contains('custom-swal') ? Swal.close() : ''
        }
    
      }, [isLoading])

    const authProcess = async () => {
        
        setIsLoading(true)

        try {
            await axios.get('/usuario/info', {
                withCredentials: true
            })
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
            navigate('/login')
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {

        authProcess();

    }, [])

    if(isLoading) {
        return null 
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );


}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Falha na Autenticação");
    }
    return context;
};