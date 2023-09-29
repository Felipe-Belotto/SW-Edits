import { useEffect, useState } from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';

export default function Player() {
  const [video, setVideo] = useState(null); // Inicialize video como null
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://6516db6809e3260018ca679b.mockapi.io/Edits/${parametros.id}`) // Use o ID dos parâmetros para buscar um vídeo específico
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(dados);
      });
  }, [parametros.id]);

  if (!video) {
    return <div>Carregando...</div>;
  }

  const categoriaEstilo = {
    backgroundColor: 's#0e0e0e ',
  };

  return (
    <section className={styles.playerContainer}>
      <iframe
        width="100%"
        height="100%"
        src={video.video}
        title={video.titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.iframe}
      ></iframe>

      <div className={styles.dadosContainer}>
        <h1 className={styles.titulo} style={categoriaEstilo}>
          <span className={styles.tituloContainer}>
            {' '}
            <span className={styles.spanTitulo}>Personagem:</span>
            {video.titulo}
          </span>
        </h1>
        <p className={styles.descricao}>
          <span className={styles.spanDescricao}>Descrição: </span>
          {video.descricao}
        </p>
      </div>
    </section>
  );
}
