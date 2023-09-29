import { Link, useLocation } from 'react-router-dom';
import BotaoNovoVideo from '../BotaoNovoVideo/BotaoNovoVideo';
import styles from './Cabecalho.module.css';
import Logo from '/public/Logo.png';
import { useEffect, useState } from 'react';

export default function Cabecalho() {
  const location = useLocation();

  // Defina o estado inicial com base no pathname atual
  const [displayBotao, setDisplayBotao] = useState('');

  useEffect(() => {
    setDisplayBotao(location.pathname === '/' ? 'flex' : 'none');
  }, [location.pathname]);

  return (
    <header className={styles.container}>
      <Link to="./">
        <img src={Logo} alt="Imagem do logo" className={styles.logo} />
      </Link>

      <nav>
        <Link
          to="./novovideo"
          style={{ display: displayBotao, textDecoration: 'none' }}
        >
          <BotaoNovoVideo />
        </Link>
      </nav>
    </header>
  );
}
