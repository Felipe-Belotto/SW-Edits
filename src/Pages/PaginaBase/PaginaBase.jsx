import { Outlet, useLocation } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import styles from './PaginaBase.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import { useContext, useEffect } from 'react';
import { MenuContext } from '../../context/MenuContext';

export default function PaginaBase() {
  const location = useLocation();
  const [menuAtivo, setMenuAtivo] = useContext(MenuContext);

  useEffect(() => {
    if (location.pathname) {
      setMenuAtivo(false);
    }
  }, [location.pathname, setMenuAtivo]);

  return (
    <>
      <Cabecalho />
      <main className={styles.main}>
        <MenuLateral display={menuAtivo ? 'flex' : 'none'} />
        <Outlet />
      </main>
      <Rodape />
    </>
  );
}
