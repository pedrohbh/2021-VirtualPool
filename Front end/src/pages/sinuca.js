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
  const [listaC, setListaC] = useState();
  const [listaJ, setListaJ] = useState();
  const [jogador, setJogador] = useState(null);
  const [temFoto, setTemFoto] = useState(false);
  const [descricao, setDescricao] = useState("Descrição");
  const [imagem, setImagem] = useState("Imagem");
  const [s, setS] = useState(false);

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

  useEffect(() => {
    api.get('/jogadoresreal').then(response => {
      //setListaJ(response.data);
    });
  }, [])

    /*
    api.get('/campeoesreal').then(response => {
      console.log("camp: ", response);
      setListaC(response.data);
    });
  }, [])*/

  /*useEffect(() => {
    api.get('/jogadorreal').then(response => {
      setImagem(response.data.imagem);
      setDescricao(response.data.descricao);
    });
  }, [jogador])
  */

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

  const Categorias = () => (
    <Select styles={colourStylesCat} 
            width='200px'
            placeholder='Selecione a categoria'
            onChange={(data)=>{setS(true), setSelected(data.value), data.value == "campeoes" ? setLista(listaC) : setLista(listaJ);}}
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
                {temFoto ? <img src={jogador.image} className={styles.imagePerfil}/> : <img src={"https://images.tcdn.com.br/img/img_prod/683560/taco_de_sinuca_inteirico_baianinho_de_maua_oficial_maxxi_tacos_747_2_748871334406eb6f1d552f06aea0c53a_20210810085426.jpg"} className={styles.imagePerfil}/>}
              </div>
              <div>
                {descricao}
              </div>
            </div>
            }
        </div>
      </div>
    </>
  )
}
