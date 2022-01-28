import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Jogar.module.scss'

export default function Home() {
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "123 de Oliveira 4";

  var img2 = "./images/blank-profile-picture-973460__480.png";
  var name2 = "123 de Oliveira 4 2";
  return (
    <>
      <Head>
        <title>Virtual Pool | Perfil</title>
      </Head>
      <div className={styles.background}>
        <Header path="perfil"/>
        <div className={styles.backgroudDegrade}>
          <div className={styles.perfil1}>
              <img src={img} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{name}</span>
              
          </div>
          <div className={styles.vs}>VS</div>
          <div className={styles.perfil2}>
              <img src={img2} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{name2}</span>
          </div>
          <div>
            <button className={styles.button}>Buscar partida</button>
          </div>
        </div>
      </div>
    </>
  )
}

