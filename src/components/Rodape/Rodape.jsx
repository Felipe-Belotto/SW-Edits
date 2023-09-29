import styles from './Rodape.module.css';
import Logo from '/public/Logo.png';

export default function Rodape() {
  return (
    <footer className={styles.container}>
      <p className={styles.texto}>Desenvolvido por Felipe Belotto</p>
      <p className={styles.texto}>2023</p>
    </footer>
  );
}
