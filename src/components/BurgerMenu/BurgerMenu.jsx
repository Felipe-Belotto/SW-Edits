import React, { useEffect, useState } from 'react';
import styles from './BurgerMenu.module.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import BotaoLink from '../BotaoLink/BotaoLink';

export default function BurgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={props.onClick} className={styles.botao}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      
      {isOpen && (
        <nav className={styles.menu}>
          <BotaoLink label={"Inicio"} link="/"/>
          <BotaoLink label={"Favoritos"} link="/favoritos"/>
          <div className={styles.adm}>
            <h1 className={styles.titulo}>Administração</h1>    
            <BotaoLink label="Novo vídeo" link="/novovideo" />
            <BotaoLink label="Nova categoria" link="/novacategoria" />
            </div>
        </nav>
      )}
    </div>
  );
}
