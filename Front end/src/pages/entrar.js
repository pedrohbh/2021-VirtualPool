/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useEffect } from 'react';
import Header from '../components/header'
import styles from '../styles/Entrar.module.scss'
import { api } from '../services/api';


//não esta funcionando por que o callback ta indo pra home
export default function Home() {
  const signInUrl = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3000&client_id=218639380376-73spmg3ifncg0evje558kla6tb7jbqk4.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email';

    async function signIn(googleCode) {
        const response = await api.post('/authenticate', {
            code: googleCode
        })

        const { token, jogador } = response.data;

        localStorage.setItem('@virtualpool:token', token);

        console.log(jogador);
    };

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
       
    }, []);

  return (
    <>
      <Head>
        <title>Virtual Pool | Entrar</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.backgroudDegrade}>
            <div className={styles.container} >
                <div className={styles.content}>
                    <div  id={styles.login}>
                        <h1>Login</h1>
                        <div className={styles.link}>
                            <a href={signInUrl} >
                              <div className={styles.g}>
                                Logar com Google
                              </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </>
  )
}

