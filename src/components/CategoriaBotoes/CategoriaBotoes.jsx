import Botao from '../Botao/Botao'
import styles from './CategoriaBotoes.module.css'
import iconeAlterar from './iconeAlterar.png'
import iconeExcluir from './iconeExcluir.png'

export default function CategoriaBotoes() {

  return (
  <div className={styles.categorias_botoes}>
  <Botao  corFundo="rgba(12, 12, 12, 0.8)" label={<img src={iconeExcluir} className={styles.icone}/>} />
  <Botao corFundo="rgba(12, 12, 12, 0.8)" label={<img src={iconeAlterar} className={styles.icone}/>} />
  </div>)
}