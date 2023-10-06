import { Button } from '@mui/material';
import styles from './Favoritar.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useContext, useEffect, useState } from 'react';
import { FavoritosContext } from '../../context/FavoritadosContext';
import { Link } from 'react-router-dom';

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
    backgroundColor: "rgba(86, 86, 86, 0.26)",
    color: "white",
    textTransform: "none"
  };

  const botaoFavoritado = {
    display: "flex",
    gap: "16px",
    backgroundColor: "rgba(122, 122, 122, 0.26)",
    color: "orange",
    textTransform: "none"
  };


const iconeFavoritar = <StarOutlineIcon />;
const iconeFavoritado = <GradeIcon />;


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
    <>    
    <Button onClick={aoClicar} style={estadoFavorito ? botaoFavoritado : botaoFavoritar}>
    {estadoFavorito ? iconeFavoritado : iconeFavoritar}
    </Button>
    </>

  );
}
