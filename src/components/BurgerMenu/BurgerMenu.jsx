import React, { useEffect, useState, useRef } from 'react';
import styles from './BurgerMenu.module.css';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import BotaoLink from '../BotaoLink/BotaoLink';
import BotaoVerMais from '../BotaoVerMais/BotaoVerMais';

export default function BurgerMenu(props) {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const aoClicarFora = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', aoClicarFora);

    return () => {
      document.removeEventListener('click', aoClicarFora);
    };
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <button
        ref={buttonRef}
        onClick={() => setOpen(!isOpen)}
        className={styles.botao}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>

      {isOpen && (
        <nav ref={menuRef} className={styles.menu}>
          <h1 className={styles.titulo}>MENU</h1>
          <BotaoLink label={'Inicio'} link="/" />
          <BotaoLink label={'Favoritos'} link="/favoritos" />
          <div className={styles.adm}>
            <BotaoVerMais
              label={<h1 className={styles.tituloVerMais}>Opções ADM</h1>}
              conteudo={
                <div className={styles.botoesADM}>
                  <BotaoLink label="Painel de controle" link="/controle" />
                  <BotaoLink label="Vídeo +" link="/novovideo" />
                  <BotaoLink label="Categoria +" link="/novacategoria" />
                </div>
              }
            />
          </div>
        </nav>
      )}
    </div>
  );
}
