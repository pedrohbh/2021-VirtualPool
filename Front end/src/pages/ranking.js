import Head from 'next/head'
import Header from '../components/Header/Index.js'
import styles from '../styles/Ranking.module.scss'
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Home() {

  const [ranking, setRanking] = useState([])

  useEffect(() => {
    api.get('/ranking').then(response => {
      setRanking(response.data.ranking);
    });
  }, [])

  return (
    <>
      <Head>
        <title>Virtual Pool | Ranking</title>
      </Head>
      <div className={styles.background}>
        <Header path="ranking"/>
        <div className={styles.backgroudDegrade}>
            <table className={styles.table}>
              <tbody>
              <tr key={0}>
                <th className={styles.th}>Posição</th>
                <th className={styles.th}>Usuário</th>
                <th className={styles.th}>Vitórias</th>
              </tr>
              {
              ranking.map( (jogador, key) => {
                return(
                  <tr key={key+1}>
                    <td className={styles.td}>{key+1}º</td>
                    <td className={styles.td}>{jogador.nome}</td>
                    <td className={styles.td}>{jogador.vitorias}</td>
                  </tr>
                );
              })
              }
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}
