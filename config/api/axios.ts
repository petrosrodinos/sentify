import axios from 'axios'
import { API_URL } from '@/config/api/routes'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {

    return config;
});

export default axiosInstance 