import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Header from '../components/Header/Index.js';
import styles from '../styles/Perfil.module.scss';
import { AuthContext } from '../contexts/auth';
import { api } from '../services/api';

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [partidas, setPartidas] = useState([]);
  const [rank, setRank] = useState('');

  useEffect(() => {
    if (!user) {
      router.push("/entrar");
    }

    api.get('/matchHist').then(response => {
      setPartidas(response.data.partidas);
    });

    api.get('/playerRank').then(response => {
      setRank(response.data);
    });
  }, [])

  return (
    <>
      <Head>
        <title>Virtual Pool | Perfil</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil" />
        <div className={styles.backgroudDegrade}>
          <div className={styles.caixaStats}>
            <div className={styles.perfil}>
              <img src={user?.picture} className={styles.imagePerfil} /><br />
              <span className={styles.textPerfil}>{user?.nome}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Vitórias</span>
              <span className={styles.textPerfil}>{user?.vitorias}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>% Vitórias</span>
              <span className={styles.textPerfil}>{user?.vitorias + user?.derrotas > 0 ? user?.vitorias / (user?.vitorias + user?.derrotas) : 0}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Rank</span>
              <span className={styles.textPerfil}>{rank}º</span>
            </div>
          </div>
          <div className={styles.caixaStats}>
            <div className={styles.ultimasPartidas}>
              <span className={styles.texto}>Últimas partidas</span>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th className={styles.th}>Resultado</th>
                    <th className={styles.th}>Oponente</th>
                    <th className={styles.th}>Data</th>
                    <th className={styles.th}>Duração</th>
                  </tr>
                  
                  {/*    {id: '80043415', duracao: 1, data: '2022-02-11T15:47:24.253Z', idPerdedor: '107922951625074779764', idVencedor: '113649247753510942802'}  */
                  /*partidas.map(partida => {
                    return (
                      <tr>
                        <td className={styles.td}>{user.id === partida.idVencedor ? 'Vitoria' : 'Derrota'}</td>
                        <td className={styles.td}>José</td>
                        <td className={styles.td}>{format(new Date(partida.data), 'dd MMM yyyy', {
                  locale: ptBR,
                })}</td>
                        <td className={styles.td}>{partida.duracao} Minutos</td>
                      </tr>
                    )
                  }
                )*/}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
