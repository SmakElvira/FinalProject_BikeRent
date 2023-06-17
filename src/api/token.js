const namespace = 'auth-token';

export const getToken = () => {
    return localStorage.getItem(namespace);
};

export const setToken = (token) => {
    return localStorage.setItem(namespace, token);
};

export const removeToken = () => {
    return localStorage.removeItem(namespace);
};