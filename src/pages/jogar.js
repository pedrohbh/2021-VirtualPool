import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Jogar.module.scss'

export default function Home() {
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "123 de Oliveira 4";

  var img2 = "./images/int.png";
  var name2 = "";

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  async function searchOp(){
    document.getElementById("opImg").src="./images/blank-profile-picture-973460__480.png";
    document.getElementById("opText").innerHTML="Inimigo do 123";
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
              <img id="opImg" src={img2} className={styles.imagePerfil}/><br/>
              <span id="opText" className={styles.textPerfil}>{name2}</span>
          </div>
          <div>
            <button className={styles.button} onClick={searchOp}><span>Buscar partida</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

