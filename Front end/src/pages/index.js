import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.scss'
import { api } from '../services/api';
import { useEffect } from 'react';

export default function Home() {

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
        <title>Virtual Pool | Início</title>
      </Head>
      <div className={styles.background}>
        <Header path={"home"}/>
        <div className={styles.backgroudDegrade}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img src="./images/vpool2.png" alt="Logo Virtual Pool" />
            </div>
            <div className={styles.text}>
              <span>
                Virtual Pool é um jogo competitivo de sinuca online, onde os usuários 
                ganham/perdem pontos após disputar partidas com outros jogadores. 
                Os jogadores são ranqueados de acordo com suas pontuações.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
