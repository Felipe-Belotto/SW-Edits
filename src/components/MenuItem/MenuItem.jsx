import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

export default function MenuItem(props) {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: 'none',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className={styles.item}>
        {props.img}
        <p className={styles.label}>{props.label}</p>
      </div>
    </Link>
  );
}
