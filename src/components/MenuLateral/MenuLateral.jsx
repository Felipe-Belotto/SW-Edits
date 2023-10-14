import { useContext } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import styles from './MenuLateral.module.css';
import { MenuContext } from '../../context/MenuContext';

export default function MenuLateral(props) {
  const [menuAtivo, setMenuAtivo] = useContext(MenuContext);

  return (
    <section
      className={styles.section__menu}
      style={{ display: props.display }}
    >
      <nav className={styles.nav}>
        <section className={styles.nav__section}>
          <MenuItem
            label="Inicio"
            to="/"
            img={<i className="fa-solid fa-house"></i>}
          />
          <MenuItem
            label="Favoritos"
            to="/favoritos"
            img={<i className="fa-solid fa-heart"></i>}
          />
        </section>

        <section className={styles.nav__section}>
          <MenuItem
            label="Add categoria"
            to="/novacategoria"
            img={<i className="fa-solid fa-list"></i>}
          />
          <MenuItem
            label="Add video"
            to="/novovideo"
            img={<i className="fa-solid fa-video"></i>}
          />
        </section>

        <section className={styles.nav__section}>
          <MenuItem
            label="Painel de controle"
            to="/controle"
            img={<i className="fa-solid fa-computer"></i>}
          />
        </section>
      </nav>
      <button
        onClick={() => {
          setMenuAtivo(!menuAtivo);
        }}
        className={styles.botao}
      />
    </section>
  );
}
