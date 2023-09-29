import styles from './Rodape.module.css';
import Logo from '/public/Logo.png';

export default function Rodape() {
  return (
    <footer className={styles.container}>
      <img src={Logo} alt="Imagem do logo" className={styles.logo} />
    </footer>
  );
}
