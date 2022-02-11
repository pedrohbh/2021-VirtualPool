import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/Perfil.module.scss';
import { AuthContext } from '../contexts/auth';

export default function Home() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const [info, setInfo] = useState(null)
  const [partidas, setPartidas] = useState([])
  const [resultado, setResultado] = useState('');
  const [oponente, setOponente] = useState('');

  useEffect(() => {
    if(!user){
      router.push('/index');
    }
    
    api.get('/perfil').then(response => {
      setInfo(response.data);
    });
    api.get('/matchHist').then(response => {
      setPartidas(response.data);
    });
  }, [])

  var id = info.id;
  var img = info.picture;
  var name = info.nome;
  var vitorias = info.vitorias;
  var taxVitoria = vitorias/(vitorias+info.derrotas);

  /*
  var img = "./images/blank-profile-picture-973460__480.png";
  var name = "Baianinho"
  var vitorias = 2;
  var taxVitoria = 0.7;
  var rank = 2;
  var log = true;*/

  /*
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
  }]*/
  
  /*
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
  });*/
  
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
              <span className={styles.textPerfil}>CORRIGIRº</span>
            </div>
          </div>
          <div className={styles.caixaStats}>
          <div className={styles.ultimasPartidas}>
            <span className={styles.texto}>Últimas partidas</span>
            <table className={styles.table}>
              <tr>
                <th className={styles.th}>Resultado</th>
                <th className={styles.th}>Oponente</th>
                <th className={styles.th}>Data</th>
                <th className={styles.th}>Duração</th>
              </tr>
              {partidas.map(partida => {
                if (partida.idPerdedor === id) setResultado('Derrota');
                else if (partida.idVencedor === id) setResultado('Vitória');

                return(
                  <tr>
                  <td className={styles.td}>{resultado}</td>
                  <td className={styles.td}>josé</td>
                  <td className={styles.td}>partida.data</td>
                  <td className={styles.td}>partida.duracao</td>
                  </tr>
                )}
                )}
            </table>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}
