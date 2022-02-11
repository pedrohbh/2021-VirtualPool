import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Header from '../components/Header/Index.js';
import styles from '../styles/Perfil.module.scss';
import { AuthContext } from '../contexts/auth';
import {api} from '../services/api';

export default function Home() {
  const { user, signInUrl } = useContext(AuthContext);
  const router = useRouter();
  const [partidas, setPartidas] = useState([])
  const [resultado, setResultado] = useState('');
  const [oponente, setOponente] = useState('');

  useEffect(() => {
    if(!user){
      router.push(signInUrl);
    }

    /*api.get('/matchHist').then(response => {
      console.log(response.data);
    });*/
  }, [])
  
  return (
    <>
      <Head>
        <title>Virtual Pool | Perfil</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.backgroudDegrade}>
          <div className={styles.caixaStats}>
            <div className={styles.perfil}>
              <img src={user?.picture} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{user?.nome}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Vitórias</span>
              <span className={styles.textPerfil}>{user?.vitorias}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>V/D</span>
              <span className={styles.textPerfil}>{user?.vitorias/(user?.vitorias+user?.derrotas)}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Posição</span>
              <span className={styles.textPerfil}>CORRIGIRº</span>
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
              {/*
              {partidas.map(partida => {
                if (partida.idPerdedor === id) setResultado('Derrota');
                else if (partida.idVencedor === id) setResultado('Vitória');

                return(
                  <tr>
                  <td className={styles.td}>resultado</td>
                  <td className={styles.td}>josé</td>
                  <td className={styles.td}>{partida.data}</td>
                  <td className={styles.td}>{partida.duracao}</td>
                  </tr>
                )}
                )}*/}
                </tbody>
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
