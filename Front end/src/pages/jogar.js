/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header/Index'
import styles from '../styles/Jogar.module.scss'

export default function Home() {
  const [img2, setImg2] = useState("./images/int.png");
  const [opponent, setOpponent] = useState('');
  
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "123 de Oliveira 4";

  var name2 = "";

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async function searchOp(){
    setImg2("./images/blank-profile-picture-973460__480.png");
    setOpponent("123 ennemy");
    await sleep(3000);
    window.location.href = "/jogo";
  }
  return (
    <>
      <Head>
        <title>Virtual Pool | Jogar</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.backgroudDegrade}>
          <div className={styles.perfil1}>
              <img src={img} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{name}</span>
          </div>
          <img  src="/images/vs.png" className={styles.vs}/>
          <div className={styles.perfil2}>
              <img src={img2} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{opponent}</span>
          </div>
          <div>
            <button className={styles.button} onClick={searchOp}><span>Buscar partida</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

