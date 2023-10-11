import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './CardADM.module.css';
import Botao from '../Botao/Botao';
import iconeAlterar from './iconeAlterar.png';
import iconeExcluir from './iconeExcluir.png';

export default function CardADM(props) {
  const [statusVideo, setStatusVideo] = useState(false);

  async function deletarVideo() {
    const response = await fetch(
      `https://6516db6809e3260018ca679b.mockapi.io/Edits/${props.id}`,
      {
        method: 'DELETE',
      },
    );
    if (response.status === 200) {
      console.log('O video de ' + props.titulo + ' foi apagado com SUCESSO');
    } else {
      console.log('Não foi possivel apagar o video de ' + props.titulo);
    }

    setStatusVideo(true);
  }

  const aoPassarOMouse = () => {};

  const aoSairMouse = () => {};

  function aoExcluir() {
    confirm('Deseja deletar o video de ' + props.titulo)
      ? deletarVideo()
      : alert('O video não foi apagado');
  }

  const aoAlterar = () => {
    alert('Alterando');
  };

  return (
    <>
      <div
        className={styles.card}
        onMouseOver={aoPassarOMouse}
        onMouseLeave={aoSairMouse}
      >
        <img src={props.imagem} className={styles.imagem} />
        <p
          className={styles.apagado}
          style={{ display: statusVideo ? 'flex' : 'none' }}
        >
          {' '}
          Apagado{' '}
        </p>

        <div
          className={styles.botoesADM}
          style={{ display: statusVideo ? 'none' : 'flex' }}
        >
          <Botao
            onClick={aoExcluir}
            corFundo="rgba(153, 0, 0, 0.8)"
            label={<img src={iconeExcluir} className={styles.icone} />}
          />
          <Botao
            onClick={aoAlterar}
            corFundo="rgba(176, 114, 0, 0.8)"
            label={<img src={iconeAlterar} className={styles.icone} />}
          />
        </div>
      </div>
    </>
  );
}
