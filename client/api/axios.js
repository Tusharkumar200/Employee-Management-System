import axios from 'axios'

const baseURL = (import.meta.env.VITE_BASE_URL || "http://localhost:4000").replace(/\/+$|\s+$/g, "")
const api = axios.create({
    baseURL: `${baseURL}/api`
})

// Attach Auth token to all network requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export default api;