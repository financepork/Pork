import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading, authProcess } = useAuth();
    const location = useLocation();

    useEffect(() => {
        authProcess();
    }, []);


    // Enquanto está carregando, não renderiza nada (ou pode renderizar um loading)
    if (isLoading) {
        return null; // ou um componente de loading
    }

    if (!isAuthenticated) {
        return <Navigate to="/fazer-login" replace state={{ from: location }} />
    }

    return children;
}

export default PrivateRoute;