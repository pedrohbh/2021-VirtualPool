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
            <table className={styles.table}>
              <tr>
                <th className={styles.th}>Posição</th>
                <th className={styles.th}>Usuário</th>
                <th className={styles.th}>Vitórias</th>
              </tr>
              <tr>
                <td className={styles.td}>1º</td>
                <td className={styles.td}>Baianinho</td>
                <td className={styles.td}>2</td>
              </tr>
              <tr>
                <td className={styles.td}>2º</td>
                <td className={styles.td}>Capixabinha</td>
                <td className={styles.td}>10</td>
              </tr>
            </table>
        </div>
      </div>
    </>
  )
}
