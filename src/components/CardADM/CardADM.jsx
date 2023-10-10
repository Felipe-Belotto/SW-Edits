import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './CardADM.module.css';
import Botao from '../Botao/Botao';
import iconeAlterar from './iconeAlterar.png'
import iconeExcluir from './iconeExcluir.png'

export default function CardADM(props) {


  const aoPassarOMouse = () => {};

  const aoSairMouse = () => {};

  const aoExcluir = () => {alert("Apagando")}
  
  const aoAlterar = () => {alert("Alterando")}

  return (
    <>  
      <div
        className={styles.container}
        onMouseOver={aoPassarOMouse}
        onMouseLeave={aoSairMouse}
      >
        <img src={props.imagem} className={styles.imagem} />

<div className={styles.botoesADM}>
    <Botao onClick={aoExcluir} corFundo="rgba(12, 12, 12, 0.8)" label={<img src={iconeExcluir} className={styles.icone}/>} />
    <Botao onClick={aoAlterar} corFundo="rgba(12, 12, 12, 0.8)" label={<img src={iconeAlterar} className={styles.icone}/>} />
    </div>
    </div>
    
    </>
  );
}
