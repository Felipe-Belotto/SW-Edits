import { Link, useLocation } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import Logo from '/public/Logo.png';
import { useContext, useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BotaoLink from '../BotaoLink/BotaoLink';
import MenuItem from '../MenuItem/MenuItem';
import MenuLateral from '../MenuLateral/MenuLateral';
import { MenuContext } from '../../context/MenuContext';

export default function Cabecalho() {
  const location = useLocation();

  const [displayBotao, setDisplayBotao] = useState('');

  const [menuAtivo, setMenuAtivo] = useContext(MenuContext);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.menu}>
          <BurgerMenu />
        </div>
        <Link to="./">
          <img src={Logo} alt="Imagem do logo" className={styles.logo} />
        </Link>

        <nav className={styles.nav}>
          <section className={styles.nav__itens}>
            <MenuItem
              label="Inicio"
              to="/"
              img={<i className="fa-solid fa-house"></i>}
            />
            <MenuItem
              label="Pesquisa"
              to="/pesquisa"
              img={<i class="fa-solid fa-magnifying-glass"></i>}
            />
            <MenuItem
              label="Favoritos"
              to="/favoritos"
              img={<i className="fa-solid fa-heart"></i>}
            />
          </section>

          <section className={styles.section__usario}>
            <p>Olá, Usuário</p>
            <div className={styles.imagem__usuario}>
              <i class="fa-solid fa-user"></i>
            </div>
          </section>
        </nav>
      </header>
      <MenuLateral display={menuAtivo ? 'flex' : 'none'} />
    </>
  );
}
