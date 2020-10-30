const key = '@uptome-token';
const user = '@uptome-user';

export const sigIn = (token) =>{
    localStorage.setItem(key, token);
}

export const  getTokensigIn = () =>{
    return localStorage.getItem(key);
}

export const logout = () =>{
    localStorage.removeItem(key);
}

export const setUser = (token) =>{
    localStorage.setItem(user, token);
}

export const  getTokenUser = () =>{
    return localStorage.getItem(user);
}