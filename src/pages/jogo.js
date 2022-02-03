import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/jogo.module.scss'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Virtual Pool | Jogo</title>
      </Head>
      <div >
        <div className={styles.jogadores}></div>
        <div>
            <div className={styles.lateral}></div>
            <img className={styles.mesa} src="/images/mesaInteira.jpg"/>
            <div className={styles.lateral}></div>

        </div>
      </div>
    </>
  )
}

