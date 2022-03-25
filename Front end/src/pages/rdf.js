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
  const [info, setInfo] = useState(null);
  const [rdf, setRDF] = useState('');
  const [rdfAll, setRDFAll] = useState('');

  function setProfile() {
    api.get('/perfil').then(response => {
      setInfo(response.data.user);
      api.get('/rdf/' + response.data.user.nome).then(response => {
        setRDF(response.data);
      });
    });

    api.get('/matchHist').then(response => {
      setPartidas(response.data.partidas);
    });

    api.get('/playerRank').then(response => {
      setRank(response.data);
    });

    api.get('/rdf').then(response => {
      setRDFAll(response.data);
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
        <Header path="rdf" />
        <div className={styles.backgroudDegrade}>
          <div className={styles.caixaStats}>
            <h2 style={{ textAlign: 'center' }}>Jogador Logado por Nome:</h2>
            <div className={styles.priRdf}>{rdf}</div>
            <h2 style={{ textAlign: 'center' }}>Jogadores Cadastrados:</h2>
            <div className={styles.secRdf}>{rdfAll}</div>
          </div>
        </div>
      </div>
    </>
  )
}
