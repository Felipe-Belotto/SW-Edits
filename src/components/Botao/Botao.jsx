import { Button } from '@mui/material';
import styles from './Botao.module.css';

export default function Botao(props) {
  return (
    <Button
      variant="contained"
      color={props.color}
      onClick={props.onClick}
      type={props.type}
      className={styles.botao}
      style={{backgroundColor: props.corFundo}}
    >
      {props.label}
    </Button>
  );
}
