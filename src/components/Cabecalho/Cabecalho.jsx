import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import Logo from '/public/Logo.png';
import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BotaoLink from '../BotaoLink/BotaoLink';

export default function Cabecalho() {
  const location = useLocation();

  const [displayBotao, setDisplayBotao] = useState('');
  
  const larguraTela = window.innerWidth;

  const [navDisplay, setNavDisplay] = useState("none")

  useEffect(() => {

    larguraTela > 768 ? setNavDisplay("flex") : setNavDisplay("none")
  
  }, [larguraTela]);

  useEffect(() => {
    setDisplayBotao(location.pathname === '/' ? 'flex' : 'none');
  }, [location.pathname]);

  return (
    <header className={styles.container}>
      <Link to="./">
        <img src={Logo} alt="Imagem do logo" className={styles.logo} />
      </Link>

      <nav className={styles.nav}>
      <Link to="/favoritos" style={{ textDecoration:"none", display: navDisplay }}>
        <a className={styles.navItem}>Favoritos</a>
      </Link>
      <BurgerMenu/>
      </nav>
    </header>
  );
}
