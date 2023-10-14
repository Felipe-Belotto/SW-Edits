import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import Logo from '/public/Logo.png';
import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BotaoLink from '../BotaoLink/BotaoLink';

export default function Cabecalho() {
  const location = useLocation();

  const [displayBotao, setDisplayBotao] = useState('');

  return (
    <header className={styles.container}>
      <BurgerMenu />
      <Link to="./">
        <img src={Logo} alt="Imagem do logo" className={styles.logo} />
      </Link>
    </header>
  );
}
