import { useEffect, useState } from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';

export default function Player() {
  const [video, setVideo] = useState(null); // Inicialize video como null
  const parametros = useParams();

  useEffect(() => {
    fetch(`https://6515e6ed09e3260018c94260.mockapi.io/filmes/${parametros.id}`) // Use o ID dos parâmetros para buscar um vídeo específico
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideo(dados);
      });
  }, [parametros.id]);

  if (!video) {
    return <div>Carregando...</div>;
  }

  console.log(video);
  return (
    <section className={styles.container}>
      <iframe
        width="100%"
        height="100%"
        src={video.video}
        title={video.titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className={styles.iframe}
      ></iframe>

      <h1 className={styles.titulo}>{video.titulo}</h1>
      <p className={styles.categoria}>{video.categoria}</p>
      <p className={styles.descricao}>{video.descricao}</p>
    </section>
  );
}
