import axios from "axios";

// instancia do axios, usada para configurar a API com mais organizacao e seguranca
const apiClient = axios.create({
    baseURL: 'http://financepork.site/api',
    withCredentials: true 
})

export default apiClient