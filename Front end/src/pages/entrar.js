/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/header'
import styles from '../styles/Entrar.module.scss'
import { useRouter } from "next/dist/client/router";

export default function Home() {

    const { asPath } = useRouter();

    const [selected, setSelected] = useState(0);

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
                            <p className={styles.link}> 
                                <input type="submit" className={styles.icon} value="Logar com Google" onClick={()=>window.location.href = "/google"}/> 
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

