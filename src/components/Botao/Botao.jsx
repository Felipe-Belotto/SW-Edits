import { Button } from '@mui/material';
import styles from './Botao.module.css';

export default function Botao(props) {
  return (
    <Button
      variant="contained"
      color={props.color}
      onClick={props.onClick}
      type={props.type}
    >
      {props.label}
    </Button>
  );
}
