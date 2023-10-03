import { Button } from '@mui/material';
import styles from './Favoritar.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useContext, useEffect, useState } from 'react';
/* import { FavoritosContext, useFavoritoContext } from '../../context/FavoritadosContext'; */

export default function Favoritar(props) {
  const [estadoFavorito, setEstadoFavorito] = useState(false);
  /* const { adicionarFavorito} = useFavoritoContext() */

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
   /*  adicionarFavorito(props.video) */
   console.log("A função de favoritar está em desenvolvimento")
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

  useEffect(() => {
    console.log((estadoFavorito ? `ativado (${horaAtual()})` : `desativado (${horaAtual()})`))
    
  })
  
  return (
    <Button onClick={aoClicar} style={estadoFavorito ? botaoFavoritado : botaoFavoritar}>
    {estadoFavorito ? iconeFavoritado : iconeFavoritar}
    </Button>
  );
}
