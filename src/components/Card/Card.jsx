import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Card.module.css';
import Botao from '../Botao/Botao';

export default function Card(props) {
  const [hoverAtivo, setHoverAtivo] = useState(false);

  const aoPassarOMouse = () => {
    setHoverAtivo(true);
  };

  const aoSairMouse = () => {
    setHoverAtivo(false);
  };

  return (
    <>    <Link to={`/${props.id}`} className={styles.card}>
      <div
        className={styles.container}
        onMouseOver={aoPassarOMouse}
        onMouseLeave={aoSairMouse}
      >
        <img src={props.imagem} className={styles.imagem} />
        {hoverAtivo && (
          <div className={styles.hover__ativo}>
            <h1 className={styles.card__nome}>{props.titulo}</h1>
          </div>
        )}
      </div>
    </Link>
    
    </>
  );
}
