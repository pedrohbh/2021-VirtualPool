import { createContext, ReactNode } from "react"

AuthContextData = {
    user: {
        id,   
        nome,  
        vitorias,
        derrotas,
        email,   
        picture 
    } | null,
    signInUrl,
}

const AuthContext = createContext({})

AuthProvider = {
    children
}

export function AuthProvider(props) {
    return (
        <AuthContext.Provider value={{}}>
            {props.children}
        </AuthContext.Provider> 
    );
}