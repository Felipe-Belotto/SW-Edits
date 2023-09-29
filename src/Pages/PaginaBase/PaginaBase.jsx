import { Outlet } from 'react-router-dom';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import Rodape from '../../components/Rodape/Rodape';
import styles from './PaginaBase.module.css';

export default function PaginaBase() {
  return (
    <>
      <Cabecalho />
      <section className={styles.main}>
        <Outlet />
      </section>

      <Rodape />
    </>
  );
}
