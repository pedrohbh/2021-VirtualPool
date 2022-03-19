import Head from 'next/head'
import Header from '../components/Header/Index.js'
import styles from '../styles/Perfil.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import Select from 'react-select'

export default function Home() {

  const [ranking, setRanking] = useState([])
  const [selected, setSelected] = useState("");
  const [lista, setLista] = useState();
  const [jogador, setJogador] = useState(null);
  const [temFoto, setTemFoto] = useState(false);
  const [s, setS] = useState(false);
  const [dbinfo, setDbinfo] = useState([
    {
      value: "jog1",
      label: "jog1",
    },
    {
      value: "jog2",
      label: "jog2",
    }
  ]);

  const picker = [
    {
      value: "campeoes",
      label: "Campeões",
    },
    {
      value: "jogadores",
      label: "Jogadores",
    }
  ]

  const colourStylesCat = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        backgroundColor: !isSelected ? 'White' : '#CFCFCF',
        color: 'Black',
        cursor: isSelected ? 'not-allowed' : 'default',
      };
    },
  };

  const colourStylesJog = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        backgroundColor: !isSelected ? 'White' : '#CFCFCF',
        color: 'Black',
        cursor: isSelected ? 'not-allowed' : 'default',
      };
    },
  };

  useEffect(() => {
    api.get('/ranking').then(response => {
      setRanking(response.data.ranking);
    });
  }, [])

  const Categorias = () => (
    <Select styles={colourStylesCat} 
            width='200px'
            placeholder='Selecione a categoria'
            onChange={(data)=>{setS(true), setSelected(data.value), setLista(dbinfo);}}
            options={picker} />
  )

  const Busca = () => (
    <Select styles={colourStylesJog} 
            width='200px'
            placeholder='Selecione o que buscar'
            onChange={(data)=>{setJogador(data);}}
            options={lista} />
  )

  return (
    <>
      <Head>
        <title>Virtual Pool | Verdadeira Sinuca</title>
      </Head>
      <div className={styles.background}>
        <Header path="sinuca"/>
        <div className={styles.backgroudDegrade}>
            {Categorias()}
            {s && Busca()}
            {jogador !== null && 
            <div>
              <div>
                {temFoto
                  ?<img src={jogador.image} className={styles.imagePerfil}/>
                  :<img src={"https://images.tcdn.com.br/img/img_prod/683560/taco_de_sinuca_inteirico_baianinho_de_maua_oficial_maxxi_tacos_747_2_748871334406eb6f1d552f06aea0c53a_20210810085426.jpg"} className={styles.imagePerfil}/>}
              </div>
              <div>

              </div>
            </div>
            }
        </div>
      </div>
    </>
  )
}
