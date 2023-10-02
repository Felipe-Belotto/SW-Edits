import { Button } from '@mui/material';
import styles from './Favoritar.module.css';
import { useState } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';

export default function Favoritar() {
  const [estadoFavorito, setEstadoFavorito] = useState(false);

  const botaoFavoritar = {
    display:"flex",
    gap: "16px",
    backgroundColor: "rgba(86, 86, 86, 0.26)",
    color: "white",
    textTransform: "none"
  };

  const botaoFavoritado = {
    display:"flex",
    gap: "16px",
    backgroundColor: "rgba(122, 122, 122, 0.26)",
    color: "white",
    textTransform: "none"
  };

  const aoClicar = () => {
    setEstadoFavorito(!estadoFavorito);
  };

  if(estadoFavorito === false) {
    return (
      <Button onClick={aoClicar} style={botaoFavoritar}>
       <StarOutlineIcon/>
      </Button>
    );
  } 
  else{
    return (
      <Button onClick={aoClicar} style={botaoFavoritado}>
        <GradeIcon style={{color:"orange"}}/>
      </Button>
    )
  }

  
}
