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
        <div className={styles.div__main}>
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
            <MenuItem
              label="Pesquisa"
              to="/pesquisa"
              img={<i class="fa-solid fa-magnifying-glass"></i>}
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
        </div>

        <div className={styles.div__footer}>
          <h1>Felipe Belotto</h1>
          <div className={styles.div__contatos}>
            <a
              href="https://github.com/Felipe-Belotto"
              className={styles.contato__icone}
              target="_blank
            "
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/felipe-belotto-a34738185/"
              className={styles.contato__icone}
              target="_blank
            "
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Felipe-Belotto"
              className={styles.contato__icone}
              target="_blank
            "
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
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
