import React from 'react';
import { Button } from '@mui/material';
import styles from './BotaoVerMais.module.css'

export default function BotaoVerMais (props) {
  const [textoOcultoVisivel, setTextoOcultoVisivel] = React.useState(false);

  const aoClicar = () => {
    setTextoOcultoVisivel(!textoOcultoVisivel);
  };

  return (
    <div className={styles.container}>
        <Button onClick={aoClicar} style={{width: "100%", marginBottom: "8px"}} >{props.label}</Button>
     
      <div className="texto-oculto" style={{ display: textoOcultoVisivel ? "block" : "none" }}>
        {props.conteudo}
      </div>
    </div>
  );
}



  

