/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState, useContext } from 'react';
import Header from '../components/Header/Index'
import styles from '../styles/Jogar.module.scss'
import { api } from "../services/api";
import { AuthContext } from '../contexts/auth';

export default function Home() {
  const [img2, setImg2] = useState("./images/int.png");
  const [opponent, setOpponent] = useState('');
  const { user, signInUrl } = useContext(AuthContext);

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async function oponent() {
    const token = localStorage.getItem('@virtualpool:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const r = await api.get('/oponent', {});
    const { op } = r.data;
    while (op.id == user.id) {
      const r = await api.get('/oponent', {});
      const { op } = r.data;
    }

    setImg2(op.picture);
    setOpponent(op.nome);

    const duracao = Math.floor(Math.random() * 31).toString();
    
    const response = await api.post('/partida', {
      duracao: duracao,
      idOP: op.id,
      nomeOP: op.nome
    });

    const { par } = response.data;
    console.log(par);
    console.log(op);

  };
  return (
    <>
      <Head>
        <title>Virtual Pool | Jogar</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil" />
        <div className={styles.backgroudDegrade}>
          <div className={styles.perfil1}>
            <img src={user.picture} className={styles.imagePerfil} /><br />
            <span className={styles.textPerfil}>{user.nome}</span>
          </div>
          <img src="/images/vs.png" className={styles.vs} />
          <div className={styles.perfil2}>
            <img src={img2} className={styles.imagePerfil} /><br />
            <span className={styles.textPerfil}>{opponent}</span>
          </div>
          <div>
            <button className={styles.button} onClick={oponent}><span>Buscar partida</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

