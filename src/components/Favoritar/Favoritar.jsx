import { Button } from '@mui/material';
import styles from './Favoritar.module.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useFavoritos } from '../../context/VideosFavoritos';
import { useEffect, useState } from 'react';

export default function Favoritar(props) {
  const { adicionarFavorito, removerFavorito,limpaFavoritos, videosFavoritos } = useFavoritos();
  const [estadoFavorito, setEstadoFavorito] = useState(false);

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

  /*   if (estadoFavorito === false) {
      removerFavorito(props.id); // Substitua 'video.id' com o identificador real do vídeo
    } else {
      adicionarFavorito(props.video); // Substitua 'video' com o objeto do vídeo real
    } */
  };

  return (
    <Button onClick={aoClicar} style={estadoFavorito ? botaoFavoritado : botaoFavoritar}>
    {estadoFavorito ? iconeFavoritado : iconeFavoritar}
    </Button>
  );
}
