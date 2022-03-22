import Head from 'next/head'
import Header from '../components/Header/Index.js'
import styles from '../styles/Sinuca.module.scss';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import Select from 'react-select'

export default function Home() {

  const [listaC, setListaC] = useState();
  const [listaJ, setListaJ] = useState();
  const [jogador, setJogador] = useState(null);
  const [descricao, setDescricao] = useState("Descrição");
  const [imagem, setImagem] = useState("Imagem");
  const [c, setC] = useState(false);
  const [j, setJ] = useState(false);

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
      setListaJ(response.data.response);
    });

  
    api.get('/campeoesreal').then(response => {
      setListaC(response.data.response);
    });
  }, [])

  useEffect(() => {
    jogador != null 
    ? api.get('/jogadorreal/'+jogador).then(response => {
      console.log(response.data.imagem)
      setImagem(response.data.imagem);
      setDescricao(response.data.descricao);
    })
    : null
  }, [jogador])


  const colourStylesCat = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        backgroundColor: !isSelected ? 'White' : '#CFCFCF',
        color: 'Black',
        cursor: isSelected ? 'not-allowed' : 'default',
        padding: "1%",
        fontWeight: isSelected ? "bold" : "normal",
        "&:hover": {
          border: "1px solid grey",
          boxShadow: `0px 0px 6px grey`
        }
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
        padding: "1%",
        fontWeight: isSelected ? "bold" : "normal",
        "&:hover": {
          border: "1px solid grey",
          boxShadow: `0px 0px 6px grey`
        }
      };
    },
  };

  const setAux = (c, j) => {
    setC(c);
    setJ(j);
  }

  const Categorias = () => (
    <Select styles={colourStylesCat} 
            width='200px'
            placeholder='Selecione a categoria'
            onChange={(data)=>{data.value == "campeoes" ? setAux(true, false) : setAux(false, true)}}
            options={picker} />
  )

  const BuscaC = () => (
    <Select styles={colourStylesJog} 
            width='200px'
            placeholder='Selecione o que buscar'
            onChange={(data)=>{setJogador(data.value)}}
            options={listaC} />
  )

  const BuscaJ = () => (
    <Select styles={colourStylesJog} 
            width='200px'
            placeholder='Selecione o que buscar'
            onChange={(data)=>{setJogador(data.value)}}
            options={listaJ} />
  )

  return (
    <>
      <Head>
        <title>Virtual Pool | Verdadeira Sinuca</title>
      </Head>
      <div className={styles.background}>
        <Header path="sinuca"/>
        <div className={styles.backgroudDegrade}>
            <div className={styles.picker}>
              {Categorias()}
            </div>
            <div className={styles.picker}>
              {j && BuscaJ()}
              {c && BuscaC()}
            </div>
            {jogador !== null && 
            <div className={styles.caixaStats}>
              <div className={styles.divImagem}>
                <img src={imagem} className={styles.imagePerfil}/> 
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
