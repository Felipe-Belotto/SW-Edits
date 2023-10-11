import Botao from '../Botao/Botao';
import styles from './CategoriaBotoes.module.css';
import iconeAlterar from './iconeAlterar.png';
import iconeExcluir from './iconeExcluir.png';

export default function CategoriaBotoes() {
  function aoExcluir() {}
  function aoAlterar() {}

  return (
    <div className={styles.categorias_botoes}>
      <Botao
        onClick={aoExcluir}
        corFundo="rgba(153, 0, 0, 0.5)"
        label={<img src={iconeExcluir} className={styles.icone} />}
      />
      <Botao
        onClick={aoAlterar}
        corFundo="rgba(176, 114, 0, 0.568)"
        label={<img src={iconeAlterar} className={styles.icone} />}
      />
    </div>
  );
}
