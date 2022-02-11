import Head from 'next/head'
import Header from '../components/Header/Index'
import styles from '../styles/Jogo.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Virtual Pool | Jogo</title>
      </Head>
      <div >
        <div className={styles.jogadores}>
          <button className={styles.button} onClick={() => window.location.href = "/jogar"}>voltar</button>
          <span>Será implementado futuramente?</span>
        </div>
        <div>
            <div className={styles.lateral}></div>
            <img className={styles.mesa} src="/images/mesaInteira.jpg"/>
            <div className={styles.lateral}></div>
        </div>
      </div>
    </>
  )
}

