import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isLoading, setIsLoading] = useState(true); 

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

    useEffect(() => {
        authProcess();
    }, []);

    const authProcess = async () => {

        setIsLoading(true)

        try {
            await axios.get('/usuario/info', {
                withCredentials: true
            })
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
            setIsAuthenticated(false)
        } finally {
            setIsLoading(false)
        }

    }

    const login = async (email, senha) => {
        const dataUser = {
            "email": email,
            "senha": senha
        }
        try {
            await axios.post('/auth/login', dataUser, {
                withCredentials: true
            });
            setIsAuthenticated(true);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.response?.data };
        }
    }

    const logout = async () => {
        try {
            await axios.post('/auth/logout', {
                withCredentials: true
            });
            setIsAuthenticated(false);
            return { success: true };
        } catch (error) {
            console.log('Erro no logout:', error);
            // Mesmo com erro, limpa o estado local
            setIsAuthenticated(false);
            return { success: false, error: error.response?.data };
        }
    }

    

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            isLoading,
            login,
            logout,
            authProcess
        }}>
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