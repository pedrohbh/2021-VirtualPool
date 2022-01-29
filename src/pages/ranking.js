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
            <table>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Vitórias</th>
              </tr>
              <tr>
                <td>1º</td>
                <td>Baianinho</td>
                <td>2</td>
              </tr>
            </table>
        </div>
      </div>
    </>
  )
}
