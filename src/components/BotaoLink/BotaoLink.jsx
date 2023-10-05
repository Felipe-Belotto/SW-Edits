import { Children } from 'react';
import styles from './BotaoLink.module.css';
import { Link } from 'react-router-dom';

export default function BotaoLink(props) {

  return (
    <Link to={props.link} style={{textDecoration: "none"}}>
    <button onClick={props.onClick} className={styles.botao}>{props.label}</button>
    </Link>
  ) 

}
