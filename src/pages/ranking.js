import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Ranking.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtual Pool | Ranking</title>
      </Head>
      <div className={styles.background}>
        <Header path="ranking"/>
        <div className={styles.backgroudDegrade}>
        </div>
      </div>
    </>
  )
}
