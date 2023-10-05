import React, { useState } from 'react';
import styles from './BurgerMenu.module.css';
import Hamburger from 'hamburger-react';
import BotaoNovo from '../BotaoNovo/BotaoNovo';
import { Link } from 'react-router-dom';

export default function BurgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={props.onClick} className={styles.botao}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      
      {isOpen && (
        <nav className={styles.menu}>
          <div className={styles.adm}>
            <h1>Administração</h1>
            <Link to="/novovideo" className={styles.link}>
            <BotaoNovo label="Novo vídeo" />
            </Link>
            </div>
        </nav>
      )}
    </div>
  );
}
