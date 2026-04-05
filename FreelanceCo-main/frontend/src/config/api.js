export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://freelanceco-n2ub.onrender.com';

export const getApiUrl = (endpoint) => {
    const base = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
    const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    return `${base}${path}`;
};
