/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/header'
import styles from '../styles/Cadastro.module.scss'
import { useRouter } from "next/dist/client/router";

export default function Home() {

    const { asPath } = useRouter();

    const [selected, setSelected] = useState(0)

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
                    
                    
                    {(selected === 0) && <div id={styles.login}>
                        <form method="post" action=""> 
                            <h1>Login</h1> 
                            <p> 
                                <label for="nome_login">Seu nome</label>
                                <input id="nome_login" name="nome_login" required="required" type="text" placeholder="ex. nome"/>
                            </p>
                            
                            <p> 
                                <label for="email_login">Sua senha</label>
                                <input id="email_login" name="email_login" required="required" type="password" placeholder="ex. senha" /> 
                            </p>
                            
                            <p> 
                                <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
                                <label for="manterlogado">Manter-me logado</label>
                            </p>
                            
                            <p> 
                                <input type="submit" value="Logar" /> 
                            </p>
                            <p className={styles.link}>
                                Ainda não tem conta?
                                <a className={styles.botao} onClick={()=>setSelected(1)}>Cadastre-se</a>
                            </p>
                        </form>
                            
                    </div>}
                    {(selected === 1) && <div id={styles.cadastro}>
                        <form method="post" action=""> 
                            <h1>Cadastro</h1> 
                            
                            <p> 
                                <label for="nome_cad">Seu nome</label>
                                <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="nome" />
                            </p>
                            
                            <p> 
                                <label for="email_cad">Seu e-mail</label>
                                <input id="email_cad" name="email_cad" required="required" type="email" placeholder="exemplo@hotmail.com"/> 
                            </p>
                            
                            <p> 
                                <label for="senha_cad">Sua senha</label>
                                <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="ex. 1234"/>
                            </p>
                            
                            <p> 
                                <input type="submit" value="Cadastrar"/> 
                            </p>
                            <p className={styles.link}>
                                Já tem conta?
                                <a className={styles.botao} onClick={()=>setSelected(0)}>Ir para Login</a>
                            </p>
                        </form>
                            
                    </div>}
                </div>
            </div>  
        </div>
      </div>
    </>
  )
}

