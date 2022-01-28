import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Perfil.module.scss'


export default function Home() {
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "123 de Oliveira 4"
  var vitorias = 2;
  var rank = 2;

  var partidas = [{
    resultado: "vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "derrota",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  },{
    resultado: "vitória",
    data: "19/12/2021",
    duracao: "14 minutos",
    oponente: "josé"
  }]
  
  const listItems = partidas.map((item) =>{
    if (item.resultado == "vitória"){
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
          <div>
            <div className={styles.perfil}>
              <img src={img} className={styles.imagePerfil}/><br/>
              <span className={styles.textPerfil}>{name}</span>
            </div>
            <div className={styles.perfil}>
              <span className={styles.textPerfil}>Número de vitórias</span>
              <span className={styles.textPerfil}>{vitorias}</span>
            </div>
            <div className={styles.perfil}>
              <span className={styles.textPerfil}>Posição no rankink</span>
              <span className={styles.textPerfil}>{rank}° Lugar</span>
            </div>
          </div>
          <div className={styles.ultimasPartidas}>
            <span className={styles.texto}>Últimas partidas</span>
            {listItems}
          </div>
        </div>
      </div>
    </>
  )
}
