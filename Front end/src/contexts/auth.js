import { createContext, useState } from "react"
import { useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const signInUrl = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3000&client_id=218639380376-73spmg3ifncg0evje558kla6tb7jbqk4.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email';

    async function signIn(googleCode) {
        const response = await api.post('/authenticate', {
            code: googleCode
        });

        const { token, jogador } = response.data;

        localStorage.setItem('@virtualpool:token', token);

        setUser(jogador);
    };

    function signOut(){
        setUser(null);
        localStorage.removeItem('@virtualpool:token');
    }

    useEffect(() => {
        const token = localStorage.getItem('@virtualpool:token');

        if(token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            api.get('perfil').then(response => {
                setUser(response.data.user)
            })
        }
    }, [])

    useEffect(() =>{
        const url = window.location.href;
        const hasGoogleCode = url.includes('?code=');
        
        if(hasGoogleCode){
            const [urlWithNoCode, afterCode] = url.split('?code=');
            const [code,] = afterCode.split('&');

            window.history.pushState({}, '', urlWithNoCode)
            signIn(code);
        }
       
    }, []);

    return (
        <AuthContext.Provider value={{ signInUrl, user, signOut}}>
            {props.children}
        </AuthContext.Provider> 
    );
}