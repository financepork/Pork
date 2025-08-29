import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, authProcess } = useAuth();
    const location = useLocation();

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

    if (isLoading) {
        return null; 
    }

    if (!isAuthenticated) {
        return <Navigate to="/fazer-login" replace state={{ from: location }} />;
    }

    return children;
}

export default PrivateRoute;