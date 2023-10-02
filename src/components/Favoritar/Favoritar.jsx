import { Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useFavoritos } from '../../context/VideosFavoritos';
import { useState } from 'react';
import styles from './Favoritar.module.css'; // Certifique-se de ter o arquivo CSS correto

export default function Favoritar(props) {
  const { adicionarFavorito, removerFavorito, limpaFavoritos, videosFavoritos } = useFavoritos();
  const [estadoFavorito, setEstadoFavorito] = useState(false);

  const aoClicar = () => {
    setEstadoFavorito(!estadoFavorito);
    // Adicione lógica para adicionar/remover dos favoritos conforme necessário
  };

  return (
    <Button onClick={aoClicar} className={estadoFavorito ? styles.botaoFavoritado : styles.botaoFavoritar}>
      {estadoFavorito ? <GradeIcon /> : <StarOutlineIcon />}
    </Button>
  );
}
