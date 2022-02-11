import Link from 'next/link';
import { useEffect } from 'react';
import { api } from '../../services/api'

import styles from './styles.module.scss';

export function GoogleLogin() {
    const signInUrl = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3000&client_id=218639380376-73spmg3ifncg0evje558kla6tb7jbqk4.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email';

    async function signIn(googleCode) {
        const response = await api.post('/authenticate', {
            code: googleCode
        })

        const { token, jogador } = response.data;

        localStorage.setItem('@virtualpool:token', token);

        console.log(jogador);
    }

    useEffect(() =>{
        const url = window.location.href;
        const hasGoogleCode = url.includes('?code=');
        
        if(hasGoogleCode){
            const [urlWithNoCode, afterCode] = url.split('?code=');
            const [code,] = afterCode.split('&');

            window.history.pushState({}, '', urlWithNoCode)
            console.log(code);
            signIn(code);
        }
       
    }, [])

    return (
        <Link href={signInUrl}>
        <button className={styles.loginwithgooglebtn} >
            Entrar
        </button>
        </Link>
    )
}