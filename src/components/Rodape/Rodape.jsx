import styles from './Rodape.module.css';
import Logo from '/public/Logo.png';

export default function Rodape() {
  const linkedin = "https://www.linkedin.com/in/felipe-belotto-a34738185/"
  
  return (
    <footer className={styles.container}>
      <p className={styles.texto}>Desenvolvido por <a href={linkedin} className={styles.link} target='_blank'>Felipe Belotto</a> | 2023</p>

    </footer>
  );
}
