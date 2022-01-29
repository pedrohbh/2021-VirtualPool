import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Perfil.module.scss'


export default function Home() {
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "Baianinho"
  var vitorias = 2;
  var taxVitoria = 0.7;
  var rank = 2;
  var log = true;

  var partidas = [{
    resultado: "Vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "Vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "Derrota",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "Vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  }]
  
  const listItems = partidas.map((item) =>{
    if (item.resultado == "Vitória"){
      return (<div className={styles.caixaVitoria}>
          <span className={styles.textCaixa}>{item.resultado}</span>
          <span className={styles.textCaixa}>{item.oponente}</span>
          <span className={styles.textCaixa}>{item.data}</span>
          <span className={styles.textCaixa}>{item.duracao}</span>
        </div>)
    }else {
      return (<div className={styles.caixaDerrota}>
        <span className={styles.textCaixa}>{item.resultado}</span>
        <span className={styles.textCaixa}>{item.oponente}</span>
        <span className={styles.textCaixa}>{item.data}</span>
        <span className={styles.textCaixa}>{item.duracao}</span>
      </div>)
    }
  });
  
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
              <img src={img} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{name}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Vitórias</span>
              <span className={styles.textPerfil}>{vitorias}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>V/D</span>
              <span className={styles.textPerfil}>{taxVitoria}</span>
            </div>
            <div className={styles.stats}>
              <span className={styles.textStats}>Posição</span>
              <span className={styles.textPerfil}>{rank}º</span>
            </div>
          </div>
          <div className={styles.caixaStats}>
          <div className={styles.ultimasPartidas}>
            <span className={styles.texto}>Últimas partidas</span>
            {listItems}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
