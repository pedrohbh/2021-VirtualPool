/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useContext } from 'react';
import Header from '../components/Header/Index'
import styles from '../styles/Entrar.module.scss'
import { AuthContext } from '../contexts/auth';


//não esta funcionando por que o callback ta indo pra home
export default function Home() {
  const { signInUrl, user, signOut } = useContext(AuthContext);
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
                            <a href={signInUrl}>
                              <div className={styles.g}>
                                Login com Google
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

