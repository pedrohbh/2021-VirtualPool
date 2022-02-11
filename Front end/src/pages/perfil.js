import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Header from '../components/Header/Index.js';
import styles from '../styles/Perfil.module.scss';
import { AuthContext } from '../contexts/auth';
import { api } from '../services/api';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [partidas, setPartidas] = useState([]);
  const [rank, setRank] = useState('');

  function setProfile(){
    api.get('/matchHist').then(response => {
      setPartidas(response.data.partidas);
    });

    api.get('/playerRank').then(response => {
      setRank(response.data);
    });
  }

  useEffect(() => {
    if (!user) {
      router.push("/entrar");
    } else {
      setProfile();
    }
    
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
              <span className={styles.textPerfil}>{user?.vitorias + user?.derrotas > 0 ? Math.floor(100*user?.vitorias / (user?.vitorias + user?.derrotas)) : 0}</span>
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
                  
                  {
                  partidas.map(partida => {
                    return (
                      <tr>
                        <td className={styles.td}>{user?.id === partida.idVencedor ? 'Vitoria' : 'Derrota'}</td>
                        <td className={styles.td}>{user?.id === partida.idVencedor ? partida.nomePerdedor : partida.nomeVencedor}</td>
                        <td className={styles.td}>{format(new Date(partida.data), 'dd MMM yyyy', {
                  locale: ptBR,
                })}</td>
                        <td className={styles.td}>{partida.duracao} Minutos</td>
                      </tr>
                    )
                  }
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
