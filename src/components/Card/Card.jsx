import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <Link to={`/${props.id}`} className={styles.card}>
      <img src={props.imagem} /* imagem- */ className={styles.imagem} />
    </Link>
  );
}
