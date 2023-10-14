import React, { useEffect, useState, useRef, useContext } from 'react';
import styles from './BurgerMenu.module.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import BotaoLink from '../BotaoLink/BotaoLink';
import BotaoVerMais from '../BotaoVerMais/BotaoVerMais';
import { MenuContext } from '../../context/MenuContext';

export default function BurgerMenu(props) {
  const [menuAtivo, setMenuAtivo] = useContext(MenuContext);

  function aoClicar() {
    setMenuAtivo(!menuAtivo);
  }

  useEffect(() => {
    if (menuAtivo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <div className={styles.container}>
      <button onClick={aoClicar} className={styles.botao}>
        <Hamburger size={30} />
      </button>
    </div>
  );
}
