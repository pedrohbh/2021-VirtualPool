/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useEffect } from 'react';
import Header from '../components/header'
import styles from '../styles/Entrar.module.scss'
import { api } from '../services/api';
import { GoogleLogin } from '../components/GoogleLogin/Index';


//não esta funcionando por que o callback ta indo pra home
export default function Home() {
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
                            <a>
                              <div className={styles.g}>
                                <GoogleLogin/>
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

