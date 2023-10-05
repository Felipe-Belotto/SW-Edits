import { Children } from 'react';
import styles from './BotaoNovo.module.css';

export default function BotaoNovo(props) {
  return <button onClick={props.onClick} className={styles.botaoCabecalho}>{props.label}</button>;
}
