/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/header'
import styles from '../styles/Entrar.module.scss'
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const signInUrl = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost:3000&client_id=218639380376-73spmg3ifncg0evje558kla6tb7jbqk4.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile';


  return (
    <>
      <Head>
        <title>Virtual Pool | Cadastro</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.backgroudDegrade}>
            <div className={styles.container} >
                <a className={styles.links} id="paracadastro"></a>
                <a className={styles.links} id="paralogin"></a>
        
                <div className={styles.content}>
                    <div  id={styles.login}>
                        <form method="post" action="">
                        <h1>Login</h1> 
                            <p className={styles.link} href={signInUrl}> 
                                <input type="submit" className={styles.icon} value="Logar com Google"/> 
                            </p>
                        </form>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </>
  )
}

