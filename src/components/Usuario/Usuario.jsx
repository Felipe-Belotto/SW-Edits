import React, { useState } from 'react';
import BotaoLink from '../BotaoLink/BotaoLink';
import styles from './Usuario.module.css';
import MenuItem from '../MenuItem/MenuItem';
import LinkButton from '../LinkButton/LinkButton';

export default function Usuario() {
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <section
      className={styles.container}
      onMouseEnter={() => setHoverStatus(true)}
      onMouseLeave={() => setHoverStatus(false)}
    >
      <section className={styles.section__usario}>
        <p>Usuário</p>
        <div className={styles.imagem__usuario}>
          <i className="fa-solid fa-user"></i>
        </div>
      </section>
      <nav
        className={styles.nav}
        style={{ display: hoverStatus ? 'flex' : 'none' }}
      >
        <div className={styles.usuario__container}></div>
        <section className={styles.nav__container}>
        <LinkButton
              label="Painel de controle"
              to="/controle"
              img={<i className="fa-solid fa-computer"></i>}
            />
        </section>
      </nav>
    </section>
  );
}
