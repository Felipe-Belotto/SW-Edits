import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import styles from './PaginaBase.module.css';
import MenuLateral from '../../components/MenuLateral/MenuLateral';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

export default function PaginaBase() {
  const [menuAtivo, setMenuAtivo] = useContext(MenuContext);
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
