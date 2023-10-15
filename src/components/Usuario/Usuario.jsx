import React, { useState } from 'react';
import BotaoLink from '../BotaoLink/BotaoLink';
import styles from './Usuario.module.css';

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
          <BotaoLink label="Painel de controle" link="/controle" />
          <BotaoLink label="Adicionar video" link="/novovideo" />
          <BotaoLink label="Adicionar categoria" link="/novacategoria" />
        </section>
      </nav>
    </section>
  );
}
