import { Button } from '@mui/material';
import styles from './Favoritar.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useContext, useEffect, useState } from 'react';
import { FavoritosContext } from '../../context/FavoritadosContext';
import { Link } from 'react-router-dom';
import { Label } from '@mui/icons-material';
import C3POColorido from './iconeC3POcolorido.svg'
import C3POSemCor from './iconeC3PO.svg'


export default function Favoritar(props) {
  const { listaFavoritos, setListaFavoritos, adicionarVideo } = useContext(FavoritosContext);
  const [estadoFavorito, setEstadoFavorito] = useState(false);
  
  const verificaExistencia = () => listaFavoritos.some((v) => v.id === props.id);
  
  useEffect(() => {
    setEstadoFavorito(verificaExistencia());
  }, [listaFavoritos, props.id]); 
  
  

  const botaoFavoritar = {
    display: "flex",
    gap: "16px",
    backgroundColor: "rgba(48, 48, 48, 0.309)",
    color: "white",
    borderRadius: "16px",
    textTransform: "none"
  };

  const botaoFavoritado = {
    display: "flex",
    gap: "16px",
    backgroundColor: "rgba(196, 156, 105, 0.266)",
    color: "orange",
    textTransform: "none",
    borderRadius: "16px",
  };


const iconeFavoritar = <img src={C3POSemCor} className={styles.iconeFavoritar}/>
const iconeFavoritado = <img src={C3POColorido} className={styles.iconeFavoritar}/>


  const aoClicar = () => {
    setEstadoFavorito(!estadoFavorito);
    adicionarVideo(props.dados)
  };

  function horaAtual() {
    const dataAtual = new Date();

    // Extraia a hora, os minutos e os segundos
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    return horaFormatada
  }
  
  return (

    <section id={styles.sectionFavorito}>
    <Button id="btnFavoritar" onClick={aoClicar} style={estadoFavorito ? botaoFavoritado : botaoFavoritar}> 
    <label className={styles.botaoLabel}>{estadoFavorito ? "Favorito!" : "Favoritar"}</label>
    {estadoFavorito ? iconeFavoritado : iconeFavoritar}
    </Button>
    </section>


  );
}
